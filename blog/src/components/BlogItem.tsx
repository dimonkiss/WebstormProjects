// src/components/BlogItem.tsx
import React from 'react';
import Article from '../interfaces'; // Змінили

interface BlogItemProps {
    article: Article;
}

const BlogItem: React.FC<BlogItemProps> = ({ article }) => {
    return (
        <li>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
            <p>Category: {article.category}</p>
            <p>Created at: {article.createdAt}</p>
        </li>
    );
};

export default BlogItem;
