import { siteConfig } from '@/config/site';
import { Diamond, Camera, X, Play } from 'lucide-react';
import styles from '@/app/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <Diamond className={styles.logoIcon} size={24} strokeWidth={1.5} />
            <span className="mono-text">{siteConfig.name}</span>
          </div>
          <p className={styles.brandTagline}>
            {siteConfig.brand.tagline}
          </p>
          <div className={styles.socialIcons}>
            <a href={siteConfig.contact.socials.instagram} target="_blank" aria-label="Instagram"><Camera size={20} /></a>
            <a href={siteConfig.contact.socials.twitter} target="_blank" aria-label="Twitter"><X size={20} /></a>
            <a href={siteConfig.contact.socials.youtube} target="_blank" aria-label="Youtube"><Play size={20} /></a>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <h4>SHOP</h4>
          {siteConfig.categories.map((cat) => (
            <a key={cat.id} href={`/shop?category=${cat.name}`}>{cat.name}</a>
          ))}
          <a href="/shop">New Arrivals</a>
        </div>
        
        <div className={styles.footerLinks}>
          <h4>ASSISTANCE</h4>
          <a href="/support#shipping">Shipping Policy</a>
          <a href="/support#returns">Returns & Exchanges</a>
          <a href="/contact">Contact Studio</a>
          <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20${siteConfig.name},%20saya%20ingin%20bertanya%20mengenai...`} target="_blank">WhatsApp Inquiry</a>
          <a href="/support#faq">FAQ</a>
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
        <p>&copy; {new Date().getFullYear()} {siteConfig.name} E-COMMERCE. ALL RIGHTS RESERVED.</p>
        <div className={styles.footerLegal}>
          <a href="/support#privacy">Privacy Policy</a>
          <a href="/support#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
