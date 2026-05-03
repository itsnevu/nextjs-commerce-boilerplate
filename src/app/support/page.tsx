import styles from '@/app/page.module.css';
import { Truck, RotateCcw, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const faqs = [
    {
      q: "What is the expected delivery time?",
      a: "For domestic orders, delivery typically takes 3-5 business days. International architectural pieces may take 7-14 business days depending on customs and logistics."
    },
    {
      q: "Do you offer international shipping?",
      a: "Yes, LUXE ships globally. We partner with premium logistics providers to ensure your architectural pieces arrive in perfect condition."
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day return policy for most items in their original condition and packaging. Please note that bespoke or custom-made items are final sale."
    },
    {
      q: "Are the pieces covered by warranty?",
      a: "All LUXE pieces come with a 2-year limited warranty covering manufacturing defects and structural integrity under normal residential use."
    }
  ];

  return (
    <main className={styles.main}>
      <section className="container mx-auto px-6 py-24 lg:py-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-16 text-center">
            Studio <span className="italic opacity-40">Support</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div id="shipping" className="p-10 rounded-[32px] border border-zinc-100 bg-zinc-50 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-zinc-900">
                <Truck size={20} />
              </div>
              <h3 className="font-bold text-xs tracking-widest uppercase">Shipping Policy</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">Complimentary white-glove delivery on orders over Rp 10.000.000. Fully insured transit guaranteed.</p>
            </div>
            <div id="returns" className="p-10 rounded-[32px] border border-zinc-100 bg-zinc-50 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-zinc-900">
                <RotateCcw size={20} />
              </div>
              <h3 className="font-bold text-xs tracking-widest uppercase">Returns & Exchanges</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">30-day window for returns. Simply contact our concierge team to initiate the process.</p>
            </div>
            <div id="warranty" className="p-10 rounded-[32px] border border-zinc-100 bg-zinc-50 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-zinc-900">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-xs tracking-widest uppercase">Design Warranty</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">2-year coverage for all structural elements. We stand by the longevity of our creations.</p>
            </div>
          </div>

          <div id="faq" className="space-y-12">
            <div className="flex items-center gap-4 mb-12">
              <HelpCircle className="text-zinc-300" size={32} />
              <h2 className="text-3xl font-serif font-medium tracking-tight">Frequently Asked Questions</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-10 border-b border-zinc-100 last:border-0">
                  <h4 className="text-lg font-medium mb-4">{faq.q}</h4>
                  <p className="text-zinc-500 font-light leading-relaxed max-w-2xl">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-32 p-12 rounded-[40px] bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-2">Still need assistance?</h3>
              <p className="text-zinc-400 font-light">Our concierge team is ready to help you with anything.</p>
            </div>
            <Link href="/contact" className="px-10 py-5 bg-white text-zinc-900 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:scale-105 transition-transform flex items-center gap-3">
              Contact Studio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
