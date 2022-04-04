import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ProductReview from '../ProductReview/ProductReview';

const ProductReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='py-8'>
            <h2 className='text-4xl text-center font-bold'>Customer Reviews({reviews.length})</h2>
            <div className='grid lg:grid-cols-3 gap-7 my-8'>
                {
                    reviews.slice(0, 3).map(review => <ProductReview
                        key={review.id}
                        reviews={review}
                    ></ProductReview>)
                }
            </div>
            <div className="text-center">
                <Link to='reviews' className='px-12 py-2 bg-[#0080ff] hover:bg-[#0080ff9f] text-white rounded font-semibold uppercase tracking-wider'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default ProductReviews;