import { apiClient } from '@/shared/lib/apiClient';

export const fetchUserProfile = async () => {
    const response = await apiClient.get('/auth/current_user');
    return response.data;
};
