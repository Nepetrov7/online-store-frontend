import { useState } from 'react';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '@/features/auth/services/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import styles from './Auth.module.css';

const schema = z
    .object({
        firstName: z.string().min(2, { message: 'Минимум 2 символа' }),
        lastName: z.string().min(2, { message: 'Минимум 2 символа' }),
        username: z.string().min(3, { message: 'Минимум 3 символа' }),
        password: z.string().min(6, { message: 'Минимум 6 символов' }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Пароли не совпадают',
    });

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        setSubmitMessage(null);

        const validation = schema.safeParse({ firstName, lastName, username, password, confirmPassword });

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
            await register({ firstName, lastName, username, password });
            navigate('/category');
        } catch (err) {
            setSubmitMessage(`Ошибка при регистрации: ${err.response?.data?.detail}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.auth}>
            <div className={styles.card}>
                <h1 className={styles.title}>Регистрация 📝</h1>
                <p className={styles.subtitle}>Создайте аккаунт, чтобы начать покупки</p>
                <form className={styles.form} onSubmit={handleRegister}>
                    <Input
                        placeholder="Имя"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    {errors.firstName && <label className={styles.error}>{errors.firstName}</label>}

                    <Input
                        placeholder="Фамилия"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    {errors.lastName && <label className={styles.error}>{errors.lastName}</label>}

                    <Input
                        placeholder="Логин"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {errors.username && <label className={styles.error}>{errors.username}</label>}

                    <Input
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <label className={styles.error}>{errors.password}</label>}

                    <Input
                        placeholder="Подтвердите пароль"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errors.confirmPassword && <label className={styles.error}>{errors.confirmPassword}</label>}

                    {submitMessage && <label className={styles.error}>{submitMessage}</label>}

                    <Button type="submit" disabled={loading}>
                        {loading ? 'Регистрация...⏳' : 'Зарегистрироваться'}
                    </Button>
                </form>

                <p className={styles.hint}>
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </div>
        </section>
    );
};
