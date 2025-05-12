import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/app/store/authStore';

export const ProtectedRoute = ({ children }) => {
    const token = useAuthStore((state) => state.token);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
