import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../../../components/cardComponents/CarouselCard';
import { getBirthDayProductsService } from '../../../services/home';


const BirthDay = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchBirthDayProducts = async () => {
            try {
                const res = await getBirthDayProductsService();
                if (res.status === 200) {
                    setProducts(res.data.products.slice(0, 7));
                }
            } catch (error) {
                console.error(error.message);
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
        <div className='container bg-gradient-to-r from-[#0dafa7] to-[#7b9ce1] 
            rounded-2xl pt-5 pb-8 md:py-10 mt-5 md:mt-10'>
            <div className='flex w-full justify-center items-center'>
                <hr className='w-11/12' />
                <p className='text-white font-medium md:text-base 
                    text-xs text-center mx-3 w-full'>
                    تم تولدی و جشن
                </p>
                <hr className='w-11/12' />
            </div>
            <div className="slider-container px-5 mt-3 md:mt-6">
                <Slider {...settings}>
                    {
                        products.map((product) => (
                            <CarouselCard
                                product={product}
                                key={product._id}
                            />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default BirthDay
