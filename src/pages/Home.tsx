import React from "react";
import Header from "../components/Header/Header";
import { NavbarItem } from "../components/Header/Navbar/Navbar";
import Articles from "../components/Articles/Articles";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";
import Tags from "../components/Tags/Tags";
import RecentPosts from "../components/RecentPosts/RecentPosts";
import Search from "../components/Search/Search";

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
        <div className="flex w-full">
            <div className="section-container">
                <Articles />
                <Pagination />
            </div>
            <div className="sidebar-main flex flex-col w-1/3 ml-auto bg-white p-2 mx-5">
                <Search />
                <RecentPosts />
                <Tags />
            </div>
        </div>
        
        <Footer />
    </div>
   );
}

export default Home;