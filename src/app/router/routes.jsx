import React from 'react';

import { useRoutes } from 'react-router-dom';
import { AuthRoutes } from '@/features/auth/routes';
import { CategoryRoutes } from '@/features/category/routes';
import { ProductRoutes } from '@/features/product/routes';
import { CartRoutes } from '@/features/cart/routes';

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
        ...CategoryRoutes,
        ...ProductRoutes,
        ...CartRoutes,
        { path: '/', element: <HomePage /> },
        { path: '*', element: <NotFound /> },
    ]);
