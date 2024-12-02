import React from 'react';
import './Header.css';
import Navbar, { NavbarItem } from './Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';

const navElements: NavbarItem = {
    navbarLogo: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4@2x-free-img.png',
    navbarLinks: [
        'About Us',
        'Living Room',
        'Kitchen',
        'Outdoors',
        'Contact'
    ]
}

function Header(props: { navElements: NavbarItem }) {
    return (
        <header  className="header flex flex-col h-screen py-10 px-20 ">
            <Navbar navbarLogo={props.navElements.navbarLogo} navbarLinks={props.navElements.navbarLinks} />
            <HeaderContent />
        </header>
    );
}
export default Header;