'use client';

import { useCartStore } from '@/lib/store/use-cart-store';
import styles from './checkout.module.css';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { PaymentService } from '@/lib/payment-service';
import { useRouter } from 'next/navigation';
import { MapPin, Truck, CreditCard, Lock, ChevronRight, Loader2 } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [shipping, setShipping] = useState(150000);

  useEffect(() => {
    setMounted(true);
    if (items.length === 0 && mounted) {
      router.push('/shop');
    }
  }, [items, router, mounted]);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Use the Payment Service Bridge
      const response = await PaymentService.createTransaction({
        orderId: 'LX-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        grossAmount: getTotalPrice() + shipping,
        customerDetails: {
          firstName: "Guest", // Would come from form in real app
          lastName: "User",
          email: "user@example.com",
          phone: "08123456789"
        },
        items: items.map(i => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity
        }))
      });

      // Clear cart and redirect
      clearCart();
      router.push('/checkout/success');
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!mounted || items.length === 0) return null;

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <h1>Check<span className="mono-text">out</span></h1>
      </div>

      <form className={styles.layout} onSubmit={handlePlaceOrder}>
        <div className={styles.formSection}>
          {/* Shipping Details */}
          <div className={styles.block}>
            <h2><MapPin size={24} strokeWidth={1.5} /> SHIPPING DETAILS</h2>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Address</label>
                <input type="text" placeholder="Street name and number" required />
              </div>
              <div className={styles.inputGroup}>
                <label>City</label>
                <input type="text" placeholder="Jakarta" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Postal Code</label>
                <input type="text" placeholder="12345" required />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Phone Number</label>
                <input type="tel" placeholder="+62 812 3456 7890" required />
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className={styles.block}>
            <h2><Truck size={24} strokeWidth={1.5} /> SHIPPING METHOD</h2>
            <div className={styles.shippingOptions}>
              <div 
                className={`${styles.option} ${shipping === 150000 ? styles.activeOption : ''}`}
                onClick={() => setShipping(150000)}
              >
                <div className={styles.optionInfo}>
                  <h4>Standard Delivery</h4>
                  <p>3-5 Business Days</p>
                </div>
                <span className={styles.price}>Rp 150.000</span>
              </div>
              <div 
                className={`${styles.option} ${shipping === 450000 ? styles.activeOption : ''}`}
                onClick={() => setShipping(450000)}
              >
                <div className={styles.optionInfo}>
                  <h4>Express Delivery</h4>
                  <p>Next Day Delivery</p>
                </div>
                <span className={styles.price}>Rp 450.000</span>
              </div>
            </div>
          </div>

          {/* Payment (Mock) */}
          <div className={styles.block}>
            <h2><CreditCard size={24} strokeWidth={1.5} /> PAYMENT</h2>
            <p className="text-zinc-500 mb-6">All transactions are secure and encrypted.</p>
            <div className={styles.option + ' ' + styles.activeOption}>
              <div className={styles.optionInfo}>
                <h4>Bank Transfer / Virtual Account</h4>
                <p>BCA, Mandiri, BNI, BRI</p>
              </div>
              <CreditCard size={20} className="text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <aside className={styles.sidebar}>
          <h3>YOUR ORDER</h3>
          <div className={styles.miniList}>
            {items.map((item) => (
              <div key={item.id} className={styles.miniItem}>
                <div className={styles.miniImage}>
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="60px" />
                </div>
                <div className={styles.miniInfo}>
                  <h4>{item.name}</h4>
                  <p>{item.quantity} × {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice())}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(shipping)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>TOTAL</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice() + shipping)}</span>
            </div>
          </div>

          <button type="submit" className={styles.payBtn} disabled={isProcessing}>
            {isProcessing ? (
              <>
                PROCESSING... <Loader2 size={18} className="inline ml-2 animate-spin" />
              </>
            ) : (
              <>
                PLACE ORDER <Lock size={18} className="inline ml-2" />
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
            <ShieldCheck size={12} /> SSL SECURE PAYMENT
          </div>
        </aside>
      </form>
    </main>
  );
}

function ShieldCheck({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
