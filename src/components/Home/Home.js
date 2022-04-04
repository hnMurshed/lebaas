import React from 'react';
import Product from '../Product/Product';
import ProductReviews from '../ProductReviews/ProductReviews';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <Product></Product>
            <ProductReviews></ProductReviews>
        </div>
    );
};

export default Home;