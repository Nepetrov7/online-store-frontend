import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@/features/auth/services/api';
import { z } from 'zod';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import styles from './Auth.module.css';

const schema = z.object({
    username: z.string().min(3, { message: 'Минимум 3 символа' }),
    password: z.string().min(6, { message: 'Минимум 6 символов' }),
});

export const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        setSubmitError(null);

        const validation = schema.safeParse({ username, password });

        if (!validation.success) {
            const fieldErrors = {};

            validation.error.errors.forEach((err) => {
                fieldErrors[err.path[0]] = err.message;
            });

            setErrors(fieldErrors);

            return;
        }

        setErrors({});
        setLoading(true);

        try {
            await login({ username, password });
            navigate('/category');
        } catch (err) {
            setSubmitError(`Ошибка при входе: ${err.response?.data?.detail}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.auth}>
            <div className={styles.card}>
                <h1 className={styles.title}>Добро пожаловать 👋</h1>
                <p className={styles.subtitle}>Войдите в свой аккаунт, чтобы продолжить</p>
                <form className={styles.form} onSubmit={handleLogin}>
                    <Input
                        placeholder="Логин"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Input
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {(errors.password || errors.username) && (
                        <label className={styles.error}>Неверные username/пароль</label>
                    )}

                    {submitError && <label className={styles.error}>{submitError}</label>}

                    <Button type="submit" disabled={loading}>
                        {loading ? 'Входим...⏳' : 'Войти'}
                    </Button>
                </form>
                <p className={styles.hint}>
                    Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
                </p>
            </div>
        </section>
    );
};
