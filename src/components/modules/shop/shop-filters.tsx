'use client';

import { SlidersHorizontal } from 'lucide-react';
import styles from '@/app/shop/shop.module.css';

interface ShopFiltersProps {
  sortOrder: string;
}

export default function ShopFilters({ sortOrder }: ShopFiltersProps) {
  const handleSortChange = (value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('sort', value);
    window.location.href = url.toString();
  };

  return (
    <div className={styles.sortWrapper}>
      <SlidersHorizontal size={18} strokeWidth={1.5} />
      <select 
        className={styles.sortSelect} 
        defaultValue={sortOrder}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="price_low">Price: Low to High</option>
        <option value="price_high">Price: High to Low</option>
      </select>
    </div>
  );
}
