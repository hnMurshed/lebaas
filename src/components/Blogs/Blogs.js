import React from 'react';
import { Outlet } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useBlogs();
    return (
        <div className='container py-8'>
            <h2 className='text-4xl font-semibold text-center'>Our Blogs</h2>
            <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;