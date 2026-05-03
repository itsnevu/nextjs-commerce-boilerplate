import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar + " glass"}>
        <div className={styles.logo}>
          <span className="gold-text">FLORA</span> E-COMMERCE
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>COLLECTIONS</a>
          <a href="#" className={styles.navLink}>BOUTIQUE</a>
          <a href="#" className={styles.navLink}>STORY</a>
          <button className={styles.cartBtn + " glow-hover"}>
            CART <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Exquisite <span className="gold-text">Artistry</span> <br />
            For Every Moment
          </h1>
          <p className={styles.subtitle}>
            Discover our curated collection of luxury floral arrangements and artisanal gifts, 
            handcrafted to elevate your most precious celebrations.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn + " glow-hover"}>
              EXPLORE COLLECTIONS
            </button>
            <button className={styles.secondaryBtn}>
              OUR STORY
            </button>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imagePlaceholder + " glass"}>
            <div className={styles.glowOrb}></div>
            <img 
              src="/luxury_floral_hero.png" 
              alt="Luxury Floral Arrangement" 
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 FLORA E-COMMERCE. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
