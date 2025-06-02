import React from 'react';

const CartPage = React.lazy(() =>
    import('./pages/CartPage').then((module) => ({
        default: module.CartPage,
    }))
);

export const CartRoutes = [{ path: '/cart', element: <CartPage /> }];
