import React, { useState } from 'react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';

const schema = z
    .object({
        email: z.string().email({ message: 'Некорректный email' }),
        password: z.string().min(6, { message: 'Минимум 6 символов' }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Пароли не совпадают',
    });

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setSubmitMessage(null);
        const validation = schema.safeParse({ email, password, confirmPassword });

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
            await register({ email, password });
            navigate('/dashboard');
        } catch (err) {
            setSubmitMessage('Ошибка при регистрации');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email:</label>
                    <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>
                <div>
                    <label>Password:</label>
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <br />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                </div>
                {submitMessage && <div style={{ color: 'green' }}>{submitMessage}</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};
