import Link from 'next/link';
import styles from './not-found.module.css';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.glow} />
      
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not <span className="mono-text">Found</span></h1>
        <p className={styles.subtitle}>
          The piece you're looking for has moved to a different collection or no longer exists in our current curation.
        </p>
        
        <div className={styles.actions}>
          <Link href="/" className={styles.homeBtn}>
            <ArrowLeft size={16} /> BACK TO HOME
          </Link>
          <Link href="/shop" className={styles.shopBtn}>
            <ShoppingBag size={18} /> EXPLORE SHOP
          </Link>
        </div>
      </div>
    </main>
  );
}
