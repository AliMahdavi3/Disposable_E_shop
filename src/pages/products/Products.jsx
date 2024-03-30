import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Footer from '../../components/Footer';

const Products = () => {

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
        <>
            <div className='h-20 rounded-b-2xl bg-gradient-to-r from-mgreen to-[#1F917C] w-full'></div>
            <div className='pt-8'>
                {/* FirstCarousel */}
                <div className='container pb-10'>
                    <h1 className='text-center text-mgreen pt-5 text-xl font-bold'>پرفروش ترین محصولات</h1>
                    <div className="slider-container px-5 mt-6">
                        <Slider {...settings}>
                            <div className='flex mb-5 justify-center bg-white
                            items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
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
                                        <p className='font-semibold text-end text-sm'>
                                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                            نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                        </p>
                                    </a>
                                    <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-mgreen shadow-xl my-4'>click</button>
                                </div>
                            </div>
                            <div className='flex mb-5 justify-center bg-white
                            items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
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
                                        <p className='font-semibold text-end text-sm'>
                                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                            نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                        </p>
                                    </a>
                                    <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-mgreen shadow-xl my-4'>click</button>
                                </div>
                            </div>
                            <div className='flex mb-5 justify-center bg-white
                            items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
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
                                        <p className='font-semibold text-end text-sm'>
                                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                            نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                        </p>
                                    </a>
                                    <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-mgreen shadow-xl my-4'>click</button>
                                </div>
                            </div>
                            <div className='flex mb-5 justify-center bg-white
                            items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
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
                                        <p className='font-semibold text-end text-sm'>
                                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                            نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                        </p>
                                    </a>
                                    <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-mgreen shadow-xl my-4'>click</button>
                                </div>
                            </div>
                            <div className='flex mb-5 justify-center bg-white
                            items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
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
                                        <p className='font-semibold text-end text-sm'>
                                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                            نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                        </p>
                                    </a>
                                    <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-mgreen shadow-xl my-4'>click</button>
                                </div>
                            </div>
                            <div className='flex mb-5 justify-center bg-white
                            items-center box_shadow rounded-xl bg-opacity-50 hover:shadow-lg hover:shadow-[#17907F]'>
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
                                        <p className='font-semibold text-end text-sm'>
                                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز
                                            نامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                        </p>
                                    </a>
                                    <button className='hover:bg-violet-800 cursor-pointer py-2 w-full text-white font-bold rounded-lg bg-mgreen shadow-xl my-4'>click</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* Products-List */}
                <div className="container">

                    <div className='py-5'>
                        <h1 className='font-bold text-mgreen'>محصولات</h1>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-3">
                            <div className='w-full mb-4'>
                                <input
                                    type="text"
                                    placeholder='جستجو در محصولات'
                                    className='w-full box_shadow px-5 rounded-lg py-2' />
                            </div>
                            <div className='grid grid-cols-3 gap-4'>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (1).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (2).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (3).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (4).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (5).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (6).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (1).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (2).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                                <div className="md:col-span-1 h-fit hover:shadow-lg hover:shadow-[#17907F] cursor-pointer col-span-3 box_shadow rounded-lg bg-white bg-opacity-50">
                                    <a href="/singleProduct">
                                        <img className='h-2/3 w-full' src="/assets/images/slide (3).png" alt="" />
                                    </a>
                                    <div className='px-5 text-mblack'>
                                        <a href="/singleProduct">
                                            <h3 className='font-semibold lg:text-xl'>محصول شماره 1</h3>
                                            <p className='py-5 text-xs lg:text-base text-gray-600 font-semibold'>
                                                متن ساختگی برایساختگی برای محصول تن ساختگی شمار
                                                محصول تن ساختگی شماره 1
                                            </p>
                                            <p className='flex justify-end text-xs lg:text-base'>
                                                <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                            </p>
                                        </a>

                                        <a href="/singleProduct">
                                            <div className='flex justify-between items-center py-5'>
                                                <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white px-3 lg:px-5 rounded-md py-1'>خرید</button>
                                                <p className='flex items-center'>
                                                    <span className='mx-2 font-medium text-xs lg:text-base'>23,000</span>
                                                    <span className='text-xs'>تومان</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="col-span-4 md:col-span-1">
                            <div className='px-10 py-5 box_shadow text-mblack rounded-lg bg-white bg-opacity-50 w-full'>
                                <h3 className='pb-5 font-bold text-center text-lg md:text-xl'>دسته بندی محصولات</h3>
                                <ul>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">تم تولدی</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">ظروف یکبار مصرف</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">ظروف المینیومی</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">بشقاب</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">بادکنک رنگی</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">لیوان قهوه</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">بشقاب</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">بادکنک رنگی</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>
                                    <li className='flex justify-between items-center text-xs lg:text-base mt-3 font-semibold '>
                                        <a href="/">لیوان قهوه</a>
                                        <span className='rounded-full pt-1 text-xs px-1 bg-slate-200'>34</span>
                                    </li>

                                </ul>
                            </div>
                            <div className='px-10 py-5 mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
                                <h3 className='pb-5 text-center font-bold text-base lg:text-xl'>محدوده قیمت</h3>
                                <div>
                                    <span className='block'>از</span>
                                    <input type="text" placeholder='از قیمت' className='w-full text-xs my-5 px-2 py-2 box_shadow rounded-lg' />
                                </div>
                                <div>
                                    <span className='block'>تا</span>
                                    <input type="text" placeholder='تا قیمت' className='w-full text-xs my-5 px-2 py-2 box_shadow rounded-lg' />
                                </div>
                                <button className='w-full py-2 bg-mgreen text-white
                                         font-bold rounded-xl hover:bg-violet-700'>اعمال قیمت</button>
                            </div>
                            <div className='px-10 py-10 flex justify-center items-center flex-col mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
                                <h3 className='pb-5 font-bold text-base lg:text-xl'>جستجو بر اساس رنگ</h3>
                                <div>
                                    <ul className='grid grid-cols-3 gap-4'>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-green-800 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-rose-800 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-gray-800 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-blue-800 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-amber-500 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-green-500 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-purple-700 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-gray-300 w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                        <a href='/' className='col-span-1 flex text-white justify-center items-center font-bold bg-black w-5 lg:w-10 h-5 lg:h-10 rounded-full'><span></span></a>
                                    </ul>
                                </div>
                            </div>
                            <div className='px-10 py-10 flex justify-center items-center flex-col mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
                                <h3 className='pb-5 font-bold text-lg md:text-xl'>تگ های پربازدید</h3>
                                <div>
                                    <ul className='grid grid-cols-2 gap-2'>
                                        <li className='col-span-1 rounded-lg px-2 text-xs lg:text-base  text-center py-2 bg-gray-600 text-white font-semibold'><a href="/">تم تولدی</a></li>
                                        <li className='col-span-1 rounded-lg px-2 text-xs lg:text-base  text-center py-2 bg-gray-600 text-white font-semibold'><a href="/">لیوان</a></li>
                                        <li className='col-span-1 rounded-lg px-2 text-xs lg:text-base  text-center py-2 bg-gray-600 text-white font-semibold'><a href="/">بشقاب</a></li>
                                        <li className='col-span-1 rounded-lg px-2 text-xs lg:text-base  text-center py-2 bg-gray-600 text-white font-semibold'><a href="/">بادکنک رنگی</a></li>
                                        <li className='col-span-1 rounded-lg px-2 text-xs lg:text-base  text-center py-2 bg-gray-600 text-white font-semibold'><a href="/">لیوان کاغذی</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='mt-10'>
                        <div dir='ltr' className="flex flex-col items-center my-12">
                            <div className="flex text-gray-700">
                                <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                    <FaChevronLeft />
                                </div>
                                <div className="flex h-12 font-medium rounded-full bg-gray-200">
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2</div>
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
                                    <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
                                    <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
                                </div>
                                <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                    <FaChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <Footer />

            </div >
        </>
    )
}

export default Products
