import styles from './HomePage.module.css';
import { Link } from 'react-router';

export const HomePage = () => (
    <section className={styles.home}>
        <div className={styles.container}>
            <h1 className={styles.title}>
                Добро пожаловать в <span>Shoply</span> — магазин, где есть всё!
            </h1>
            <p className={styles.description}>
                Ищете что-то конкретное или просто вдохновляетесь? Мы собрали
                <strong> всё, что только можно представить </strong>— от техники до одежды, от товаров для дома до
                подарков, от самых нужных до самых неожиданных вещей.
            </p>
            <ul className={styles.bullets}>
                <li>📦 Тысячи товаров в наличии</li>
                <li>⚡ Быстрая доставка по всей стране</li>
                <li>💬 Поддержка 24/7</li>
                <li>💳 Удобная оплата</li>
            </ul>
            <p className={styles.note}>Загляните в категории — возможно, вы найдёте даже больше, чем искали.</p>
            <Link to="/category" className={styles.button}>
                Перейти в категории
            </Link>
        </div>
    </section>
);
