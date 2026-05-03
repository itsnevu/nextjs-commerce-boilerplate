'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCartStore } from '@/lib/store/use-cart-store';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    slug: string;
    category?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      slug: product.slug,
    });
  };

  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
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
            {product.category}
          </span>
        )}
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 font-medium text-zinc-900 dark:text-white truncate">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900 dark:text-white">
            ${product.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="p-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:opacity-90 transition-opacity"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
