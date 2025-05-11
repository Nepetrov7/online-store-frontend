import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { z } from 'zod';

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
            setSubmitError('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                {submitError && <div style={{ color: 'red' }}>{submitError}</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};
