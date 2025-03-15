import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addProduct = async (name: string, description: string, price: number, image: string) => {
  await prisma.product.create({
    data: {
      name,
      description,
      price,
      image
    }
  })
}

const getAllProducts = async () => {
  return await prisma.product.findMany();
}

const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: {
      id
    }
  })
}

const updateProduct = async (id: number, name: string, description: string, price: number, image: string) => {
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

const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: {
      id
    }
  })
}

const deleteAllProducts = async () => {
  return await prisma.product.deleteMany();
}

const seed = async () => {  
    const productCount = await prisma.product.count();
    
    if(productCount == 0){
        await prisma.product.createMany({
          data: [
            {
              name: "Laptop Gaming Pro",
              description: "Potente laptop para gaming con la última tecnología",
              price: 1299.99,
              image: "/images/products/laptop.jpg"
            },
            {
              name: "Smartphone Ultra",
              description: "Smartphone de última generación con cámara profesional",
              price: 899.99,
              image: "/images/products/imagen2.jpg"
            },
            {
              name: "Auriculares Wireless",
              description: "Auriculares inalámbricos con cancelación de ruido",
              price: 199.99,
              image: "/images/products/imagen3.jpg"
            }
          ]
        })
    }
}

seed();


export { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct, deleteAllProducts, seed }