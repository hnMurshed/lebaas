import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-[#0080ff] text-white py-6'>
            <div className="container flex justify-between items-center">
                <Link to='/'><span className='text-3xl font-bold cursor-pointer'>LEBAAS</span></Link>
                <ul className='flex gap-7'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/reviews'>Reviews</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;