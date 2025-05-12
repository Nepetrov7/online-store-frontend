import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import { Container } from '@/shared/components/Container';

export const NotFound = () => (
    <div className={styles.container}>
        <h2>404 - Страница не найдена</h2>
        <p>Такой страницы не существует.</p>
        <Link style={{ color: 'var(--color-dark)', textDecoration: 'underline' }} to="/">
            Вернуться на главную
        </Link>
    </div>
);
