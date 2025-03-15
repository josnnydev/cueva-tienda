import { getProductById } from '@/prisma-db';
import Image from 'next/image';
 
 
 

export default async function ProductsId({ 
    params,
  }: {
    params: Promise<{ id: string }>

  }) {
    const { id } = await params;
    const product = await getProductById(Number(id))

    if (!product) {
        return (
            <div>
                <h1>Producto no encontrado</h1>
            </div>
        );
    }

     

    return (
        <div className="container mx-auto px-4 py-8">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Image src={product.image} alt={product.name} width={300} height={300} />
        </div>
    );
}
   
 
