import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/app/router/routes';
import { Header } from '@/widgets/Header';
import { Container } from '@/shared/components/Container/Container';
import { Loader } from '@/shared/ui/Loader/Loader';

export const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <React.Suspense fallback={<Loader />}>
                    <AppRoutes />
                </React.Suspense>
            </Container>
        </BrowserRouter>
    );
};
