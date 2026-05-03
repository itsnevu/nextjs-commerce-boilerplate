'use client';

import styles from './contact.module.css';
import Navbar from '@/components/layout/navbar';
import { Mail, Phone, MapPin, Camera, X, Play, Send } from 'lucide-react';
import { useToastStore } from '@/lib/store/use-toast-store';

import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const { showToast } = useToastStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message Sent", "/hero.png");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <header className={styles.header}>
        <h1>Get in <span className="mono-text">Touch</span></h1>
        <p>{siteConfig.brand.tagline} Tim kami siap membantu Anda dengan layanan terbaik.</p>
      </header>

      <div className={styles.layout}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Subject</label>
            <select required className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-subtle">
              <option value="">Select a topic</option>
              <option value="inquiry">General Inquiry</option>
              <option value="order">Order Status</option>
              <option value="custom">Custom Design Request</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea rows={6} placeholder="Tell us how we can help you..." required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            SEND MESSAGE <Send size={18} className="inline ml-2" />
          </button>
        </form>

        <aside className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <h3>STUDIO ADDRESS</h3>
            <p><MapPin size={18} className="inline mr-2 text-zinc-400" /> {siteConfig.contact.address}</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>DIRECT CONTACT</h3>
            <p>
              <a href={`mailto:${siteConfig.contact.email}`}><Mail size={18} className="inline mr-2 text-zinc-400" /> {siteConfig.contact.email}</a><br />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}><Phone size={18} className="inline mr-2 text-zinc-400" /> {siteConfig.contact.phone}</a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3>BUSINESS HOURS</h3>
            <p>Senin — Jumat: 09:00 - 18:00<br />Sabtu: 10:00 - 16:00</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>FOLLOW US</h3>
            <div className={styles.socialGrid}>
              <a href={siteConfig.contact.socials.instagram} target="_blank" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                <Camera size={20} /> Instagram
              </a>
              <a href={siteConfig.contact.socials.twitter} target="_blank" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                <X size={20} /> Twitter
              </a>
              <a href={siteConfig.contact.socials.youtube} target="_blank" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                <Play size={20} /> Youtube
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
