import styles from "./page.module.css";
import ProductCard from "@/components/modules/product/product-card";
import { Shield, Truck, Gift, Globe, Star, Quote } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    { id: "1", name: "Topper Orthopedic", price: 789000, image: "/luxury_floral_hero.png", slug: "topper-orthopedic", category: "TOPPER" },
    { id: "2", name: "Orthopedic Foam", price: 1560000, image: "/luxury_floral_hero.png", slug: "orthopedic-foam", category: "BEST SELLER" },
    { id: "3", name: "Pocket Springbed", price: 1938000, image: "/luxury_floral_hero.png", slug: "pocket-spring", category: "PLUSH TOP" },
    { id: "4", name: "Natural Latex", price: 4900000, image: "/luxury_floral_hero.png", slug: "natural-latex", category: "PREMIUM" },
  ];

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

      {/* Hero Section */}
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

      {/* Features Bar */}
      <section className={styles.featuresBar + " glass"}>
        <div className={styles.featureItem}>
          <Shield className={styles.featureIcon} />
          <div>
            <h3>15 Years Warranty</h3>
            <p>Quality guaranteed.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <Truck className={styles.featureIcon} />
          <div>
            <h3>Free Delivery</h3>
            <p>JABODETABEK area.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <Gift className={styles.featureIcon} />
          <div>
            <h3>Special Bonus</h3>
            <p>Complimentary pillows.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <Globe className={styles.featureIcon} />
          <div>
            <h3>National Shipping</h3>
            <p>Across Indonesia.</p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className={styles.productSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured <span className="gold-text">Collections</span></h2>
          <p className={styles.sectionSubtitle}>Find the perfect match for your home artistry.</p>
        </div>
        <div className={styles.productGrid}>
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Client <span className="gold-text">Voices</span></h2>
        </div>
        <div className={styles.testimonialGrid}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.testimonialCard + " glass"}>
              <Quote className={styles.quoteIcon} />
              <p className={styles.testimonialText}>
                "Absolutely stunning quality. The attention to detail in the arrangements is unlike anything I've seen. Truly elevates the entire room's energy."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="#d4af37" color="#d4af37" />)}
                </div>
                <h4>Valued Customer {i}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h2 className="gold-text">FLORA</h2>
            <p>Defining your space, living well. Luxury floral artistry for the modern home.</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>IMPORTANT LINKS</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQ</a>
          </div>
          <div className={styles.footerLinks}>
            <h4>COMPANY</h4>
            <a href="#">Our Story</a>
            <a href="#">Contact Us</a>
            <a href="#">Boutique Locations</a>
          </div>
          <div className={styles.footerSocial}>
            <h4>PAYMENT METHODS</h4>
            <div className={styles.paymentLogos}>
              <div className={styles.paymentPlaceholder}>BNI</div>
              <div className={styles.paymentPlaceholder}>BRI</div>
              <div className={styles.paymentPlaceholder}>QRIS</div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 FLORA E-COMMERCE. POWERED BY PREMIUM ARTISTRY.</p>
        </div>
      </footer>
    </main>
  );
}
