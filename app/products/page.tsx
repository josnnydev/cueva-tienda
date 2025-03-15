import React from 'react'
import { getAllProducts } from '@/prisma-db'
import Image from 'next/image'
import Link from 'next/link';

 

export default async function Products() {
    const allProducts  = await getAllProducts();
    
    return (
        <div className="container mx-auto px-4 py-8"> 
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-64 w-full">
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                                quality={85}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2 truncate">{product.name}</h3>
                            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                            <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="p-4">
                            <Link href={`/products/${product.id}`}>Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
