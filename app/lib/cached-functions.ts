import { cache } from 'react'
import { getAllProducts, getProductsByCategory, getProductById } from '@/prisma-db'

export const getCachedProducts = cache(async () => {
  const products = await getAllProducts()
  return products
})

export const getCachedProductsByCategory = cache(async (categoryId: string) => {
  const products = await getProductsByCategory(categoryId)
  return products
})

export const getCachedProductById = cache(async (id: string) => {
  const product = await getProductById(id)
  return product
})
