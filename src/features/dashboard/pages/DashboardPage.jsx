import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/app/store/authStore';
import { apiClient } from '@/shared/lib/apiClient';

export const DashboardPage = () => {
    const token = useAuthStore((state) => state.token);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (token) {
            apiClient
                .get('/posts?_limit=5')
                .then((res) => setPosts(res.data))
                .catch((err) => console.error(err));
        }
    }, [token]);

    if (!token) {
        return <div style={{ padding: 20 }}>Нет доступа. Пожалуйста, авторизуйтесь.</div>;
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Dashboard</h2>
            <p>Добро пожаловать! Токен: {token}</p>
            <h3>Посты с JSONPlaceholder:</h3>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <a href={`/dashboard/posts/${post.id}`}>
                                <strong>{post.title}</strong>
                            </a>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка постов...</p>
            )}
        </div>
    );
};
