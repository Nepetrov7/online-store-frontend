import { apiClient } from '@/shared/lib/apiClient';

export const fetchProducts = async () => {
    const res = await apiClient.get('/products');
    return res.data;
};
