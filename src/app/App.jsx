import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/app/router/routes';
import { Header } from '@/widgets/Header';
import { Container } from '@/shared/components/Container/Container';

export const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AppRoutes />
                </React.Suspense>
            </Container>
        </BrowserRouter>
    );
};
