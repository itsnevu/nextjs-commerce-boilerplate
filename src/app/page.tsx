import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/components/modules/product/product-card";
import { Shield, Truck, Sparkles, Headset, Star, Quote, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { mockProducts } from "@/lib/mocks";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);
  const { hero, features, testimonials } = siteConfig.content;

  // Map icons to features
  const featureIcons = [Truck, Shield, Sparkles, Headset];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            {hero.title.split(' ').map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="mono-text">{word}</span> : word}{' '}
                {i === 1 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>
            {hero.subtitle}
          </p>
          <div className={styles.ctaGroup}>
            <a href="/shop" className={styles.primaryBtn + " glow-hover"}>
              {hero.primaryCta}
            </a>
            <a href="/story" className={styles.secondaryBtn}>
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imagePlaceholder + " glass"}>
            <div className={styles.glowOrb}></div>
            <Image 
              src="/hero.png" 
              alt="Luxury Collection" 
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
        {features.map((feature, i) => {
          const Icon = featureIcons[i % featureIcons.length];
          return (
            <div key={i} className={styles.featureItem}>
              <Icon className={styles.featureIcon} strokeWidth={1.5} />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          );
        })}
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
          {testimonials.map((t, i) => (
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
            <p>Connect with our Studio</p>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className={styles.whatsappBtn}>
              <MessageCircle size={18} />
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
