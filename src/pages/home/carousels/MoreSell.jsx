import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../../../components/cardComponents/CarouselCard';
import { getTopSellingProductsService } from '../../../services/home';


const MoreSell = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchedTopSellingProducts = async () => {
            try {
                const res = await getTopSellingProductsService();
                if (res.status === 200) {
                    setData(res.data.products);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchedTopSellingProducts();
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
        <div className={`container bg-gradient-to-r from-[#0DAFA7] to-[#95B1AE] 
            rounded-2xl pt-5 pb-8 md:py-10 mt-5 md:mt-10`}>
            <div className='flex w-full justify-center items-center my-3'>
                <hr className='w-11/12' />
                <p className='text-white font-medium md:text-base 
                    text-xs text-center mx-3 w-full'>
                    ظروف یکبار مصرف
                </p>
                <hr className='w-11/12' />
            </div>
            <div className="slider-container px-5 mt-3 md:mt-6">
                <Slider {...settings}>
                    {
                        data.map((product) => (
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

export default MoreSell
