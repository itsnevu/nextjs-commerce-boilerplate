'use client';

import { useWishlistStore } from '@/lib/store/use-wishlist-store';
import ProductCard from '@/components/modules/product/product-card';
import Navbar from '@/components/layout/navbar';
import styles from '@/app/shop/shop.module.css'; // Reuse shop styles for grid
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function WishlistPage() {
  const { items } = useWishlistStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className={styles.main}>
      <Navbar />
      
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Your <span className="mono-text">Wishlist</span></h1>
          <p className={styles.subtitle}>
            A curated selection of items you've saved for later.
          </p>
        </div>
      </header>

      <section className={styles.shopSection}>
        <div className={styles.container}>
          {items.length === 0 ? (
            <div className="text-center py-32 bg-zinc-50 dark:bg-zinc-900 rounded-main border border-dashed border-zinc-200 dark:border-zinc-800">
              <Heart size={48} strokeWidth={1} className="mx-auto mb-6 text-zinc-300" />
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty.</h2>
              <p className="text-zinc-500 mb-8">Start exploring and save your favorite architectural designs.</p>
              <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white rounded-full font-bold hover:scale-105 transition-transform">
                GO TO SHOP <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className={styles.layout}>
              <div className={styles.productGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', width: '100%' }}>
                {items.map((product) => (
                  <ProductCard key={product.id} product={product as any} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
