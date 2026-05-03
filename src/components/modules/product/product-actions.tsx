'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store/use-cart-store';
import { useToastStore } from '@/lib/store/use-toast-store';
import { Plus, Minus, ShoppingBag } from 'lucide-react';

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    slug: string;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const { showToast } = useToastStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
      quantity: quantity
    });
    showToast(product.name, product.image);
  };

  return (
    <div className="flex flex-col gap-6 mt-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-2 bg-zinc-50 dark:bg-zinc-900/50">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:text-black dark:hover:text-white transition-colors"
          >
            <Minus size={18} />
          </button>
          <span className="w-12 text-center font-bold text-lg">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 hover:text-black dark:hover:text-white transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <button 
        onClick={handleAddToCart}
        className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10"
      >
        <ShoppingBag size={20} />
        ADD TO BAG
      </button>
    </div>
  );
}
