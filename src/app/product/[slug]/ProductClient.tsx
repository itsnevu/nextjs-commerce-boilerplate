'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { Star, Globe, ShieldCheck, Lock, Package, Truck, Zap } from 'lucide-react';
import Link from 'next/link';
import ProductActions from '@/components/modules/product/product-actions';
import ProductCard from '@/components/modules/product/product-card';
import styles from '@/app/page.module.css';
import { siteConfig } from '@/config/site';
import { formatPrice } from '@/lib/utils';

interface ProductGalleryProps {
  image: string;
  name: string;
  category: string;
}

function ProductGallery({ image, name, category }: ProductGalleryProps) {
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', transformOrigin: 'center center' });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - window.scrollY - top) / height) * 100;
    
    setZoomStyle({
      display: 'block',
      transformOrigin: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', transformOrigin: 'center center' });
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square rounded-[32px] overflow-hidden bg-white border border-zinc-100 shadow-xl cursor-zoom-in group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full h-full transition-transform duration-200 ease-out scale-100 group-hover:scale-[2.5]"
        style={{ transformOrigin: zoomStyle.transformOrigin }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Static Badge */}
      <div className="absolute top-6 left-6 pointer-events-none group-hover:opacity-0 transition-opacity">
        <span className="px-5 py-2 bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase rounded-full shadow-2xl">
          {category}
        </span>
      </div>

      {/* Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md text-white text-[9px] font-bold tracking-widest px-4 py-2 rounded-full pointer-events-none uppercase">
        Move to Zoom
      </div>
    </div>
  );
}

export default function ProductPageClient({ product, relatedProducts }: { product: any, relatedProducts: any[] }) {
  const viewers = (product.id.charCodeAt(0) % 10) + 5;
  const stock = (product.id.charCodeAt(0) % 5) + 2;

  return (
    <main className={styles.main}>
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <ProductGallery 
            image={product.images[0] || '/hero-placeholder.png'} 
            name={product.name}
            category={product.category?.name || 'COLLECTION'}
          />
          
          <div className="flex flex-col">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">Ready to Ship</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span className="text-[10px] text-zinc-400 font-bold tracking-widest ml-1">4.9 / 5.0 (2.1K)</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-4 tracking-tighter leading-tight uppercase" style={{ color: '#000000' }}>
              {product.name}
            </h1>

            <div className="text-4xl font-bold text-black mb-10 tracking-tight" style={{ color: '#000000' }}>
              {formatPrice(product.price)}
            </div>

            <p className="text-zinc-600 text-lg leading-relaxed mb-12 max-w-xl font-medium">
              {product.description || "The definitive statement of architectural elegance. Designed for those who appreciate the intersection of form and timeless function."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="flex flex-col gap-1 p-6 rounded-2xl border-2 border-zinc-100 bg-white">
                <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-1">Stock Level</span>
                <p className="text-sm font-black text-black uppercase">
                  {stock} units <span className="font-normal text-zinc-500">remaining</span>
                </p>
              </div>
              <div className="flex flex-col gap-1 p-6 rounded-2xl border-2 border-zinc-100 bg-white">
                <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-1">Interest</span>
                <p className="text-sm font-black text-black uppercase">
                   {viewers} collectors <span className="font-normal text-zinc-500">browsing now</span>
                </p>
              </div>
            </div>

            <ProductActions product={{
              id: product.id,
              name: product.name,
              price: Number(product.price),
              image: product.images[0] || '/hero-placeholder.png',
              slug: product.slug
            }} />

            {/* Enhanced Trust Signals Section - Removed Hover Effect */}
            <div className="mt-16 pt-12 border-t-2 border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-black">
                  <Globe size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-black mb-0.5">Global Delivery</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Express Worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-black">
                  <ShieldCheck size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-black mb-0.5">Studio Certified</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Authenticity Gtd.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-black">
                  <Lock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-black mb-0.5">Safe Payment</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">100% Secured SSL</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-black">
                  <Package size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-black mb-0.5">White Glove</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Premium Handling</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Selection Section */}
        <section className="mt-40 pt-20 border-t-4 border-black">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase text-black">Studio Selection</h2>
            <Link href="/shop" className="group flex items-center gap-2 text-xs font-black tracking-widest uppercase border-b-4 border-black pb-1 text-black">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={{
                id: p.id,
                name: p.name,
                price: p.price,
                image: p.images[0],
                slug: p.slug,
                category: p.category.name
              }} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
