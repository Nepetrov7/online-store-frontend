import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model/useCartStore';
import { useAuthStore } from '@/app/store/authStore';
import { useCurrentUser } from '@/entities/user';
import { Button } from '@/shared/ui/Button';
import styles from './Header.module.css';
import { formatName } from '../../entities/user/helpers/formatName';
import { logout } from '@/features/auth/services/api';

export const Header = () => {
    const { cart } = useCartStore();
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();
    const { user } = useCurrentUser();

    const logoutHandler = () => {
        logout();
        navigate('/dashboard');
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="/">
                    {/* <img src="/src/shared/assets/logo.png" alt="logo" /> */}
                    <h1 className={styles.title}>Shoply</h1>
                </Link>
            </div>

            <nav className={styles.nav}>
                <div>
                    {token && (
                        <Link className={styles.link} to="/">
                            <Button>Главная</Button>
                        </Link>
                    )}
                    <Link to="/catalog">
                        <Button>Каталог</Button>
                    </Link>

                    {!token ? (
                        <>
                            <Link to="/login">
                                <Button>Вход/Регистрация</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li> */}
                            <Link to="/cart">
                                <Button>Козина ({cart.length})</Button>
                            </Link>

                            <span>👤 {formatName(user) || 'User'}</span>
                            <Button onClick={logoutHandler}>Выход</Button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};
