import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterModeCarousel = () => {

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
        <div className='container bg-[#009B8A]  px-5 rounded-3xl py-10 mt-10'>
            <h1 className='text-center text-white text-xl font-semibold'>پرفروش ترین محصولات</h1>
            <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                    <div className='flex justify-center bg-[#534439] bg-opacity-90
                items-center rounded-3xl'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (1).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col text-white'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='font-semibold text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>click</button>
                        </div>
                    </div>
                    <div className='flex justify-center bg-[#534439] bg-opacity-90
                items-center rounded-3xl'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (2).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col text-white'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='font-semibold text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>click</button>
                        </div>
                    </div>
                    <div className='flex justify-center bg-[#534439] bg-opacity-90
                items-center rounded-3xl'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (3).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col text-white'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='font-semibold text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>click</button>
                        </div>
                    </div>
                    <div className='flex justify-center bg-[#534439] bg-opacity-90
                items-center rounded-3xl'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (4).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col text-white'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='font-semibold text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>click</button>
                        </div>
                    </div>
                    <div className='flex justify-center bg-[#534439] bg-opacity-90
                items-center rounded-3xl'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (5).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col text-white'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='font-semibold text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>click</button>
                        </div>
                    </div>
                    <div className='flex justify-center bg-[#534439] bg-opacity-90
                items-center rounded-3xl'>
                        <a href="/" className='flex border-b-2 justify-center'>
                            <img className='w-1/2' src="/assets/images/slide (6).png" alt="" />
                        </a>
                        <div className='px-4 flex justify-end flex-col text-white'>
                            <a href="/" >
                                <h5 className='py-4 text-end text-xl'>
                                    ظروف یکبار مصرف
                                </h5>
                            </a>
                            <a href="/">
                                <p className='font-semibold text-end text-sm'>
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                    نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </a>
                            <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-[#006758] shadow-xl my-4'>click</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default CenterModeCarousel
