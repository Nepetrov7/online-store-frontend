import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';

import styles from './Product.module.css';
import { fetchProduct } from '@/entities/product/service/productApi';
import { useCartStore } from '@/entities/cart/model/useCartStore';

export const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCartStore();

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchProduct(id);
                setProduct(data);
            } catch (e) {
                console.error('Ошибка загрузки товара:', e);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!product.length) {
        return <p className={styles.error}>Товар не найден</p>;
    }

    return (
        <div className={styles.grid}>
            {product.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div>
                        {/* <img src={item.image} alt={item.name} className={styles.image} /> */}
                        <h2 className={styles.name}>{item.name}</h2>
                        <p className={styles.description}>{item.description}</p>
                    </div>

                    <div>
                        <p className={styles.price}>{item.price} $</p>
                        <Button className={styles.button} onClick={() => addToCart(item)}>
                            Добавить в корзину
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
