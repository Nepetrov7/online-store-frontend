import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { fetchCategory } from '@/entities/category/services/categoryApi';

import styles from './Category.module.css';

export const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategory();
                setCategories(data);
            } catch (err) {
                console.error('Ошибка загрузки товаров:', err);
            } finally {
                setLoading(false);
            }
        };

        loadCategories();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className={styles.category}>
            <h1 className={styles.title}>Категории товаров</h1>
            <div className={styles.grid}>
                {categories.map((item) => (
                    <div key={item.id} className={styles.card}>
                        {/* <img src={item.image} alt={item.name} className={styles.image} /> */}
                        <h2 className={styles.name}>{item.name}</h2>
                        {/* <p className={styles.price}>{item.price}</p> */}
                        <Button className={styles.button}>
                            <Link to={`/category/${item.id}`}>Перейти</Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};
