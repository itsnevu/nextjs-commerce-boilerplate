'use client';

import { useCartStore } from '@/lib/store/use-cart-store';
import styles from './checkout.module.css';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { PaymentService } from '@/lib/payment-service';
import { useRouter } from 'next/navigation';
import { MapPin, Truck, CreditCard, Lock, Loader2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { formatPrice } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [shipping, setShipping] = useState(150000);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  useEffect(() => {
    setMounted(true);
    if (items.length === 0 && mounted) {
      router.push('/shop');
    }
  }, [items, router, mounted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await PaymentService.createTransaction({
        orderId: 'LX-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        grossAmount: getTotalPrice() + shipping,
        customerDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        },
        items: items.map(i => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity
        }))
      });

      clearCart();
      router.push('/checkout/success');
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!mounted || items.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
      <Loader2 className="animate-spin text-zinc-300" size={48} />
    </div>
  );

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Check<span className="mono-text">out</span></h1>
        <p className="text-zinc-500 mt-2">Complete your order by providing your shipping and payment details.</p>
      </div>

      <form className={styles.layout} onSubmit={handlePlaceOrder}>
        <div className={styles.formSection}>
          {/* Shipping Details */}
          <div className={styles.block}>
            <h2><MapPin size={24} strokeWidth={1.5} /> SHIPPING DETAILS</h2>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="John" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Doe" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Street Address</label>
                <input 
                  type="text" 
                  name="address"
                  placeholder="Street name and number" 
                  value={formData.address}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label>City</label>
                <input 
                  type="text" 
                  name="city"
                  placeholder="Jakarta" 
                  value={formData.city}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Postal Code</label>
                <input 
                  type="text" 
                  name="postalCode"
                  placeholder="12345" 
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+62 812 3456 7890" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
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
            <p className="text-zinc-500 mb-6 text-sm">All transactions are secure and encrypted.</p>
            <div className={styles.option + ' ' + styles.activeOption}>
              <div className={styles.optionInfo}>
                <h4>Secure Payment Gateway</h4>
                <p>Debit/Credit Card, Virtual Account, E-Wallet</p>
              </div>
              <Lock size={20} className="text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <aside className={styles.sidebar}>
          <h3 className="font-bold tracking-widest text-xs uppercase mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">Your Order Summary</h3>
          <div className={styles.miniList}>
            {items.map((item) => (
              <div key={item.id} className={styles.miniItem}>
                <div className={styles.miniImage}>
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="60px" />
                </div>
                <div className={styles.miniInfo}>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.quantity} × {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span className="text-zinc-500">Subtotal</span>
              <span className="font-medium">{formatPrice(getTotalPrice())}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className="text-zinc-500">Shipping</span>
              <span className="font-medium">{formatPrice(shipping)}</span>
            </div>
            <div className={styles.totalRow + " border-t border-zinc-900 dark:border-white pt-6 mt-6"}>
              <span className="text-sm font-normal tracking-widest">TOTAL</span>
              <span>{formatPrice(getTotalPrice() + shipping)}</span>
            </div>
          </div>

          <button type="submit" className={styles.payBtn} disabled={isProcessing}>
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                PROCESSING... <Loader2 size={18} className="animate-spin" />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 uppercase tracking-widest">
                COMPLETE PURCHASE <ArrowRight size={18} />
              </div>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-[9px] text-zinc-400 uppercase tracking-[0.3em] font-bold">
            <ShieldCheck size={14} className="text-zinc-300" /> SSL SECURE PAYMENT GATEWAY
          </div>
        </aside>
      </form>
    </main>
  );
}
