import React from 'react';

const LoginPage = React.lazy(() =>
    import('./pages/LoginPage').then((module) => ({
        default: module.LoginPage,
    }))
);

const RegisterPage = React.lazy(() =>
    import('./pages/RegisterPage').then((module) => ({
        default: module.RegisterPage,
    }))
);

export const AuthRoutes = [
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
];
