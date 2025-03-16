import React from 'react'
import { getAllProducts } from '@/prisma-db'
import Image from 'next/image'
import Link from 'next/link';

export default async function Products() {
    const categorias = await getAllProducts();

    return (
        <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg p-8"> 
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nuestras Categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorias.map((categoria) => (
                    <Link 
                        key={categoria.id}
                        href={`/categories/${categoria.id}`} 
                        className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{categoria.nameCategoria}</h3>
                        <p className="text-gray-600">{categoria.products.length} productos</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
