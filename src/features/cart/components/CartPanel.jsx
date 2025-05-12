import React from 'react';
import { useCartStore } from '@/entities/cart/model/useCartStore';
import { calculateTotal } from '@/entities/cart/helpers/calculateTotal';

const CartPanel = () => {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const total = calculateTotal(cart);

    return (
        <div style={{ border: '1px solid #ccc', padding: 10, maxWidth: 300 }}>
            <h3>🛒 Cart</h3>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} style={{ marginBottom: 10 }}>
                                {item.title} — ${item.price}
                                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 10 }}>
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p>
                        <strong>Total:</strong> ${total.toFixed(2)}
                    </p>
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default CartPanel;
