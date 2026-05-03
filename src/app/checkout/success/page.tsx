'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/store/use-cart-store';
import Navbar from '@/components/layout/navbar';
import styles from './checkout.module.css';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    // Clear the cart when order is successful
    clearCart();
  }, [clearCart]);

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.emptyContainer}>
        <div className={styles.successIcon}>
          <CheckCircle size={80} strokeWidth={1} />
        </div>
        <h1 className={styles.stepTitle}>Order Successful</h1>
        <p className={styles.subtitle}>
          Thank you for your purchase. We've sent a confirmation email <br /> 
          with your order details and tracking information.
        </p>
        
        <div className={styles.orderNumber}>
          ORDER #LX-{Math.floor(Math.random() * 1000000)}
        </div>

        <Link href="/shop" className={styles.continueBtn} style={{ maxWidth: '300px', margin: '3rem auto' }}>
          CONTINUE SHOPPING <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
