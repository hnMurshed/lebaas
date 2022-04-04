import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ProductReview.css';

const ProductReview = ({reviews}) => {
    const {name, profile, country, date, rating, comment, review} = reviews;
    return (
        <div className='bg-yellow-100 p-5 rounded-lg'>
            <div className="flex justify-between">
                <span><strong>{comment}</strong></span>
                <div className='flex items-center gap-1'>
                    <span className='text-[18px]'>{rating}</span>
                    <StarIcon className='w-6 h-6'></StarIcon>
                </div>
            </div>
            <span>Review published on {date}</span>
            <p className='my-5'>{review}</p>
            <div className="flex gap-2">
                <img className='w-[60px] rounded-full' src={profile} alt="" />
                <div>
                    <h5 className='text-xl text-semibold'>{name}</h5>
                    <span>{country}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;