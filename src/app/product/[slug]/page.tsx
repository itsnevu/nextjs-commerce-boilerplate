import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import db from '@/lib/db';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const product = await db.product.findUnique({
    where: { slug },
  });

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Flora E-Commerce`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await db.product.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!product) notFound();

  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
          <Image
            src={product.images[0] || '/placeholder.png'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <span className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            {product.category.name}
          </span>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            ${Number(product.price).toLocaleString()}
          </p>
          <div className="prose dark:prose-invert max-w-none mb-8 text-zinc-600 dark:text-zinc-400">
            {product.description}
          </div>
          
          <button className="w-full md:w-fit px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:opacity-90 transition-opacity">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
