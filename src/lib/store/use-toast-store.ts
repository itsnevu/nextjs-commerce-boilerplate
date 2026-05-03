import { create } from 'zustand';

interface ToastState {
  isVisible: boolean;
  message: string;
  image?: string;
  showToast: (message: string, image?: string) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isVisible: false,
  message: '',
  image: '',
  showToast: (message, image) => {
    set({ isVisible: true, message, image });
    setTimeout(() => set({ isVisible: false }), 3000);
  },
  hideToast: () => set({ isVisible: false }),
}));
