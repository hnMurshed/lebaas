import React from 'react';
import useReviews from '../../hooks/useReviews';
import ProductReview from '../ProductReview/ProductReview';

const ProductReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='grid lg:grid-cols-3 gap-7'>
            {
                reviews.map(review => <ProductReview
                    key={review.id}
                    reviews={review}
                ></ProductReview>)
            }
        </div>
    );
};

export default ProductReviews;