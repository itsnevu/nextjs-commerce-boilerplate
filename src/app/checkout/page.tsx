'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store/use-cart-store';
import Navbar from '@/components/layout/navbar';
import styles from './checkout.module.css';
import { CreditCard, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const [step, setStep] = useState(1);

  if (items.length === 0) {
    return (
      <main className={styles.main}>
        <Navbar />
        <div className={styles.emptyContainer}>
          <h2>Your bag is empty</h2>
          <p>You need to add some items before checking out.</p>
          <Link href="/shop" className={styles.backBtn}>BACK TO SHOP</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.checkoutLayout}>
          {/* Left Side: Forms */}
          <div className={styles.formSection}>
            <div className={styles.breadcrumb}>
              <span className={step >= 1 ? styles.activeStep : ''}>Shipping</span>
              <ChevronRight size={14} />
              <span className={step >= 2 ? styles.activeStep : ''}>Payment</span>
            </div>

            {step === 1 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Shipping Details</h2>
                <div className={styles.gridForm}>
                  <div className={styles.inputGroup}>
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Shipping Address</label>
                    <textarea placeholder="Street name, apartment, suite, etc."></textarea>
                  </div>
                  <div className={styles.inputGroup}>
                    <label>City</label>
                    <input type="text" placeholder="Jakarta" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Postal Code</label>
                    <input type="text" placeholder="12345" />
                  </div>
                </div>
                <button onClick={() => setStep(2)} className={styles.continueBtn}>
                  CONTINUE TO PAYMENT
                </button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepContent}>
                <h2 className={styles.stepTitle}>Payment Method</h2>
                <div className={styles.paymentOptions}>
                  <label className={styles.paymentCard}>
                    <input type="radio" name="payment" defaultChecked />
                    <div className={styles.paymentInfo}>
                      <CreditCard size={20} />
                      <div>
                        <strong>Bank Transfer / Virtual Account</strong>
                        <p>Automatic verification via Midtrans</p>
                      </div>
                    </div>
                  </label>
                  <label className={styles.paymentCard}>
                    <input type="radio" name="payment" />
                    <div className={styles.paymentInfo}>
                      <CreditCard size={20} />
                      <div>
                        <strong>Credit Card</strong>
                        <p>Visa, MasterCard, JCB</p>
                      </div>
                    </div>
                  </label>
                </div>
                <div className={styles.actionGroup}>
                  <button onClick={() => setStep(1)} className={styles.backLink}>Back to Shipping</button>
                  <Link href="/checkout/success" className={styles.continueBtn}>
                    COMPLETE PURCHASE
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Summary */}
          <aside className={styles.summarySidebar}>
            <div className={styles.summaryCard + " glass"}>
              <h3>ORDER SUMMARY</h3>
              <div className={styles.itemList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemLeft}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemQty}>Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className={styles.itemPrice}>
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className={styles.divider}></div>
              
              <div className={styles.priceRow}>
                <span>Subtotal</span>
                <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice())}</span>
              </div>
              <div className={styles.priceRow}>
                <span>Shipping</span>
                <span className={styles.freeText}>FREE</span>
              </div>
              <div className={`${styles.priceRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice())}</span>
              </div>

              <div className={styles.trustBadges}>
                <div className={styles.badge}>
                  <ShieldCheck size={16} />
                  <span>Secure Payment</span>
                </div>
                <div className={styles.badge}>
                  <Truck size={16} />
                  <span>Insured Shipping</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
