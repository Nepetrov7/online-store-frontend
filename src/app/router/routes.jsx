import React from 'react';

import { Navigate, useRoutes } from 'react-router-dom';
import { AuthRoutes } from '@/features/auth/routes';
import { DashboardRoutes } from '@/features/dashboard/routes';

const NotFound = React.lazy(() =>
    import('@/pages/NotFound').then((module) => ({
        default: module.NotFound,
    }))
);

const HomePage = React.lazy(() =>
    import('@/pages/HomePage').then((module) => ({
        default: module.HomePage,
    }))
);

export const AppRoutes = () =>
    useRoutes([
        ...AuthRoutes,
        ...DashboardRoutes,
        { path: '/', element: <HomePage /> },
        // { path: '/', element: <Navigate to="/dashboard" replace /> },
        { path: '*', element: <NotFound /> },
    ]);
