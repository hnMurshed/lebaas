import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import './Header.css';
import Navmenu from '../Navmenu/Navmenu';

const Header = () => {
    const [open, setOpen] = useState(false);

    const linksData = [
        {id: 1, link: '/', children: 'Home'},
        {id: 2, link: '/reviews', children: 'Reviews'},
        {id: 3, link: '/dashboard', children: 'Dashboard'},
        {id: 4, link: '/blogs', children: 'Blogs'},
        {id: 5, link: '/about', children: 'About'}
    ]

    return (
        <div className='bg-[#0080ff] text-white py-4 sticky top-0'>
            <div className="container flex justify-between items-center">
                
                <div className="">
                    <span className='text-3xl font-bold cursor-pointer'>
                        <Link to='/'>LEBAAS</Link>
                    </span>
                </div>

                <ul className={`md:flex gap-7 bg-[#0080ff] text-left duration-500 absolute md:static p-5 ${open ? 'top-16 left-0' : 'top-16 left-[-118px]'}`}>
                    {
                        linksData.map(linkData => <Navmenu
                            key={linkData.id}
                            linkData={linkData}
                        ></Navmenu>)
                    }
                </ul>
                <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
            </div>
        </div>
    );
};

export default Header;