'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you. Our concierge will contact you shortly.");
    }, 1500);
  };

  return (
    <main className={styles.main}>
      <section className="container mx-auto px-6 py-24 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Info Side */}
          <div className="flex flex-col gap-16">
            <div>
              <h1 className="text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-8">
                Contact <span className="italic opacity-40">Studio</span>
              </h1>
              <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-md">
                Our concierge team is available to assist you with bespoke orders, technical inquiries, or private viewings.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shadow-sm text-zinc-900 flex-shrink-0">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest uppercase mb-2">Studio Location</h4>
                  <p className="text-zinc-900 font-medium leading-relaxed">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shadow-sm text-zinc-900 flex-shrink-0">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest uppercase mb-2">Electronic Mail</h4>
                  <p className="text-zinc-900 font-medium leading-relaxed">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center shadow-sm text-zinc-900 flex-shrink-0">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest uppercase mb-2">Studio Hours</h4>
                  <p className="text-zinc-900 font-medium leading-relaxed">Mon – Fri: 09:00 – 18:00</p>
                  <p className="text-zinc-400 text-sm">Sat – Sun: By Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-zinc-100">
              <h4 className="font-black text-[10px] tracking-widest uppercase mb-6">Connect with us</h4>
              <div className="flex gap-4">
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                  className="flex items-center gap-3 px-6 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold tracking-widest hover:bg-black transition-colors"
                >
                  <MessageSquare size={16} /> WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 rounded-[40px] border border-zinc-100 shadow-2xl">
            <h3 className="text-2xl font-serif font-medium mb-10">Direct Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="py-4 border-b border-zinc-200 outline-none focus:border-zinc-900 transition-colors bg-transparent font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    className="py-4 border-b border-zinc-200 outline-none focus:border-zinc-900 transition-colors bg-transparent font-medium"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Inquiry Type</label>
                <select className="py-4 border-b border-zinc-200 outline-none focus:border-zinc-900 transition-colors bg-transparent font-medium appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Assistance</option>
                  <option>Studio Viewing</option>
                  <option>Interior Consultancy</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-zinc-400">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we assist you today?"
                  className="py-4 border-b border-zinc-200 outline-none focus:border-zinc-900 transition-colors bg-transparent font-medium resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 bg-zinc-900 text-white rounded-2xl font-black text-[10px] tracking-[0.4em] uppercase flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : <><Send size={16} /> SEND MESSAGE</>}
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
