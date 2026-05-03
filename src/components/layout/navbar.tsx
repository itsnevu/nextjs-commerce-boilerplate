'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Diamond, Search, X, Heart } from 'lucide-react';
import { useCartStore } from '@/lib/store/use-cart-store';
import { useWishlistStore } from '@/lib/store/use-wishlist-store';
import { siteConfig } from '@/config/site';
import styles from '@/app/page.module.css';
import CartDrawer from '@/components/modules/cart/cart-drawer';
import Link from 'next/link';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { getItemCount } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className={styles.navbar + " glass"}>
        <a href="/" className={styles.logo}>
          <Diamond className={styles.logoIcon} size={24} strokeWidth={1.5} />
          <span className="mono-text">{siteConfig.name}</span>
        </a>
        
        <div className={styles.navLinks}>
          <div className={styles.navItem}>
            <a href="/shop" className={styles.navLink}>SHOP</a>
            <div className={styles.megaMenu}>
              {siteConfig.categories.map((cat) => (
                <div key={cat.id} className={styles.megaMenuColumn}>
                  <h4>{cat.name}</h4>
                  <div className={styles.megaMenuList}>
                    {cat.subcategories.map((sub) => (
                      <a 
                        key={sub} 
                        href={`/shop?category=${cat.name}`} 
                        className={styles.megaMenuLink}
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.navItem}>
            <a href="/design" className={styles.navLink}>DESIGN</a>
          </div>
          <div className={styles.navItem}>
            <a href="/story" className={styles.navLink}>STORY</a>
          </div>

          <div className={styles.navActions}>
            <div className={`${styles.searchWrapper} ${isSearchOpen ? styles.searchActive : ''}`}>
              <input 
                type="text" 
                placeholder="Search products..." 
                className={styles.searchInput} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/shop?search=${(e.target as HTMLInputElement).value}`;
                  }
                }}
              />
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={styles.iconBtn}>
                {isSearchOpen ? <X size={18} /> : <Search size={18} strokeWidth={1.5} />}
              </button>
            </div>

            <Link 
              href="/wishlist"
              className={styles.cartBtn}
              style={{ marginRight: '0.5rem' }}
            >
              <Heart size={18} strokeWidth={1.5} />
              {mounted && wishlistItems.length > 0 && <span className={styles.cartCount}>{wishlistItems.length}</span>}
            </Link>

            <button 
              className={styles.cartBtn}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {mounted && <span className={styles.cartCount}>{getItemCount()}</span>}
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
