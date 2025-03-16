import { getProductById } from '@/prisma-db';
import Link from 'next/link';
 

export default async function ProductsId({ params }: { params: Promise<{ id: string }> }) {
  const product = await getProductById((await params).id);  

  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg p-8">
      
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{product?.name}</h1>
      <p className="text-gray-600 mb-2 line-clamp-2">{product?.description}</p>
      <p className="text-xl font-bold text-green-600">{product?.price}</p>

      <div>
        <p>Veo que te interesa comprar este producto, por ahora no tenemos habilitada la compra directamente por la pagina, pero te invitamos a que te pongas en contacto con nosotros para que puedas adquirirlo, enlace a nuestro WhatsApp debajo</p>
        <Link href="https://wa.me/message/P3LU5C3LG4JPA1" target="_blank" className="text-green-600 font-bold">Whatsapp</Link>
      </div>
       
    </div>

     
  )
}
