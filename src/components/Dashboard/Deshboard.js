import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChard/MyLineChart';
import './Dashboard.css';

const Deshboard = () => {
    return (
        <div className='container py-8'>
            <h2 className='text-4xl font-semibold text-center'>Our Dashboard</h2>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2">
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
            </div>
        </div>
    );
};

export default Deshboard;