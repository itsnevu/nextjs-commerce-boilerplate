import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/components/modules/product/product-card";
import { Shield, Truck, Gift, Globe, Star, Quote, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { mockProducts } from "@/lib/mocks";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Curated <span className="mono-text">Excellence</span> <br />
            For Modern Living
          </h1>
          <p className={styles.subtitle}>
            {siteConfig.brand.tagline}
          </p>
          <div className={styles.ctaGroup}>
            <a href="/shop" className={styles.primaryBtn + " glow-hover"}>
              EXPLORE DESIGNS
            </a>
            <a href="/story" className={styles.secondaryBtn}>
              LEARN MORE
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imagePlaceholder + " glass"}>
            <div className={styles.glowOrb}></div>
            <Image 
              src="/hero.png" 
              alt="Luxury Interior Design" 
              fill 
              className={styles.heroImage}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className={styles.featuresBar + " glass"}>
        <div className={styles.featureItem}>
          <Shield className={styles.featureIcon} strokeWidth={1.5} />
          <div>
            <h3>Lifetime Warranty</h3>
            <p>Quality guaranteed.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <Truck className={styles.featureIcon} strokeWidth={1.5} />
          <div>
            <h3>Global Shipping</h3>
            <p>Doorstep delivery.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <Gift className={styles.featureIcon} strokeWidth={1.5} />
          <div>
            <h3>Premium Rewards</h3>
            <p>Exclusive member benefits.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <Globe className={styles.featureIcon} strokeWidth={1.5} />
          <div>
            <h3>Sustainable</h3>
            <p>Ethically sourced.</p>
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
            <ProductCard key={p.id} product={p as any} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Client <span className="mono-text">Voices</span></h2>
        </div>
        <div className={styles.testimonialGrid}>
          {[
            { name: "Arif Budiman", text: "Kualitas produknya luar biasa. Detail pengerjaannya sangat rapi dan memberikan kesan mewah pada ruangan saya." },
            { name: "Siti Sarah", text: "Desain yang sangat minimalis namun tetap fungsional. Sangat cocok dengan konsep rumah modern saya." },
            { name: "Kevin Sanjaya", text: "Pelayanan sangat profesional dan pengiriman tepat waktu. Sangat merekomendasikan LUXE untuk interior rumah." },
            { name: "Dewi Lestari", text: "Benar-benar mengubah suasana rumah menjadi lebih berkelas. Setiap tamu yang datang selalu memuji furniture-nya." },
            { name: "Budi Santoso", text: "Material yang digunakan terasa sangat premium. Ini adalah investasi terbaik untuk dekorasi rumah saya." },
            { name: "Maya Putri", text: "Suka sekali dengan konsep megamenu-nya, memudahkan saya mencari kategori yang saya butuhkan. Produknya pun eksklusif." },
          ].map((t, i) => (
            <div key={i} className={styles.testimonialCard + " glass"}>
              <Quote className={styles.quoteIcon} />
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" color="currentColor" />)}
                </div>
                <h4>{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer + " glass"}>
          <div className={styles.contactBrand}>
            <h2><span className="mono-text">{siteConfig.name}</span> DESIGN</h2>
          </div>
          <div className={styles.contactAction}>
            <p>Hubungi Kami</p>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className={styles.whatsappBtn}>
              <MessageCircle size={18} />
              Whatsapp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
