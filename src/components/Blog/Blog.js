import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { image, topic, content, publishDate, path } = blog;
    return (
        <Link to={path}>
            <div className='border rounded-lg p-5 min-h-[200px]'>
                <h3 className='text-2xl'>{topic}</h3>
                <span>Published on {publishDate}</span>
                <p className='mt-4'>{content.slice(0, 50)}...</p>
            </div>
        </Link>
    );
};

export default Blog;