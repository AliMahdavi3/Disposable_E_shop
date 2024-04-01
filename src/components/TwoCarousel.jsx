import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TwoCarousel = () => {

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
                        <div className='flex'>
                            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                                <div className='col-span-3 md:col-span-1'>
                                    <a href="/" className='border-b-2'>
                                        <img className='h-full w-full' src="/assets/images/slide (1).png" alt="" />
                                    </a>
                                </div>
                                <div className='col-span-3 md:col-span-2 px-5'>
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
                                    <div className='flex justify-end'>
                                        <a href="/">
                                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                                             text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                                <div className='col-span-3 md:col-span-1'>
                                    <a href="/" className='border-b-2'>
                                        <img className='h-full w-full' src="/assets/images/slide (2).png" alt="" />
                                    </a>
                                </div>
                                <div className='col-span-3 md:col-span-2 px-5'>
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
                                    <div className='flex justify-end'>
                                        <a href="/">
                                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                                             text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                                <div className='col-span-3 md:col-span-1'>
                                    <a href="/" className='border-b-2'>
                                        <img className='h-full w-full' src="/assets/images/slide (3).png" alt="" />
                                    </a>
                                </div>
                                <div className='col-span-3 md:col-span-2 px-5'>
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
                                    <div className='flex justify-end'>
                                        <a href="/">
                                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                                             text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="slider-container px-5 mt-6">
                <Slider {...settings}>
                        <div className='flex'>
                            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                                <div className='col-span-3 md:col-span-1'>
                                    <a href="/" className='border-b-2'>
                                        <img className='h-full w-full' src="/assets/images/slide (1).png" alt="" />
                                    </a>
                                </div>
                                <div className='col-span-3 md:col-span-2 px-5'>
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
                                    <div className='flex justify-end'>
                                        <a href="/">
                                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                                             text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                                <div className='col-span-3 md:col-span-1'>
                                    <a href="/" className='border-b-2'>
                                        <img className='h-full w-full' src="/assets/images/slide (2).png" alt="" />
                                    </a>
                                </div>
                                <div className='col-span-3 md:col-span-2 px-5'>
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
                                    <div className='flex justify-end'>
                                        <a href="/">
                                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                                             text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='grid grid-cols-3 bg-stone-200 shadow-mgreen bg-opacity-50 shadow-md rounded-lg'>
                                <div className='col-span-3 md:col-span-1'>
                                    <a href="/" className='border-b-2'>
                                        <img className='h-full w-full' src="/assets/images/slide (3).png" alt="" />
                                    </a>
                                </div>
                                <div className='col-span-3 md:col-span-2 px-5'>
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
                                    <div className='flex justify-end'>
                                        <a href="/">
                                            <button className='hover:bg-[stone-200 shadow-mgreen shadow-md px-4 cursor-pointer py-2
                                             text-white rounded-lg bg-mgreen my-4 hover:bg-[#7574B3]'>...جزئیات بیشتر</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TwoCarousel
