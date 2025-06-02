import React from 'react';

const ProductPage = React.lazy(() =>
    import('./pages/ProductPage').then((module) => ({
        default: module.ProductPage,
    }))
);

export const ProductRoutes = [{ path: '/product/:id', element: <ProductPage /> }];
