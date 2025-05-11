import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from './router/routes';
import { useAuthStore } from './store/authStore';
import { Button } from '@/shared/ui/Button';

export const App = () => {
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);

    return (
        <BrowserRouter>
            <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
                {!token && (
                    <>
                        <Link to="/login" style={{ marginRight: 10 }}>
                            Login
                        </Link>
                        <Link to="/register" style={{ marginRight: 10 }}>
                            Register
                        </Link>
                    </>
                )}
                {token && (
                    <>
                        <Link to="/dashboard" style={{ marginRight: 10 }}>
                            Dashboard
                        </Link>
                        <Button onClick={logout}>Logout</Button>
                    </>
                )}
            </nav>
            <React.Suspense fallback={<div>Loading...</div>}>
                <AppRoutes />
            </React.Suspense>
        </BrowserRouter>
    );
};
