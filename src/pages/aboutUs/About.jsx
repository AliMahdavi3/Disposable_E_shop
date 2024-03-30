import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaArrowDown, FaInstagramSquare, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import Footer from '../../components/Footer';

const About = () => {

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    }

    const faq = [
        {
            title: 'سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد',
            bg: 'bg-[#61B2C6]',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            title: 'سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد',
            bg: 'bg-[#CB698B]',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            title: 'سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد',
            bg: 'bg-[#F9F871]',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            title: 'سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد',
            bg: 'bg-[#007274]',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            title: 'سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد',
            bg: 'bg-[#FF8848]',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            title: 'سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد',
            bg: 'bg-[#7780BA]',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
    ]

    return (
        <>
            <div className='about border-b-8'>
                <div className='pt-28 md:pt-52 container'>
                    <div className='navbar_shadow'>
                        <p className='md:text-7xl text-2xl font-bold mb-10 text-rose-500'>همه چیز درباره</p>
                        <h1 className='md:text-8xl text-3xl font-bold text-[#009992]'>فروشگاه اینترنتی ما</h1>
                    </div>
                    <div className='flex justify-between items-center pt-10 pb-16'>
                        <a href="/about">
                            <button className='flex hover:bg-amber-600 cursor-pointer 
                            justify-between items-center text-sm md:text-base bg-violet-500 text-white font-bold px-5 md:px-10 py-2 
                        mt-10 rounded-lg'><span className='mt-1'>مطالعه بیشتر</span><FaArrowDown className='ms-2' /></button>
                        </a>
                        <div className='flex justify-center items-center text-2xl md:text-5xl text-violet-500 md:text-gray-100 mt-10'>
                            <a className='hover:text-rose-700' href="/about">
                                <FaInstagramSquare />
                            </a>
                            <a className='ms-5 hover:text-blue-700' href="/about">
                                <FaTelegram />
                            </a>
                            <a className='ms-5 hover:text-green-700' href="/about">
                                <FaWhatsappSquare />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-10">
                <div className="grid grid-cols-2 bg-gray-100 bg-opacity-50 px-10 py-10 rounded-2xl box_shadow h-fit w-full">
                    <div className='col-span-2 md:col-span-1 text-center md:text-start'>
                        <h2 className='mt-5 lg:mt-10 font-bold text-gray-600 md:text-3xl'>درباره تک شاپ</h2>
                        <p className='mt-5 lg:mt-20 font-semibold text-gray-600 text-xs md:text-base'>
                            لورم ایپسوم متن ساختگی
                            با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طرا
                            حان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                            و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتا
                            بهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                            و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                            سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className='mt-5 col-span-2 md:col-span-1 flex justify-center items-center'>
                        <img className='w-[70%]' src="/assets/images/Frame.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <section dir='ltr' className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="grid items-center gap-4 xl:grid-cols-5">
                            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                                <h2 className="text-4xl font-bold">نظر خریداران درباره فروشگاه اینترنتی ما</h2>
                                <p className="dark:text-gray-400">زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه</p>
                            </div>
                            <div className="p-6 xl:col-span-3">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid content-center gap-4">
                                        <div className="p-6 rounded box_shadow dark:bg-gray-900">
                                            <p>
                                                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                                                ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                                و دشواری موجود در ارائه راهکارها
                                            </p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="/assets/images/avatar.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                    <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded box_shadow dark:bg-gray-900">
                                            <p>
                                                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                                                ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                                و دشواری موجود در ارائه راهکارها
                                            </p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="/assets/images/avatar.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                    <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid content-center gap-4">
                                        <div className="p-6 rounded box_shadow dark:bg-gray-900">
                                            <p>
                                                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                                                ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                                                ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                                و دشواری موجود در ارائه راهکارها
                                            </p>                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="/assets/images/avatar.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                    <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded box_shadow dark:bg-gray-900">
                                            <p>
                                                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                                                ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                                ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                                                و دشواری موجود در ارائه راهکارها
                                            </p>                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="/assets/images/avatar.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                    <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

            <div className="container pb-5">
                <h2 className='text-center text-3xl py-10 font-bold text-mgreen'>چرا باید به ما اعتماد کنید!</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-3 md:col-span-1 bg-[#61B2C6] text-gray-700 px-5 py-5 rounded-md'>
                        <h5 className='text-base md:text-2xl font-bold mb-3'>متن ساختگی</h5>
                        <p className='text-xs md:text-base font-semibold'>
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                            ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می تو
                        </p>
                        <div className='flex justify-end'>
                            <FaWhatsappSquare className='text-7xl ml-2 text-mblack' />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 bg-[#CB698B] text-gray-700 px-5 py-5 rounded-md'>
                        <h5 className='text-base md:text-2xl font-bold mb-3'>متن ساختگی</h5>
                        <p className='text-xs md:text-base font-semibold'>
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                            ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می تو
                        </p>
                        <div className='flex justify-end'>
                            <FaWhatsappSquare className='text-7xl ml-2 text-mblack' />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 bg-[#F9F871] text-gray-700 px-5 py-5 rounded-md'>
                        <h5 className='text-base md:text-2xl font-bold mb-3'>متن ساختگی</h5>
                        <p className='text-xs md:text-base font-semibold'>
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                            ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می تو
                        </p>
                        <div className='flex justify-end'>
                            <FaWhatsappSquare className='text-7xl ml-2 text-mblack' />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 bg-[#A86DA7] text-gray-700 px-5 py-5 rounded-md'>
                        <h5 className='text-base md:text-2xl font-bold mb-3'>متن ساختگی</h5>
                        <p className='text-xs md:text-base font-semibold'>
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                            ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می تو
                        </p>
                        <div className='flex justify-end'>
                            <FaWhatsappSquare className='text-7xl ml-2 text-mblack' />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 bg-[#FF8848] text-gray-700 px-5 py-5 rounded-md'>
                        <h5 className='text-base md:text-2xl font-bold mb-3'>متن ساختگی</h5>
                        <p className='text-xs md:text-base font-semibold'>
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                            ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می تو
                        </p>
                        <div className='flex justify-end'>
                            <FaWhatsappSquare className='text-7xl ml-2 text-mblack' />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 bg-[#7780BA] text-gray-700 px-5 py-5 rounded-md'>
                        <h5 className='text-base md:text-2xl font-bold mb-3'>متن ساختگی</h5>
                        <p className='text-xs md:text-base font-semibold'>
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را بر
                            ای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد، در این صورت می تو
                        </p>
                        <div className='flex justify-end'>
                            <FaWhatsappSquare className='text-7xl ml-2 text-mblack' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-10">
                <h3 className='py-5 text-3xl text-mgreen text-center font-bold'>سوالات متداول</h3>
                {faq.map((q, index) => (
                    <div key={index} className='pb-2'>
                        <div onClick={() => handleAccordion(index)} className={`flex cursor-pointer transition duration-150 ease-in-out 
                            justify-between items-center w-full h-fit ${q.bg} rounded-md py-5 px-10`}>
                            <span className='text-sm md:text-xl text-gray-700 font-semibold'>{q.title}</span>
                            {openAccordion === index ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`grid overflow-hidden bg-violet-300 text-gray-800 
                            transition-all duration-300 ease-in-out w-full 
                            rounded-md px-10 font-semibold
                            ${openAccordion === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <p className={`overflow-hidden text-xs md:text-xl transition-all duration-300 ease-in-out 
                            ${openAccordion === index ? 'py-5 md:py-10' : null}`}>
                                {q.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container pb-10">
                <h1 className='text-center py-10 font-bold text-mgreen text-lg md:text-2xl'>خدماتی که فروشگاه ما ارائه میدهد</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="md:col-span-1 col-span-3 bg-gray-300 bg-opacity-50 px-5 py-5 rounded-md">
                        <h6 className='text-base md:text-lg font-bold text-mblack mb-3'>متن ساختگی</h6>
                        <p className='text-xs md:text-sm font-semibold text-mblack'>
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                            در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className="md:col-span-1 col-span-3 bg-gray-300 bg-opacity-50 px-5 py-5 rounded-md">
                        <h6 className='text-base md:text-lg font-bold text-mblack mb-3'>متن ساختگی</h6>
                        <p className='text-xs md:text-sm font-semibold text-mblack'>
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                            در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className="md:col-span-1 col-span-3 bg-gray-300 bg-opacity-50 px-5 py-5 rounded-md">
                        <h6 className='text-base md:text-lg font-bold text-mblack mb-3'>متن ساختگی</h6>
                        <p className='text-xs md:text-sm font-semibold text-mblack'>
                            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                            در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About
