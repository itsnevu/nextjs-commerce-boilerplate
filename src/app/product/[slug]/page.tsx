import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import db from '@/lib/db';
import Navbar from '@/components/layout/navbar';
import ProductActions from '@/components/modules/product/product-actions';
import ProductCard from '@/components/modules/product/product-card';
import styles from '@/app/page.module.css';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { mockProducts } from '@/lib/mocks';

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
  return { title: `${product.name} | LUXE`, description: product.description };
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

  // Fallback to mock data
  if (!product) {
    product = mockProducts.find(p => p.slug === slug);
  }

  if (!product) notFound();

  const relatedProducts = mockProducts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main className={styles.main}>
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery Placeholder */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] rounded-main overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <Image
                src={product.images[0] || '/hero-placeholder.png'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-subtle overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  <Image src={product.images[0] || '/hero-placeholder.png'} alt="" width={200} height={200} className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Details */}
          <div className="flex flex-col pt-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 text-[10px] font-bold tracking-widest uppercase rounded-full">
                {product.category?.name || 'COLLECTION'}
              </span>
              <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
                IN STOCK
              </span>
            </div>

            {/* Sakti Urgency Engine (Stable Seed for SSR) */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400 rounded-full text-[9px] font-bold tracking-widest uppercase border border-amber-100 dark:border-amber-900/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                {(product.id.charCodeAt(0) % 10) + 7} People looking at this now
              </div>
              <div className="px-3 py-1.5 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-full text-[9px] font-bold tracking-widest uppercase border border-red-100 dark:border-red-900/20">
                Low Stock: Only {(product.id.charCodeAt(0) % 4) + 2} Left
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(Number(product.price))}
            </p>
            
            <div className="prose dark:prose-invert max-w-none mb-10 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              {product.description}
            </div>

            <ProductActions product={{
              id: product.id,
              name: product.name,
              price: Number(product.price),
              image: product.images[0] || '/hero-placeholder.png',
              slug: product.slug
            }} />

            <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Material</h4>
                <p className="text-sm text-zinc-500">Premium Sustainable Materials</p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Shipping</h4>
                <p className="text-sm text-zinc-500">Free Express Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">You May Also <span className="mono-text">Like</span></h2>
              <p className="text-zinc-500">Complete your space with these curated pieces.</p>
            </div>
            <Link href="/shop" className="text-sm font-bold underline underline-offset-8 decoration-zinc-300 hover:decoration-black transition-all">
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={{
                id: p.id,
                name: p.name,
                price: p.price,
                image: p.images[0],
                slug: p.slug,
                category: p.category.name
              }} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
