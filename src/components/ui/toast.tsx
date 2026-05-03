'use client';

import { useToastStore } from '@/lib/store/use-toast-store';
import { ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';

export default function Toast() {
  const { isVisible, message, image, hideToast } = useToastStore();

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-2xl shadow-black/10 flex items-center gap-4 min-w-[320px]">
        {image && (
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100 dark:bg-zinc-900">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <ShoppingBag size={14} className="text-zinc-500" />
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Added to Bag</span>
          </div>
          <p className="text-sm font-bold text-zinc-900 dark:text-white line-clamp-1">{message}</p>
        </div>
        <button 
          onClick={hideToast}
          className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors"
        >
          <X size={16} className="text-zinc-400" />
        </button>
      </div>
    </div>
  );
}
