import { apiClient } from '@/shared/lib/apiClient';

export const fetchProduct = async (categoryId) => {
    if (!categoryId) {
        const res = await apiClient.get('/products');
        return res.data;
    }

    const res = await apiClient.get(`/products?category_id=${categoryId}`);

    return res.data;
};
