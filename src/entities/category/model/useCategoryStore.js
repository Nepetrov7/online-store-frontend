import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
    categories: [],
    setCategory: (items) => set({ categories: items }),
}));
