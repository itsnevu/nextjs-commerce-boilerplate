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
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center border-2 border-black rounded-2xl overflow-hidden bg-white p-1 shadow-sm">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-black hover:text-white transition-all text-black"
          >
            <Minus size={18} strokeWidth={2.5} />
          </button>
          <span className="w-16 text-center font-bold text-2xl tabular-nums text-black">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black"
          >
            <Plus size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <button 
        onClick={handleAddToCart}
        className="group relative w-full py-6 bg-black text-white rounded-2xl font-bold text-xs tracking-[0.4em] flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-black/20 active:scale-[0.98] transition-all uppercase"
      >
        <ShoppingBag size={20} strokeWidth={2.5} />
        ADD TO BAG
      </button>
      
      <p className="text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase text-center">
        Secure Transaction & Certified Studio Quality
      </p>
    </div>
  );
}
