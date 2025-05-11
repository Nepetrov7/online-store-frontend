import axios from 'axios';
import { useAuthStore } from '@/app/store/authStore';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const apiClient = api;
