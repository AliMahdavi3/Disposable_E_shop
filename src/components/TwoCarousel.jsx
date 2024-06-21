import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const TwoCarousel = () => {

    const [firstDisposableProducts, setFirstDisposableProducts] = useState([]);
    const [secondDisposableProducts, setSecondDisposableProducts] = useState([]);

    useEffect(() => {
        const fetchDisposableProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/disposable-products');
                const products = response.data.products;

                const displayLimit = 3;
                setFirstDisposableProducts(products.slice(0, displayLimit));
                setSecondDisposableProducts(products.slice(displayLimit, displayLimit * 2));

            } catch (error) {
                console.log('Error Fetching disposable products', error);
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
        speed: 1000,
        autoplaySpeed: 3000,
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

    const renderSlides = (products) => products.map((product) => (
        <div key={product._id} className='flex'>
            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                <div className='col-span-3 md:col-span-1'>
                    <img className='h-full w-full'
                        src={'http://localhost:4000/' + product.imageUrl[0]} alt={product.title} />
                </div>
                <div className='col-span-3 md:col-span-2 px-5'>
                    <p className='py-4 text-end text-xl'>
                        {product.title}
                    </p>
                    <p className='line-clamp-5 text-end text-sm'>
                        {product.content}
                    </p>
                    <div className='flex justify-end'>
                        <a href={`/products/${product._id}`}>
                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                        text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    ));

    return (
        <div className='container bg-opacity-60 rounded-lg px-5 py-6'>
            <div className='flex w-full justify-center items-center my-3'>
                <hr className='w-full' />
                <p className='text-gray-500 font-medium md:text-lg text-xs text-center w-full'>ظروف یکبار مصرف</p>
                <hr className='w-full' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="slider-container px-5 mt-6">
                    <Slider {...settings}>
                        {renderSlides(firstDisposableProducts)}
                    </Slider>
                </div>
                <div className="slider-container px-5 mt-6">
                    <Slider {...settings}>
                        {renderSlides(secondDisposableProducts)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TwoCarousel
