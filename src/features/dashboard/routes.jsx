import React from 'react';
import { ProtectedRoute } from '@/shared/components/ProtectedRoute';

const DashboardPage = React.lazy(() =>
    import('./pages/DashboardPage').then((module) => ({
        default: module.DashboardPage,
    }))
);
const PostDetail = React.lazy(() =>
    import('./pages/PostDetail').then((module) => ({
        default: module.PostDetail,
    }))
);

export const DashboardRoutes = [
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        ),
    },
    {
        path: '/dashboard/posts/:id',
        element: (
            <ProtectedRoute>
                <PostDetail />
            </ProtectedRoute>
        ),
    },
];
