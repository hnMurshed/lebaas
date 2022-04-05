import React from 'react';
import useReviews from '../../hooks/useReviews';
import ProductReview from '../ProductReview/ProductReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='container p-8'>
            <h2 className='text-4xl text-center font-bold'>What our customers say!</h2>
            <div className='grid lg:grid-cols-3 gap-7 my-8'>
                {
                    reviews.map(review => <ProductReview
                        key={review.id}
                        reviews={review}
                    ></ProductReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;