import React from 'react'
import {getCachedProductsByCategory}  from '@/app/lib/cached-functions'
import Image from 'next/image'
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const products = await getCachedProductsByCategory((await params).id);

    if (!products.length) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{products[0].categoria.nameCategoria}</h2>
            <div className="flex flex-col gap-4 items-center justify-center">
                {products.map((product) => (
                    <Link 
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
                    >
                        <div className="relative h-48">
                            <Image
                                src={product.image}
                                alt={product.name}
                                 
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={100}
                                priority
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                            <p className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
