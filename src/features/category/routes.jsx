import React from 'react';

const CategoryPage = React.lazy(() =>
    import('./pages/CategoryPage').then((module) => ({
        default: module.CategoryPage,
    }))
);

export const CategoryRoutes = [{ path: '/category', element: <CategoryPage /> }];
