import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model/useCartStore';
import { useAuthStore } from '@/app/store/authStore';
import { useCurrentUser } from '@/entities/user';
import { Button } from '@/shared/ui/Button';
import styles from './Header.module.css';

export const Header = () => {
    const { cart } = useCartStore();
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const { user } = useCurrentUser();

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="/">
                    {/* <img src="/src/shared/assets/logo.png" alt="logo" /> */}
                    <h1 className={styles.title}>Shoply</h1>
                </Link>
            </div>

            <nav className={styles.nav}>
                <ul>
                    {token && (
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                    )}
                    <li>
                        <Link to="/catalog">Каталог</Link>
                    </li>

                    {!token ? (
                        <>
                            <li>
                                <Link to="/login">Войти</Link>
                            </li>
                            <li>
                                <Link to="/register">Зарегистрироваться</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            {/* <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li> */}
                            <li>
                                <Link to="/cart">Козина ({cart.length})</Link>
                            </li>

                            <span>👤 {user?.name || 'User'}</span>
                            <Button onClick={logout}>Выход</Button>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
