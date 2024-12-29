import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselComponent = ({ data, title, titleColor, background }) => {

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
        <div className={`container ${background} px-5 rounded-3xl py-10 mt-10`}>
            <h1 className={`text-center ${titleColor} font-medium text-xl`}>{title}</h1>
            <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                    {
                        data.map((d) => (
                            <div key={d._id} className='flex mb-5 justify-center bg-opacity-50
                            items-center rounded-lg shadow-mgreen shadow-md'>
                                <div className='flex border-b-2 justify-center'>
                                    <img className='w-1/2' src={'http://localhost:4000/' + d.imageUrl[0]} alt="" />
                                </div>
                                <div className='px-4 flex justify-end flex-col text-mblack'>
                                    <p className='py-4 text-end text-xl'>
                                        {d.title}
                                    </p>
                                    <p className='line-clamp-5 text-end text-sm'>
                                        {d.content}
                                    </p>
                                    <a href={`/products/${d._id}`} className='hover:bg-violet-00 cursor-pointer py-2 w-full text-white 
                                    text-center rounded-lg bg-[#006758] shadow-xl my-4'>...جزئیات بیشتر</a>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default CarouselComponent
