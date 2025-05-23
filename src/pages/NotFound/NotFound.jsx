import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => (
    <div className={styles.container}>
        <h2>404 - Страница не найдена</h2>
        <p>Такой страницы не существует.</p>
        <Link style={{ color: 'var(--color-dark)', textDecoration: 'underline' }} to="/">
            Вернуться на главную
        </Link>
    </div>
);
