import { apiClient } from '@/shared/lib/apiClient';

export const fetchCategory = async () => {
    const res = await apiClient.get('/products/categories');
    return res.data;
};
