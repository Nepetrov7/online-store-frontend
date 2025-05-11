import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiClient } from '@/shared/lib/apiClient';

export const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        apiClient
            .get(`/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!post) return <div style={{ padding: 20 }}>Загрузка...</div>;

    return (
        <div style={{ padding: 20 }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/dashboard">← Назад к списку</Link>
        </div>
    );
};
