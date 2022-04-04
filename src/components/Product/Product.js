import React from 'react';
import './Product.css';
import img from '../../images/panjabi-2.jpg';

const Product = () => {
    return (
        <div className='flex gap-20 items-center py-16'>
            <div>
                <h1 className='text-5xl font-bold uppercase mb-4'><span className='text-[#0080ff]'>Get your best outfit</span> <br /> for your next event</h1>
                <p className="pr-[100px]">When there is a New Event you need to wrap yourself with new getup that will boost your personality. Get ready for your next event or festival with your best outfit and show your personality.</p>
                <button className='bg-[#0080ff] hover:bg-[#0080ff9f] text-white font-semibold tracking-wider uppercase px-5 py-2 rounded mt-4'>Buy Now</button>
            </div>
            <div className="w-[600px]">
                <img className='w-[100%] rounded-lg' src={img} alt="" />
            </div>
        </div>
    );
};

export default Product;