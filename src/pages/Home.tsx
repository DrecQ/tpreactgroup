import React from "react";
import Header from "../components/Header/Header";
import { NavbarItem } from "../components/Header/Navbar/Navbar";
import Articles from "../components/Articles/Articles";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";

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





function Home()
{
   return (
    <div>
        <Header navElements={navElements} />
        <div className="section-container">
            <Articles />
            <Pagination />
        </div>
        <Footer />
    </div>
   );
}

export default Home;