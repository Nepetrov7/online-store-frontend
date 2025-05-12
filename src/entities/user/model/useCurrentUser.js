import { useAuthStore } from '@/app/store/authStore';

export const useCurrentUser = () => {
    const token = useAuthStore((state) => state.token);
    return {
        isAuthenticated: !!token,
        user: token ? { name: 'Demo User', email: 'demo@example.com' } : null,
    };
};
