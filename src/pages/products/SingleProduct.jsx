import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    FaRegHeart,
    FaShare,
    FaReply,
    FaShareAlt,
    FaRegEye,
    FaStar,
    FaCartPlus,
    FaQuestionCircle,
    FaThumbsDown,
    FaThumbsUp,
    FaHome
} from "react-icons/fa";
import Footer from '../../components/Footer';
import ProductQuestions from './ProductQuestions';

const SingleProduct = () => {

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
        <>
            <div className='h-20 rounded-b-2xl bg-gradient-to-r from-mgreen to-[#1F917C] w-full'></div>

            <div className="container pt-5 md:px-10">
                <div className="flex items-center py-5 text-xs md:text-base">
                    <a href="/singleProduct" className="text-gray-600 dark:text-gray-200">
                        <FaHome />
                    </a>

                    <span className="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <a href="/singleProduct" className="text-gray-600 dark:text-gray-200 hover:underline">
                        Account
                    </a>

                    <span className="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <a href="/singleProduct" className="text-gray-600 dark:text-gray-200 hover:underline">
                        Profile
                    </a>

                    <span className="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <a href="/singleProduct" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Settings
                    </a>
                </div>
            </div>

            <div className="pt-5 container single_product">
                <div className='py-10 grid grid-cols-5 gap-4'>

                    <div className="col-span-5 md:col-span-3 h-fit py-5">
                        <div className='flex justify-between md:flex-row flex-col items-start md:items-center md:px-10 pb-10'>
                            <div className='mb-3'>
                                <h1 className='mb-3 text-xl text-gray-700 font-bold'>محصول شماره 1</h1>
                                <div className='flex justify-start flex-col lg:flex-row text-xs'>
                                    <div className='flex justify-start py-2'>
                                        <FaRegEye />
                                        <span className='mx-3'>23,000</span>
                                    </div>
                                    <div className='flex justify-start py-2 items-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className='flex justify-start py-2 items-center'>
                                        <span className='md:mx-5'>اضافه شده در تاریخ : 2024/23/04</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 flex justify-center items-center'>
                                <FaRegHeart className='text-gray-700 ml-5 text-xl' />
                                <FaShareAlt className='text-gray-700 ml-5 text-xl' />
                                <FaShare className='text-gray-700 ml-5 text-xl' />
                                <FaReply className='text-gray-700 text-xl' />
                            </div>
                        </div>
                        <div className='md:px-10'>
                            <span className='text-lg md:text-2xl text-mblack'>توضیحات محصول :</span>
                            <p className='mt-5 font-semibold text-xs md:text-base text-mblack'>
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                آینده، شناخت فراوان جامعه و متخصصا
                            </p>
                        </div>
                        <div className='flex justify-between md:flex-row flex-col items-center py-10 px-10'>
                            <input type="number" placeholder='تعداد محصول'
                                className='rounded-lg box_shadow mb-5  bg-opacity-50 text-start px-3 text-xs py-2 md:w-[25%]' />
                            <span className='text-xs mb-5'>در انبار : <span className='font-semibold text-green-800'>موجود است</span></span>
                            <p className='flex items-center mb-5 '>
                                <span className='mx-2 font-medium text-xs lg:text-xl'>23,000</span>
                                <span className='text-xs'>تومان</span>
                            </p>
                        </div>


                        <div className="block md:hidden col-span-5 md:col-span-2 my-5 rounded-xl">
                            <img src="/assets/images/slide (1).png" className='box_shadow hover:shadow-2xl cursor-pointer rounded-xl mb-5' alt="" />
                            <div className='grid grid-cols-3 gap-4'>
                                <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src="/assets/images/slide (2).png" alt="" />
                                <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src="/assets/images/slide (3).png" alt="" />
                                <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src="/assets/images/slide (4).png" alt="" />
                            </div>
                        </div>





                        <div className='px-10'>
                            <button className='bg-mgreen flex justify-center items-center w-full py-2 text-white font-bold
                             rounded-lg hover:bg-violet-800'><span>افزودن به سبد خرید</span><FaCartPlus className='text-lg ms-3' /> </button>
                            <button className='bg-rose-700 mt-3 flex justify-center items-center w-full py-2 text-white font-bold
                             rounded-lg hover:bg-violet-800'><span className='mt-1'>سوالی دارید ؟</span><FaQuestionCircle className='text-lg ms-3' /> </button>
                        </div>
                        <hr className='border-2 border-gray-300 mt-10 mb-5' />
                        <div className='px-10'>
                            <h5 className='py-3 text-mgreen'>مشخصات کالا : </h5>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold '>ابعاد : <span className='text-gray-600'>3 x 3</span></p>
                                <p className='font-bold '>وزن : <span className='text-gray-600'>234 mg</span></p>
                                <p className='font-bold '>کد کالا : <span className='text-gray-600'>GH-342</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-5 md:col-span-2 rounded-xl">
                        <img src="/assets/images/slide (1).png" className='box_shadow hover:shadow-2xl cursor-pointer rounded-xl mb-5' alt="" />
                        <div className='grid grid-cols-3 gap-4'>
                            <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src="/assets/images/slide (2).png" alt="" />
                            <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src="/assets/images/slide (3).png" alt="" />
                            <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src="/assets/images/slide (4).png" alt="" />
                        </div>
                    </div>



                </div>

                <ProductQuestions />



            </div>

            <div className="container">
                <div className='container bg-mgreen mb-10 px-5 rounded-3xl py-10 mt-10'>
                    <h1 className='text-center text-white text-xl font-semibold'>محصولات مشابه</h1>
                    <div className="slider-container px-5 mt-6">
                        <Slider {...settings}>
                            <div className='flex justify-center bg-white bg-opacity-50
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
                            <div className='flex justify-center bg-white bg-opacity-50
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
                            <div className='flex justify-center bg-white bg-opacity-50
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
                            <div className='flex justify-center bg-white bg-opacity-50
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
                            <div className='flex justify-center bg-white bg-opacity-50
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
                            <div className='flex justify-center bg-white bg-opacity-50
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
            </div>

            <Footer />
        </>
    )
}

export default SingleProduct
