import { apiClient } from '@/shared/lib/apiClient';
import { useAuthStore } from '@/app/store/authStore';

export const login = async ({ username, password }) => {
    const response = await apiClient.post('/auth/login', { username, password });

    // Сохраняем токен в хранилище
    useAuthStore.getState().setToken(response.data.access_token);

    return response.data;
};

export const register = async ({ firstName, lastName, username, password }) => {
    const response = await apiClient.post('/auth/register', {
        first_name: firstName,
        last_name: lastName,
        username,
        password,
        role: 'user',
    });

    // Сохраняем токен в хранилище
    useAuthStore.getState().setToken(response.data.access_token);

    return response.data;
};
