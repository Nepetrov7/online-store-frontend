import { create } from 'zustand';

const getInitialCart = () => {
    try {
        const stored = localStorage.getItem('shoply_cart');
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const useCartStore = create((set, get) => ({
    cart: getInitialCart(),
    addToCart: (product) => {
        const items = get().cart;
        const exists = items.find((i) => i.id === product.id);
        let updated;

        if (exists) {
            updated = items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
        } else {
            updated = [...items, { ...product, quantity: 1 }];
        }

        localStorage.setItem('shoply_cart', JSON.stringify(updated));
        set({ cart: updated });
    },
    updateQuantity: (id, quantity) => {
        if (isNaN(quantity) || quantity < 1) {
            return;
        }

        const updated = get().cart.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i));
        localStorage.setItem('shoply_cart', JSON.stringify(updated));
        set({ cart: updated });
    },
    removeFromCart: (id) => {
        const updated = get().cart.filter((i) => i.id !== id);
        localStorage.setItem('shoply_cart', JSON.stringify(updated));
        set({ cart: updated });
    },
    clearCart: () => {
        localStorage.removeItem('shoply_cart');
        set({ cart: [] });
    },
}));
