'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { useCartStore } from '@/lib/store/use-cart-store';
import { useToastStore } from '@/lib/store/use-toast-store';
import { useWishlistStore } from '@/lib/store/use-wishlist-store';
import { useState, useEffect } from 'react';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    slug: string;
    category?: string | { name: string };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const { showToast } = useToastStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
      quantity: 1
    });
    showToast(product.name, product.image);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
      category: typeof product.category === 'object' ? product.category.name : product.category
    });
  };

  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-main overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Wishlist Button */}
          <button 
            onClick={handleToggleWishlist}
            className={`absolute top-4 right-4 z-10 p-2 rounded-full glass transition-all ${mounted && isInWishlist(product.id) ? 'text-red-500 scale-110' : 'text-zinc-500 hover:text-red-500'}`}
            title="Add to Wishlist"
          >
            <Heart size={18} fill={mounted && isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={1.5} />
          </button>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <div className="p-2 bg-white dark:bg-zinc-900 rounded-full text-zinc-900 dark:text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <Eye size={20} />
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        {product.category && (
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
            {typeof product.category === 'object' ? product.category.name : product.category}
          </span>
        )}
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 font-medium text-zinc-900 dark:text-white truncate">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900 dark:text-white">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all"
            title="Add to Bag"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
