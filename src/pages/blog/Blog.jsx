import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import { useNavbarContext } from '../../context/NavbarContext';
import BlogsSection from './BlogsSection';
import MoreViewedArticle from './MoreViewedArticle';

const Blog = () => {

    const { setIsSolid } = useNavbarContext();

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false);
    }, []);

    return (
        <>
            <MoreViewedArticle />
            <BlogsSection />
            <Footer />
        </>
    )
}

export default Blog
