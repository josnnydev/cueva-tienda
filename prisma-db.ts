 

 

 

// Funciones para interactuar con la base de datos
import { PrismaClient } from "@prisma/client";

if (!process.env.DATABASE_URL && !process.env.DIRECT_URL) {
  require("dotenv").config(); // Carga las variables si no están definidas
}

 
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

interface Product{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

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

const getAllProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return await prisma.product.findMany();
}

const getProductById = async (id: number): Promise<Product | null> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
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

 

 


export { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct, deleteAllProducts, seed }