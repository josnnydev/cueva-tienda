import { getProductById } from '@/prisma-db';


export default async function ProductsId({
  params,
}: {
  params: { id: string };
}) {
  // Accede directamente a params.id
  const product = await getProductById(Number(params.id));

  // Validación en caso de que el producto no exista
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}