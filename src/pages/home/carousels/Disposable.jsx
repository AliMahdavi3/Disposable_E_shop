import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../../../components/cardComponents/CarouselCard';
import { getDisposableProductsService } from '../../../services/home';

const Disposable = () => {

    const [firstDisposableProducts, setFirstDisposableProducts] = useState([]);
    const [secondDisposableProducts, setSecondDisposableProducts] = useState([]);

    useEffect(() => {
        const fetchDisposableProducts = async () => {
            try {
                const res = await getDisposableProductsService();
                const displayLimit = 3;
                if (res.status === 200) {
                    setFirstDisposableProducts(res.data.products.slice(0, displayLimit));
                    setSecondDisposableProducts(res.data.products.slice(displayLimit, displayLimit * 2));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchDisposableProducts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <div className='container bg-opacity-60 rounded-lg px-5 py-6'>
            <div className='flex w-full justify-center items-center my-3'>
                <hr className='w-11/12' />
                <p className='text-gray-500 font-medium md:text-base 
                    text-xs text-center mx-3 w-full'>
                    ظروف یکبار مصرف
                </p>
                <hr className='w-11/12' />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className="col-span-2 md:col-span-1 slider-container px-5 mt-6">
                    <Slider {...settings}>
                        {firstDisposableProducts.map((product) => (
                            <CarouselCard
                                grid={true}
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </Slider>
                </div>
                <div className="col-span-2 md:col-span-1 slider-container px-5 mt-6">
                    <Slider {...settings}>
                        {secondDisposableProducts.map((product) => (
                            <CarouselCard
                                grid={true}
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Disposable
