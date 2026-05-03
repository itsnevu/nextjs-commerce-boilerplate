'use client';

import { useWishlistStore } from '@/lib/store/use-wishlist-store';
import ProductCard from '@/components/modules/product/product-card';
import styles from '@/app/shop/shop.module.css'; 
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function WishlistPage() {
  const { items } = useWishlistStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {!mounted ? (
          <div className="py-32 text-center opacity-50">Loading collections...</div>
        ) : (
          <>
            <header className={styles.header}>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>Your <span className="mono-text">Wishlist</span></h1>
                <p className={styles.subtitle}>
                  A curated selection of items you've saved for later.
                </p>
              </div>
            </header>

            <section className={styles.shopSection}>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-40 px-6 rounded-main border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
                  <div className="relative mb-10">
                    <div className="absolute inset-0 opacity-20 blur-2xl rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                    <Heart size={64} strokeWidth={1} className="relative animate-pulse" style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">Your collections are empty</h2>
                  <p className="text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed text-center">
                    Explore our curated gallery and save the pieces that speak to your architectural vision. 
                  </p>
                  <Link href="/shop" className="group flex items-center gap-3 px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl">
                    DISCOVER DESIGNS 
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              ) : (
                <div className={styles.layout} style={{ gridTemplateColumns: '1fr' }}>
                  <div className={styles.productGrid}>
                    {items.map((product) => (
                      <ProductCard key={product.id} product={product as any} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
