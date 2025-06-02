import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/app/router/routes';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { Container } from '@/shared/components/Container';
import { Loader } from '@/shared/ui/Loader';

export const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <React.Suspense fallback={<Loader />}>
                    <AppRoutes />
                </React.Suspense>
                <Footer />
            </Container>
        </BrowserRouter>
    );
};
