import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import '@/app/styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
);
