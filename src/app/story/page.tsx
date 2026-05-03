import styles from '@/app/page.module.css';
import Image from 'next/image';
import { Diamond, Award, Heart, ShieldCheck } from 'lucide-react';

export default function StoryPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <Diamond size={40} strokeWidth={1} className="text-zinc-900" />
          </div>
          <h1 className="text-6xl lg:text-8xl font-serif font-medium tracking-tight mb-12">
            The Art of <span className="italic opacity-40">Quiet Luxury</span>
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-500 leading-relaxed font-light">
            LUXE was founded on a simple realization: that modern spaces deserve more than just furniture. 
            They deserve pieces that tell a story of architectural integrity and artisanal excellence.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-zinc-50 py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <Image 
              src="/hero-placeholder.png" 
              alt="Artisanal Workshop" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-tight">Our <span className="italic opacity-40">Philosophy</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Award size={20} className="text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest uppercase mb-2">Uncompromising Quality</h4>
                  <p className="text-zinc-500 leading-relaxed font-light">Every curve and joint is inspected by master craftsmen to ensure it meets our rigorous standards of perfection.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <ShieldCheck size={20} className="text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest uppercase mb-2">Architectural Integrity</h4>
                  <p className="text-zinc-500 leading-relaxed font-light">We believe in form following function, but with an aesthetic that transcends time and seasonal trends.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Heart size={20} className="text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest uppercase mb-2">Artisanal Heart</h4>
                  <p className="text-zinc-500 leading-relaxed font-light">Despite our global reach, we remain a studio of creators who value the human touch in every piece we curate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <span className="text-zinc-300 text-5xl font-serif italic mb-6 block">01.</span>
            <h3 className="text-xl font-medium tracking-tight mb-4">Curated Excellence</h3>
            <p className="text-zinc-500 font-light leading-relaxed">We don't sell products; we curate environments. Every piece in our studio is chosen for its ability to elevate a space.</p>
          </div>
          <div>
            <span className="text-zinc-300 text-5xl font-serif italic mb-6 block">02.</span>
            <h3 className="text-xl font-medium tracking-tight mb-4">Sustainable Legacy</h3>
            <p className="text-zinc-500 font-light leading-relaxed">Our pieces are built to last generations, reducing waste and creating a legacy of design for your family.</p>
          </div>
          <div>
            <span className="text-zinc-300 text-5xl font-serif italic mb-6 block">03.</span>
            <h3 className="text-xl font-medium tracking-tight mb-4">Global Perspective</h3>
            <p className="text-zinc-500 font-light leading-relaxed">Inspired by mid-century modernism and contemporary minimalism, our designs are built for the global citizen.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-zinc-950 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-10">Own a Piece of <span className="italic opacity-40">History</span></h2>
          <p className="text-zinc-400 mb-12 font-light leading-relaxed">
            Discover our latest collection and start building your architectural legacy today.
          </p>
          <a href="/shop" className="inline-block px-12 py-5 bg-white text-zinc-900 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:scale-105 transition-transform">
            Shop the Collection
          </a>
        </div>
      </section>
    </main>
  );
}
