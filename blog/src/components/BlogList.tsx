// src/components/BlogList.tsx
import React from 'react';
import BlogItem from './BlogItem';
import Article from '../interfaces'; // Змінили

interface BlogListProps {
    articles: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ articles }) => {
    return (
        <div>
            <h2>Blog List</h2>
            <ul>
                {articles.map((article) => (
                    <BlogItem key={article.id} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
