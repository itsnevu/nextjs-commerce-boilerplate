'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Improved scroll detection for cross-browser support
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initialize state
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Halo ${siteConfig.name}, saya tertarik dengan koleksi Anda.`);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4" style={{ zIndex: 9999 }}>
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`p-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} strokeWidth={1.5} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="p-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={1.5} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-bold tracking-widest uppercase rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-zinc-200 dark:border-zinc-800">
          Chat with us
        </span>
      </button>
    </div>
  );
}
