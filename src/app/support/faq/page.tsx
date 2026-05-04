'use client';

import { useState } from 'react';
import styles from './faq.module.css';
import { Plus, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    q: "How long does global shipping take?",
    a: "Our standard global delivery typically takes 5-8 business days. For express white-glove service, we ensure delivery within 2-3 business days including premium handling."
  },
  {
    q: "What is your return policy for art pieces?",
    a: "We offer a 14-day curation guarantee. If the piece doesn't perfectly fit your space, you can return it for a full studio credit. Pieces must be in original condition with all authenticity certificates."
  },
  {
    q: "Are the products certified original?",
    a: "Every item in our collection comes with a digital and physical Certificate of Authenticity, signed by our lead curators and the designer/artist."
  },
  {
    q: "Do you offer interior design consultation?",
    a: "Yes, our Senior Curators are available for complimentary digital consultations to help you select pieces that harmonize with your architectural vision."
  },
  {
    q: "How do I track my secure shipment?",
    a: "Once your piece is dispatched, you will receive a secure tracking link via email and WhatsApp. Our logistics partners specialize in high-value asset transport."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Studio <span className="mono-text">Faq</span></h1>
        <p className={styles.subtitle}>Common inquiries about our collection and studio services.</p>
      </header>

      <div className={styles.grid}>
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`${styles.item} ${activeIndex === i ? styles.active : ''}`}
          >
            <button 
              className={styles.question}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <h3>{faq.q}</h3>
              <Plus className={styles.icon} size={24} />
            </button>
            <div className={styles.answer}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <section className={styles.cta}>
        <h2>Still Have Questions?</h2>
        <p>Our Studio Concierge is available 24/7 to assist with your inquiries.</p>
        <div className="flex justify-center gap-4">
          <Button variant="primary">
            <MessageSquare size={16} className="mr-2" /> CONTACT CONCIERGE
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/contact'}>
            VISIT STUDIO
          </Button>
        </div>
      </section>
    </main>
  );
}
