import Image from 'next/image';
import styles from './design.module.css';

export default function DesignPage() {
  return (
    <main className={styles.designMain}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/hero.png"
          alt="Architectural Design Philosophy"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>DESIGN PHILOSOPHY</h1>
          <p className={styles.heroDescription}>Precision. Clarity. Intent.</p>
        </div>
      </section>

      {/* Core Principles */}
      <div className={styles.philosophyGrid}>
        <div className={styles.philosophyCard}>
          <span className={styles.cardNumber}>01 / FUNCTION</span>
          <h3>Form follows purpose.</h3>
          <p>
            At LUXE, design begins with a question of utility. We strip away the superfluous to reveal the essential, ensuring that every curve and every joint serves a functional purpose in your daily life.
          </p>
        </div>
        <div className={styles.philosophyCard}>
          <span className={styles.cardNumber}>02 / AESTHETIC</span>
          <h3>The silent language of beauty.</h3>
          <p>
            We believe in quiet luxury. Our aesthetic is defined by balanced proportions, clean silhouettes, and a monochromatic palette that creates a canvas for living rather than a distraction from it.
          </p>
        </div>
        <div className={styles.philosophyCard}>
          <span className={styles.cardNumber}>03 / LONGEVITY</span>
          <h3>Resisting the ephemeral.</h3>
          <p>
            True sustainability is durability. We design pieces to transcend trends, utilizing construction methods that ensure our products age gracefully alongside the homes they inhabit.
          </p>
        </div>
        <div className={styles.philosophyCard}>
          <span className={styles.cardNumber}>04 / MATERIAL</span>
          <h3>Honesty in substance.</h3>
          <p>
            We celebrate the raw beauty of natural materials. From the grain of solid walnut to the coolness of Italian marble, we let the substance speak for itself without heavy-handed treatments.
          </p>
        </div>
      </div>

      {/* Material Spotlight */}
      <section className={styles.materialSection}>
        <div className={styles.materialHeader}>
          <h2>The Palette</h2>
          <h3>ARTISANAL MATERIALS</h3>
        </div>
        
        <div className={styles.materials}>
          <div className={styles.materialItem}>
            <h4>SOLID WALNUT</h4>
            <p>Sourced from sustainable forests, our walnut is hand-oiled to preserve its deep, rich character.</p>
          </div>
          <div className={styles.materialItem}>
            <h4>BRUSHED STEEL</h4>
            <p>Providing structural integrity with a refined, industrial edge that catches the light subtly.</p>
          </div>
          <div className={styles.materialItem}>
            <h4>FULL-GRAIN LEATHER</h4>
            <p>Develops a unique patina over time, telling the story of its use and environment.</p>
          </div>
          <div className={styles.materialItem}>
            <h4>ITALIAN MARBLE</h4>
            <p>Carefully selected for its unique veining, ensuring no two pieces are ever identical.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
