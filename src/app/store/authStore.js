import { create } from 'zustand';

const getInitialToken = () => {
    return localStorage.getItem('token') || null;
};

export const useAuthStore = create((set) => ({
    token: getInitialToken(),
    setToken: (token) => {
        localStorage.setItem('token', token);
        set({ token });
    },
    logout: () => {
        localStorage.removeItem('token');
        set({ token: null });
    },
}));
