import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navmenu = ({linkData}) => {
    const {link, children} = linkData;
    return (
        <div>
            <li>
                {/* <Link to={link}>{children}</Link> */}
                <CustomLink to={link} children={children}></CustomLink>
            </li>
        </div>
    );
};

export default Navmenu;