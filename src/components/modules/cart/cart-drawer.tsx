'use client';

import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/lib/store/use-cart-store';
import styles from './cart-drawer.module.css';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span>YOUR BAG ({items.length})</span>
          </div>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Your bag is empty</p>
              <button onClick={onClose} className={styles.continueBtn}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className={styles.itemList}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemHeader}>
                      <h4>{item.name}</h4>
                      <button onClick={() => removeItem(item.id)} className={styles.removeBtn}>
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className={styles.itemPrice}>
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}
                    </p>
                    <div className={styles.quantityControls}>
                      <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summary}>
              <span>SUBTOTAL</span>
              <span className={styles.totalAmount}>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(getTotalPrice())}
              </span>
            </div>
            <p className={styles.shippingNote}>Shipping and taxes calculated at checkout.</p>
            <Link href="/checkout" className={styles.checkoutBtn} onClick={onClose}>
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
