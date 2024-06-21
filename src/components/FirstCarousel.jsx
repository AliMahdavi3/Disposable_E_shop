import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FirstCarousel = () => {

    const [topSellingProducts, setTopSellingProducts] = useState([]);

    useEffect(() => {
        const fetchedTopSellingProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/top-selling-products');
                setTopSellingProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching top-selling products:', error);
            }
        }
        fetchedTopSellingProducts();
    }, [])

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
        <div className='container'>
            <h1 className='text-center pt-5 text-xl text-gray-500'>پرفروش ترین محصولات</h1>
            <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                    {
                        topSellingProducts.map((t) => (
                            <div key={t._id} className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                                <a href="/" className='flex border-b-2 justify-center'>
                                    <img className='w-1/2' src={'http://localhost:4000/' + t.imageUrl[0]} alt="" />
                                </a>
                                <div className='px-4 flex justify-end flex-col'>
                                    <a href="/" >
                                        <p className='py-4 text-end text-xl'>
                                            {t.title}
                                        </p>
                                    </a>
                                    <a href="/">
                                        <p className='line-clamp-5 text-end text-sm'>
                                            {t.content}
                                        </p>
                                    </a>
                                    <a  href={`/products/${t._id}`} 
                                    className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white 
                                    rounded-lg bg-mgreen text-center shadow-xl my-4'>...جزئیات بیشتر</a>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default FirstCarousel
