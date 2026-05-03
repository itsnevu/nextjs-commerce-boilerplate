import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import db from '@/lib/db';
import { mockProducts } from '@/lib/mocks';
import { siteConfig } from '@/config/site';
import ProductPageClient from './ProductClient';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  let product: any = null;
  
  if (process.env.DATABASE_URL) {
    try {
      product = await db.product.findUnique({ where: { slug } });
    } catch (e) {}
  }
  
  if (!product) {
    product = mockProducts.find(p => p.slug === slug);
  }
  
  if (!product) return { title: 'Product Not Found' };
  return { title: `${product.name} | ${siteConfig.name}`, description: product.description };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  let product: any = null;

  if (process.env.DATABASE_URL) {
    try {
      product = await db.product.findUnique({
        where: { slug },
        include: { category: true },
      });
    } catch (e) {}
  }

  if (!product) {
    product = mockProducts.find(p => p.slug === slug);
  }

  if (!product) notFound();

  const relatedProducts = mockProducts.filter(p => p.slug !== slug).slice(0, 3);

  return <ProductPageClient product={product} relatedProducts={relatedProducts} />;
}
