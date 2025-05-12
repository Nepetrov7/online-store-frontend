import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model/useCartStore';
import { useAuthStore } from '@/app/store/authStore';
import { useCurrentUser } from '@/entities/user';
import styles from './Header.module.css';

export const Header = () => {
    const { cart } = useCartStore();
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const { user } = useCurrentUser();

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="/" className={styles.title}>
                    {/* <img src="/src/shared/assets/logo.png" alt="logo" /> */}
                    <h1 className={styles.title}>Shoply</h1>
                </Link>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link className={styles.link} to="/catalog">
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart ({cart.length})</Link>
                    </li>
                    {!token ? (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/dashboard" style={{ marginRight: 10 }}>
                                    Dashboard
                                </Link>
                            </li>
                            <span style={{ fontSize: 14, color: '#555' }}>👤 {user?.name || 'User'}</span>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
