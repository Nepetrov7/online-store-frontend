import { useAuthStore } from '@/app/store/authStore';
import { fetchUserProfile } from '../services/userApi';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
    const token = useAuthStore((state) => state.token);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        const loadUser = async () => {
            try {
                const data = await fetchUserProfile();
                setUser(data);
            } catch (err) {
                console.error('Ошибка загрузки профиля', err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [token]);

    return {
        isAuthenticated: !!token,
        user,
        loading,
    };
};
