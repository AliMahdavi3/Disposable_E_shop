import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SimilarProducts = ({ products }) => {

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
        <div className="container">
            <div className='container bg-mgreen mb-10 px-5 rounded-3xl py-10 mt-10'>
                <h1 className='text-center text-white text-xl font-medium'>محصولات مشابه</h1>
                <div className="slider-container px-5 mt-6">
                    <Slider {...settings}>
                        {Array.isArray(products) ? products.map((product) => (
                            <div key={product._id} className='flex justify-center bg-white bg-opacity-50 items-center rounded-3xl'>
                                <div className='flex border-b-2 justify-center'>
                                    <img className='w-1/2' src={"http://localhost:4000/" + product.imageUrl[0]} alt={product.title} />
                                </div>
                                <div className='px-4 flex justify-end flex-col text-black'>
                                    <h5 className='py-4 text-end text-xl'>{product.title}</h5>
                                    <p className='font-medium line-clamp-5 text-end text-xs'>{product.content}</p>
                                    <a href={`/products/${product._id}`}>
                                        <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>خرید</button>
                                    </a>
                                </div>
                            </div>
                        )) : null}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SimilarProducts
