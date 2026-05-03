'use client';

import { Diamond, Camera, X, Play } from 'lucide-react';
import styles from '@/app/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <Diamond className={styles.logoIcon} size={24} strokeWidth={1.5} />
            <span className="mono-text">LUXE</span>
          </div>
          <p className={styles.brandTagline}>
            Elevating everyday environments through curated excellence and artisanal design.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" aria-label="Twitter"><X size={20} /></a>
            <a href="#" aria-label="Youtube"><Play size={20} /></a>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <h4>SHOP</h4>
          <a href="/shop?category=FURNITURE">Furniture</a>
          <a href="/shop?category=LIGHTING">Lighting</a>
          <a href="/shop?category=DECOR">Decor</a>
          <a href="/shop">New Arrivals</a>
        </div>
        
        <div className={styles.footerLinks}>
          <h4>ASSISTANCE</h4>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns & Exchanges</a>
          <a href="https://wa.me/6281234567890?text=Halo%20LUXE,%20saya%20ingin%20bertanya%20mengenai..." target="_blank">Contact via WhatsApp</a>
          <a href="#">FAQ</a>
        </div>
        
        <div className={styles.footerNewsletter}>
          <h4>JOIN THE CLUB</h4>
          <p>Subscribe to receive updates on new collections and exclusive events.</p>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="email@example.com" />
            <button>JOIN</button>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} LUXE E-COMMERCE. ALL RIGHTS RESERVED.</p>
        <div className={styles.footerLegal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
