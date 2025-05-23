import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => (
    <section className={styles.page}>
        <div className={styles.box}>
            <h1>😕 404</h1>
            <h2>Страница не найдена</h2>
            <p>Такой страницы не существует или она была перемещена.</p>
            <Link to="/" className={styles.link}>
                ← Вернуться на главную
            </Link>
        </div>
    </section>
);
