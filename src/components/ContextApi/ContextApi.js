import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    return (
        <div className='container p-8'>
            <h2 className='text-4xl font-semibold text-center'>Context API</h2>
            <h3 className='text-2xl my-4'>What is Context API </h3>
            <p>Context api is one of the most powerful things in react. It helps to pass data to a specific label of any component tree avoiding passing data to every label of the tree. </p>
            <h3 className='text-2xl my-4'>Purpose of using Context API</h3>
            <p>In typical react, data can only be passed up to down (parent to child). But sometimes we need to pass data to a specific child component, that we can’t do in typical react. The way what makes it easier to do that is Context API. Context API helps to pass data to a specific child component without passing each of the child components.
            </p>
        </div>
    );
};

export default BlogDetails;