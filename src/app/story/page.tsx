import Image from 'next/image';
import styles from './story.module.css';

export default function StoryPage() {
  return (
    <main className={styles.storyMain}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/hero.png"
          alt="Artisanal Craftsmanship"
          fill
          className={styles.heroBg}
          priority
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>OUR STORY</h1>
          <p className={styles.heroSubtitle}>Crafting the future of living</p>
        </div>
      </section>

      {/* Narrative Section 1 */}
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2>Heritage</h2>
          <h3>Born from a passion for timeless design.</h3>
          <p>
            LUXE was founded on the belief that our environments profoundly shape our well-being. What started as a small artisanal workshop has evolved into a global benchmark for luxury living.
          </p>
          <p>
            Every piece in our collection is a testament to the harmony between traditional craftsmanship and contemporary vision. We don't just create furniture; we curate legacies.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/hero.png"
            alt="Design Studio"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <p className={styles.quoteText}>
          "Design is not just what it looks like and feels like. Design is how it works and how it makes you feel."
        </p>
      </section>

      {/* Narrative Section 2 */}
      <section className={styles.sectionInverted}>
        <div className={styles.textBlock}>
          <h2>Sustainability</h2>
          <h3>Commitment to the planet and the craft.</h3>
          <p>
            We source only the finest sustainable materials, ensuring that every LUXE creation respects the environment from which it came. 
          </p>
          <p>
            Our "Slow Design" philosophy means we prioritize quality over quantity, creating pieces that are built to last for generations, reducing waste and honoring the artisan's time.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/hero.png"
            alt="Sustainable Materials"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Values */}
      <div className={styles.valuesGrid}>
        <div className={styles.valueCard}>
          <h4>UNCOMPROMISING QUALITY</h4>
          <p>Every joint, every stitch, and every finish is inspected to meet our rigorous standards of excellence.</p>
        </div>
        <div className={styles.valueCard}>
          <h4>ARTISANAL SPIRIT</h4>
          <p>We collaborate with master craftsmen who bring decades of experience and soul to every creation.</p>
        </div>
        <div className={styles.valueCard}>
          <h4>MODERN VISION</h4>
          <p>Our designs bridge the gap between classic silhouettes and the functional needs of modern life.</p>
        </div>
      </div>
    </main>
  );
}
