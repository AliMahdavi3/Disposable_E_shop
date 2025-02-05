import React from 'react'
import Footer from '../../components/Footer';
import Delivery from './Delivery';
import Articles from './Articles';
import AboutUs from './AboutUs';
import Promote from './Promote';
import Category from './Category';
import SearchBox from './SearchBox';
import MainSlider from './MainSlider';
import MoreSell from './carousels/MoreSell';
import Disposable from './carousels/Disposable';
import BirthDay from './carousels/BirthDay';


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
            <MoreSell />

            {/* Promote */}
            <Promote index={0} />

            {/* BestSelling-Carousel */}
            <Disposable />

            {/* BestSelling-Carousel */}
            <BirthDay />

            {/* Promote */}
            <Promote index={1}/>

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
