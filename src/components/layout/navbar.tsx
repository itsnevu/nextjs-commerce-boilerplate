'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Diamond, Search, X, Heart, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store/use-cart-store';
import { useWishlistStore } from '@/lib/store/use-wishlist-store';
import { siteConfig } from '@/config/site';
import styles from '@/app/page.module.css';
import CartDrawer from '@/components/modules/cart/cart-drawer';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { getItemCount } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className={styles.navbar + " glass"}>
        <Link href="/" className={styles.logo}>
          {siteConfig.brand.logo && siteConfig.brand.logo !== '/logo.svg' ? (
            <div style={{ position: 'relative', width: '120px', height: '40px' }}>
              <Image 
                src={siteConfig.brand.logo} 
                alt={siteConfig.name} 
                fill 
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
          ) : (
            <>
              <Diamond className={styles.logoIcon} size={24} strokeWidth={1.5} />
              <span className="mono-text">{siteConfig.name}</span>
            </>
          )}
        </Link>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
          <button className={styles.closeMenu} onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
          
          <div className={styles.navItem}>
            <Link href="/shop" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>SHOP</Link>
            <div className={styles.megaMenu}>
              {siteConfig.categories.map((cat) => (
                <div key={cat.id} className={styles.megaMenuColumn}>
                  <h4>{cat.name}</h4>
                  <div className={styles.megaMenuList}>
                    {cat.subcategories.map((sub) => (
                      <Link 
                        key={sub} 
                        href={`/shop?category=${cat.name}`} 
                        className={styles.megaMenuLink}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.navItem}>
            <Link href="/story" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>STORY</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </div>
        </div>

        <div className={styles.navActions}>
          <button className={styles.menuBtn} onClick={() => setIsMenuOpen(true)}>
            <Menu size={20} strokeWidth={1.5} />
          </button>

          <div className={`${styles.searchWrapper} ${isSearchOpen ? styles.searchActive : ''}`}>
            <input 
              type="text" 
              placeholder="Search pieces..." 
              className={styles.searchInput} 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const query = (e.target as HTMLInputElement).value;
                  window.location.href = `/shop?search=${encodeURIComponent(query)}`;
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

          <Link 
            href="/auth/signin"
            className={styles.cartBtn}
            style={{ marginRight: '0.5rem' }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <button 
            className={styles.cartBtn}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {mounted && <span className={styles.cartCount}>{getItemCount()}</span>}
          </button>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
