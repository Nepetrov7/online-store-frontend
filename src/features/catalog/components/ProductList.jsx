import React, { useEffect } from 'react';
import { useProductStore } from '@/entities/product/model/useProductStore';
import { fetchProducts } from '@/entities/product/services/productApi';
import { useCartStore } from '@/entities/cart/model/useCartStore';

const ProductList = () => {
    const { products, setProducts } = useProductStore();
    const { addToCart } = useCartStore();

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, [setProducts]);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {products.map((product) => (
                <div key={product.id} style={{ border: '1px solid #ccc', padding: 10 }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: 150, objectFit: 'cover' }}
                    />
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
