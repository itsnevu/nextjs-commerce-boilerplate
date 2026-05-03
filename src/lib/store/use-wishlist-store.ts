import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  category?: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const exists = get().items.find((i) => i.id === item.id);
        if (!exists) set({ items: [...get().items, item] });
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      toggleItem: (item) => {
        const exists = get().items.find((i) => i.id === item.id);
        if (exists) {
          get().removeItem(item.id);
        } else {
          get().addItem(item);
        }
      },
      isInWishlist: (id) => !!get().items.find((i) => i.id === id),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
