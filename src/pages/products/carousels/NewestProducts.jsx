import React, { useEffect, useState } from 'react'
import { getNewestProductsService } from '../../../services/product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../../../components/cardComponents/CarouselCard';


const NewestProducts = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNewestProducts = async () => {
            try {
                const res = await getNewestProductsService();
                if (res.status === 200) {
                    setData(res.data.products);
                }
            } catch (error) {
                console.error('Error fetching newest products:', error);
            }
        }
        fetchNewestProducts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={`container text-gray-500 px-5 rounded-3xl pt-5 pb-10 mt-5`}>
            <h1 className={`text-center text-gray-500 font-medium text-xl`}>جدیدترین محصولات</h1>
            <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                    {
                        data?.map((product) => (
                            <CarouselCard product={product} key={product._id} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default NewestProducts
