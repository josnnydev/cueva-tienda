'use server';
import { getProductById } from '@/prisma-db';


export default async function ProductsId({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params;
    const product = await getProductById(Number(id))

    

     

    return (
        <div className="container mx-auto px-4 py-8">
            <h1>{product?.name}</h1>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
            
        </div>
    );
}
   
 
