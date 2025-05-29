import axios from 'axios';
import { useAuthStore } from '@/app/store/authStore';

const api = axios.create({
    baseURL: 'https://online-store.nepetrov.ru/',
    // baseURL: 'http://localhost:8000/',
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const apiClient = api;
