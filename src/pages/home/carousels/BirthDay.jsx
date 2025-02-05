import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../../../components/cardComponents/CarouselCard';

const BirthDay = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchBirthDayProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/birth-day-products');
                const data = await response.json();
                setProducts(data.products.slice(0, 7));
            } catch (error) {
                console.error("There was an error fetching the birthday products:", error);
            }
        }
        fetchBirthDayProducts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
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
        <div className='container bg-gradient-to-r from-mgreen to-[#0dafa7]  px-5 rounded-3xl py-10 mt-10'>
            <h1 className='text-center text-white font-medium text-xl '>تم تولدی و جشن</h1>
            <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                    {
                        products.map((product) => (
                            <CarouselCard product={product} key={product._id} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default BirthDay
