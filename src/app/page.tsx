import styles from "./page.module.css";
import ProductCard from "@/components/modules/product/product-card";
import { Shield, Truck, Gift, Globe, Star, Quote } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    { id: "1", name: "Designer Lounge Chair", price: 789000, image: "/hero-placeholder.png", slug: "designer-chair", category: "FURNITURE" },
    { id: "2", name: "Architectural Floor Lamp", price: 1560000, image: "/hero-placeholder.png", slug: "floor-lamp", category: "LIGHTING" },
    { id: "3", name: "Minimalist Marble Desk", price: 1938000, image: "/hero-placeholder.png", slug: "marble-desk", category: "INTERIOR" },
    { id: "4", name: "Artisanal Ceramic Vase", price: 4900000, image: "/hero-placeholder.png", slug: "ceramic-vase", category: "DECOR" },
  ];

  return (
    <main className={styles.main}>
      <nav className={styles.navbar + " glass"}>
        <div className={styles.logo}>
          <span className="mono-text">LUXE</span> E-COMMERCE
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>COLLECTIONS</a>
          <a href="#" className={styles.navLink}>DESIGN</a>
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
            Curated <span className="mono-text">Excellence</span> <br />
            For Modern Living
          </h1>
          <p className={styles.subtitle}>
            Discover our collection of high-end essentials and artisanal designs, 
            carefully selected to elevate your everyday environment.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn + " glow-hover"}>
              EXPLORE DESIGNS
            </button>
            <button className={styles.secondaryBtn}>
              LEARN MORE
            </button>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imagePlaceholder + " glass"}>
            <div className={styles.glowOrb}></div>
            <img 
              src="/hero-placeholder.png" 
              alt="Luxury Minimalist Design" 
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
          <h2 className={styles.sectionTitle}>Featured <span className="mono-text">Collections</span></h2>
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
          <h2 className={styles.sectionTitle}>Client <span className="mono-text">Voices</span></h2>
        </div>
        <div className={styles.testimonialGrid}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.testimonialCard + " glass"}>
              <Quote className={styles.quoteIcon} />
              <p className={styles.testimonialText}>
                "The design philosophy is evident in every detail. It's rare to find a brand that balances form and function so perfectly."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" color="currentColor" />)}
                </div>
                <h4>Design Partner {i}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h2 className="mono-text">LUXE</h2>
            <p>Defining your environment, living well. Luxury design for the modern era.</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>RESOURCES</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQ</a>
          </div>
          <div className={styles.footerLinks}>
            <h4>COMPANY</h4>
            <a href="#">Our Story</a>
            <a href="#">Contact Us</a>
            <a href="#">Showrooms</a>
          </div>
          <div className={styles.footerSocial}>
            <h4>SECURE PAYMENT</h4>
            <div className={styles.paymentLogos}>
              <div className={styles.paymentPlaceholder}>VISA</div>
              <div className={styles.paymentPlaceholder}>AMEX</div>
              <div className={styles.paymentPlaceholder}>STRIPE</div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 LUXE E-COMMERCE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
