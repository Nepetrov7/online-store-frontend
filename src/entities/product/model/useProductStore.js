import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProduct: (items) => set({ products: items }),
}));
