'use client';

import { useCartStore } from '@/lib/store/use-cart-store';
import styles from './cart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <h1>Your <span className="mono-text">Bag</span></h1>
        <p className="text-zinc-500">{items.length} items in your collection</p>
      </div>

      {items.length === 0 ? (
        <div className={styles.emptyState}>
          <ShoppingBag size={64} strokeWidth={1} className="mx-auto mb-6 text-zinc-300" />
          <h2>Your bag is feeling light.</h2>
          <p className="text-zinc-500 mb-8">Discover our curated collection and find something exceptional.</p>
          <Link href="/shop" className={styles.continueBtn}>
            EXPLORE DESIGNS
          </Link>
        </div>
      ) : (
        <div className={styles.layout}>
          <div className={styles.cartList}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="150px" />
                </div>
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}
                  </p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                      <Minus size={16} />
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className={styles.removeBtn} title="Remove item">
                  <Trash2 size={20} strokeWidth={1.5} />
                </button>
              </div>
            ))}
          </div>

          <aside className={styles.summary}>
            <h2>ORDER SUMMARY</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice())}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Calculated at checkout</span>
            </div>
            <div className={styles.totalRow}>
              <span>TOTAL</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice())}</span>
            </div>
            <Link href="/checkout" className={styles.checkoutBtn}>
              CHECKOUT <ArrowRight size={18} className="inline ml-2" />
            </Link>
            <p className="text-[10px] text-center mt-6 text-zinc-400 uppercase tracking-widest">
              Secure Checkout & Free Returns
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
