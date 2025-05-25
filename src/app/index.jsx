import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { Loader } from '@/shared/ui/Loader';
import '@/app/styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
);
