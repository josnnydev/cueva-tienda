import { getProductById } from '@/prisma-db';
 
import Image from 'next/image';
import { notFound } from 'next/navigation';

 

 
 

export default async function ProductPage(
  
  {params}: {params: Promise<{ id: string }>}

  )  {
   
   

  const {id} = await params;

  const product = await getProductById(Number(id));
   


  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        
        <div className="relative h-64 mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
