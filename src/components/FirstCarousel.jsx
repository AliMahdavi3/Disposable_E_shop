import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FirstCarousel = () => {

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
                    <div className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (1).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-2xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold 
                            rounded-lg bg-mgreen shadow-xl my-4'>...جزئیات بیشتر</button>
                        </div>
                    </div>
                    <div className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (2).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-2xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold 
                            rounded-lg bg-mgreen shadow-xl my-4'>...جزئیات بیشتر</button>
                        </div>
                    </div>
                    <div className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (3).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-2xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold 
                            rounded-lg bg-mgreen shadow-xl my-4'>...جزئیات بیشتر</button>
                        </div>
                    </div>
                    <div className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (4).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-2xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold 
                            rounded-lg bg-mgreen shadow-xl my-4'>...جزئیات بیشتر</button>
                        </div>
                    </div>
                    <div className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (5).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-2xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold 
                            rounded-lg bg-mgreen shadow-xl my-4'>...جزئیات بیشتر</button>
                        </div>
                    </div>
                    <div className='flex mb-5 justify-center bg-stone-100 bg-opacity-50
                            items-center shadow-md shadow-mgreen rounded-lg'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (6).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-2xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold 
                            rounded-lg bg-mgreen shadow-xl my-4'>...جزئیات بیشتر</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default FirstCarousel
