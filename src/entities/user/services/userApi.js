import { apiClient } from '@/shared/lib/apiClient';

export const fetchUserProfile = async () => {
    const response = await apiClient.get('/users/1'); // JSONPlaceholder user
    return response.data;
};
