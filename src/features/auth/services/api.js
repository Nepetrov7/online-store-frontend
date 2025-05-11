import { apiClient } from '@/shared/lib/apiClient';
import { useAuthStore } from '@/app/store/authStore';

export const login = async ({ email, password }) => {
    // JSONPlaceholder не поддерживает auth, эмулируем POST-запрос
    const response = await apiClient.post('/posts', { email, password });
    useAuthStore.getState().setToken('fake-token-from-jsonplaceholder');
    return response.data;
};

export const register = async ({ email, password }) => {
    // Аналогично, эмулируем POST-запрос
    const response = await apiClient.post('/users', { email, password });
    useAuthStore.getState().setToken('fake-token-from-jsonplaceholder');
    return response.data;
};
