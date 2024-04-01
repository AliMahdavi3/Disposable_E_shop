import React from 'react'
import TwoCarousel from '../../components/TwoCarousel';
import CenterModeCarousel from '../../components/CenterModeCarousel';
import FirstCarousel from '../../components/FirstCarousel';
import Footer from '../../components/Footer';
import Delivery from './Delivery';
import Articles from './Articles';
import AboutUs from './AboutUs';
import Promote from './Promote';
import Category from './Category';
import SearchBox from './SearchBox';
import MainSlider from './MainSlider';

const Home = () => {

    return (
        <div>
            {/* Slider */}
            <MainSlider />

            {/* Search-Box */}
            <SearchBox />

            {/* Category */}
            <Category />

            {/* BestSelling-Carousel */}
            <FirstCarousel />

            {/* Promote */}
            <Promote />

            {/* BestSelling-Carousel */}
            <TwoCarousel />

            {/* BestSelling-Carousel */}
            <CenterModeCarousel />

            {/* Promote */}
            <Promote />

            {/* About-Us */}
            <AboutUs />

            {/* Articles */}
            <Articles />

            {/* Delivery */}
            <Delivery />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
