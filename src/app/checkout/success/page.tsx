'use client';

import styles from './success.module.css';
import Link from 'next/link';
import { Check, ArrowRight, Package, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Generate a random luxury order ID
    const randomId = 'LX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderId(randomId);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.card + ' glass'}>
        <div className={styles.iconWrapper}>
          <Check size={48} strokeWidth={1.5} />
        </div>
        
        <h1>THANK <span className="mono-text">YOU</span>.</h1>
        <p>Your order has been received and is currently being processed by our artisanal team. You will receive a confirmation email shortly.</p>
        
        <div className={styles.orderId}>
          ORDER ID: {orderId}
        </div>
        
        <div className={styles.actions}>
          <Link href="/shop" className={styles.primaryBtn}>
            CONTINUE SHOPPING <ArrowRight size={18} className="inline ml-2" />
          </Link>
          <Link href="/" className={styles.secondaryBtn}>
            BACK TO HOME
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-zinc-400">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
            <Package size={14} /> Tracking Available
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
            <Home size={14} /> White Glove Delivery
          </div>
        </div>
      </div>
    </main>
  );
}
