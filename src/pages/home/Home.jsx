import React from 'react'
import Footer from '../../components/Footer';
import Delivery from './Delivery';
import Articles from './Articles';
import AboutUs from './AboutUs';
import MainSlider from './MainSlider';
import MoreSell from './carousels/MoreSell';
import Disposable from './carousels/Disposable';
import BirthDay from './carousels/BirthDay';
import Category from './category/Category';
import SearchBox from './search/SearchBox';
import DisposablePosters from './posters/DisposablePosters';
import Promote from './posters/Promote';


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

            {/* Poster */}
            <DisposablePosters index={0} />

            {/* Poster */}
            <Promote />

            {/* BestSelling-Carousel */}
            <Disposable />

            {/* Poster */}
            <DisposablePosters index={1} />

            {/* BestSelling-Carousel */}
            <BirthDay />

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
