import styles from './HomePage.module.css';
import { Link } from 'react-router';

export const HomePage = () => (
    <section className={styles.home}>
        <div className={styles.container}>
            <h1>
                Добро пожаловать в <span style={{ color: 'var(--color-accent)' }}>Shoply</span> — магазин, где есть всё!
            </h1>

            <p>
                Ищете что-то конкретное или просто вдохновляетесь? Мы собрали{' '}
                <strong>всё, что только можно представить</strong> — от техники до одежды, от товаров для дома до
                подарков, от самых нужных до самых неожиданных вещей.
            </p>

            <ul style={{ margin: '1.5rem 0' }}>
                <li>📦 Тысячи товаров в наличии</li>
                <li>⚡ Быстрая доставка по всей стране</li>
                <li>💬 Поддержка 24/7</li>
                <li>💳 Удобная оплата</li>
            </ul>

            <p>Загляните в каталог — возможно, вы найдёте даже больше, чем искали.</p>

            <Link to="/catalog" className={styles.btn} style={{ marginTop: '2rem', display: 'inline-block' }}>
                Перейти в каталог
            </Link>
        </div>
    </section>
);
