import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const ProductCarousel = () => {

    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {
        const fetchNewestProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/newest-products');
                setNewestProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching newest products:', error);
            }
        }
        fetchNewestProducts();
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
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
        <div className='container pb-10'>
            <h1 className='text-center text-mgreen pt-5 text-xl font-bold'>جدیدترین محصولات</h1>
            <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                    {
                        newestProducts.map((d) => (
                            <div key={d._id} className='flex mb-5 justify-center bg-white
                                items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
                                <div className='flex border-b-2 justify-center'>
                                    <img className='w-1/2' src={'http://localhost:4000/' + d.imageUrl[0]} alt="" />
                                </div>
                                <div className='px-4 flex justify-end flex-col'>
                                    <p className='py-4 text-end text-2xl'>
                                        {d.title}
                                    </p>
                                    <p className='line-clamp-5 text-end text-sm'>
                                        {d.content}
                                    </p>
                                    <a href={`/products/${d._id}`} 
                                    className='hover:bg-violet-800 cursor-pointer
                                     py-2 w-full text-white rounded-lg
                                      bg-mgreen shadow-xl my-4 text-center'>...جرئیات بیشتر</a>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default ProductCarousel
