import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@/features/auth/services/api';
import { z } from 'zod';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import styles from './Auth.module.css';

const schema = z.object({
    email: z.string().email({ message: 'Некорректный email' }),
    password: z.string().min(6, { message: 'Минимум 6 символов' }),
});

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        setSubmitError(null);

        const validation = schema.safeParse({ email, password });

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
            await login({ email, password });
            navigate('/dashboard');
        } catch (err) {
            setSubmitError(`Ошибка при входе: ${err.message}`);
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
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {(errors.password || errors.email) && <label className={styles.error}>Неверные email/пароль</label>}

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
