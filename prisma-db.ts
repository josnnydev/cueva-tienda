// Funciones para interactuar con la base de datos
import { Categoria, PrismaClient } from "@prisma/client";

if (!process.env.DATABASE_URL && !process.env.DIRECT_URL) {
  require("dotenv").config(); // Carga las variables si no están definidas
}


const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoriaId: string;
  categoria: Categoria;

}

const addProduct = async (name: string, description: string, price: number, image: string, categoriaId: string ) => {
  return await prisma.product.create({
    data: {
      name,
      description,
      price,
      image,
      categoriaId
    }
  })
}

const getAllProducts = async () => {
   
  return await prisma.categoria.findMany({
    include: {
      products: true
    }
  });
}

const getProductById = async (id: string): Promise<Product | null> => {
   
  return await prisma.product.findUnique({
    include: {
      categoria: true
    },
    where: {
      id
    }
  })
}

const getProductsByCategory = async (categoriaId: string): Promise<Product[]> => {
   
  return await prisma.product.findMany({
    where: {
      categoriaId
    },
    include: {
      categoria: true
    }
  })
}

const updateProduct = async (id: string, name: string, description: string, price: number, image: string) => {
  return await prisma.product.update({
    where: {
      id
    },
    data: {
      name,
      description,
      price,
      image
    }
  })
}

const deleteProduct = async (id: string, categoriaId: string) => {
  return await prisma.product.delete({
    where: {
      id,
      categoriaId
    }
  })
}

const deleteAllProducts = async () => {
  return await prisma.product.deleteMany();
}

const seed = async () => {
  const productCount = await prisma.product.count();

  if (productCount == 0) {
    console.log("Reiniciando base de datos...");



    // Crear categorías
    const categoria1 = await prisma.categoria.create({
      data: { nameCategoria: "Ropa Deportiva" },
    });

    const categoria2 = await prisma.categoria.create({
      data: { nameCategoria: "Relojes" },
    });

    // Crear productos
    await prisma.product.createMany({
      data: [
        {
          name: "Licra Deportiva",
          price: 950.99,
          image: "/images/licra-corta.webp",
          categoriaId: categoria1.id,
          description: ""
        },
        {
          name: "Licra Deportiva 2",
          price: 390.99,
          image: "/images/licra-corta3.webp",
          categoriaId: categoria1.id,
          description: ""
        },
        {
          name: "Curren 2",
          price: 1490.99,
          image: "/images/curren1.webp",
          categoriaId: categoria2.id,
          description: ""
        },
        {
          name: "Curren",
          price: 1650.99,
          image: "/images/curren4.webp",
          categoriaId: categoria2.id,
          description: ""
        },
      ],
    });

    console.log("Base de datos reiniciada con datos de prueba.");
  }

  seed()
    .catch((e) => console.error(e))
    .finally(async () => {
      await prisma.$disconnect();
    })
}







export { addProduct, getAllProducts, getProductById, getProductsByCategory, updateProduct, deleteProduct, deleteAllProducts, seed }