import React from 'react'
import Footer from '../../components/Footer'
import BlogsSection from './BlogsSection';
import MoreViewedArticle from './MoreViewedArticle';
import useSolidNavbar from '../../hooks/useSolidNavbar';

const Blog = () => {

   useSolidNavbar(true);

    return (
        <>
            <MoreViewedArticle />
            <BlogsSection />
            <Footer />
        </>
    )
}

export default Blog
