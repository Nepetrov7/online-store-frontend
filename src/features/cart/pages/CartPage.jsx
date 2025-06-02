import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { useCartStore } from '@/entities/cart/model/useCartStore';

import styles from './CartPage.module.css';
import { calculateTotal } from '@/entities/cart/helpers/calculateTotal';

export const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();
    const total = calculateTotal(cart);

    return (
        <section className={styles.cart}>
            <h1 className={styles.title}>Корзина</h1>
            {cart.length === 0 ? (
                <p className={styles.empty}>Ваша корзина пуста.</p>
            ) : (
                <>
                    <ul className={styles.list}>
                        {cart.map((item) => (
                            <li key={item.id} className={styles.item}>
                                <div>
                                    <strong>{item.name}</strong>
                                    <div className={styles.quantity}>
                                        <label>Кол-во: </label>
                                        <Input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                        />
                                    </div>
                                </div>
                                <div className={styles.controls}>
                                    <span>{item.price * item.quantity} $</span>
                                    <Button onClick={() => removeFromCart(item.id)}>✕</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.footer}>
                        <p>Итого: {total.toFixed(2)} $</p>
                        <Button onClick={clearCart} className={styles.clear}>
                            Очистить корзину
                        </Button>
                    </div>
                </>
            )}
        </section>
    );
};
