import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div style={{ padding: 20 }}>
        <h2>404 - Страница не найдена</h2>
        <p>Такой страницы не существует.</p>
        <Link to="/">Вернуться на главную</Link>
    </div>
);
