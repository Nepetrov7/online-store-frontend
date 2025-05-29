import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
    message: null,
    showMessage: (msg) => {
        set({ message: msg });
        setTimeout(() => set({ message: null }), 2500);
    },
}));
