import { siteConfig } from '@/config/site';
import { Diamond } from 'lucide-react';
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
            {/* Instagram */}
            <a href={siteConfig.contact.socials.instagram} target="_blank" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href={siteConfig.contact.socials.twitter} target="_blank" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href={siteConfig.contact.socials.tiktok} target="_blank" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.776 8.776 0 0 1-1.81-1.35v6.53c-.07 1.71-.39 3.49-1.3 4.98-.95 1.51-2.45 2.65-4.13 3.12-1.74.52-3.67.44-5.32-.23-1.64-.64-3-1.89-3.79-3.48a8.7 8.7 0 0 1-1.01-4.16c0-1.21.22-2.43.66-3.56.7-1.84 2.1-3.41 3.89-4.19 1.54-.68 3.32-.83 4.96-.45V8.15c-1.13-.3-2.35-.29-3.45.1-.96.34-1.82 1-2.43 1.83-.62.83-.96 1.85-1.02 2.9-.05 1.14.23 2.3.83 3.27.56.96 1.48 1.72 2.53 2.08 1.05.37 2.24.38 3.3.01a4.83 4.83 0 0 0 2.82-2.58c.36-.81.52-1.7.53-2.59V.02z" />
              </svg>
            </a>
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
          <h4>{siteConfig.content.newsletter.title}</h4>
          <p>{siteConfig.content.newsletter.subtitle}</p>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="email@example.com" />
            <button>{siteConfig.content.newsletter.button}</button>
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
