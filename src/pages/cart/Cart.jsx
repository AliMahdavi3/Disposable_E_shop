import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Footer from '../../components/Footer'
const Cart = () => {

    return (
        <>
            <div className='h-20 rounded-b-2xl bg-gradient-to-r from-mgreen to-[#1F917C] w-full'></div>

            <div className="container pb-10">
                <h1 className="md:text-3xl text-center font-bold text-mgreen py-10">سبد خرید شما</h1>

                <div dir='ltr' className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 md:col-span-2 w-full h-fit">

                        <div className='md:px-10 pb-3'>
                            <ul className='flex justify-between items-center'>
                                <li>محصول</li>
                                <li className='md:me-10'>قیمت</li>
                                <li className='md:me-10'>تعداد</li>
                                <li>ویرایش</li>
                            </ul>
                        </div>

                        <hr className="border-2 border-gray-500" />

                        <div className='flex justify-between items-center mt-5
                            rounded-xl box_shadow bg-[#E6F4F1] bg-opacity-70 py-5 px-5'>
                            <img className='w-[10%] border-2' src="/assets/images/slide (4).png" alt="" />
                            <p className='text-xs md:text-base font-semibold text-mblack'>230000</p>
                            <input placeholder='تعداد' className='text-center border-2 py-1
                             text-xs md:text-sm rounded-md w-[15%] md:w-[20%]' type="number" />
                            <FaTrashAlt className='text-red-600 cursor-pointer md:me-8' />
                        </div>
                        <div className='flex justify-between items-center mt-5
                            rounded-xl box_shadow bg-[#E6F4F1] bg-opacity-70 py-5 px-5'>
                            <img className='w-[10%] border-2' src="/assets/images/slide (4).png" alt="" />
                            <p className='text-xs md:text-base font-semibold text-mblack'>230000</p>
                            <input placeholder='تعداد' className='text-center border-2 py-1
                             text-xs md:text-sm rounded-md w-[15%] md:w-[20%]' type="number" />
                            <FaTrashAlt className='text-red-600 cursor-pointer md:me-8' />
                        </div>
                        <div className='flex justify-between items-center mt-5
                            rounded-xl box_shadow bg-[#E6F4F1] bg-opacity-70 py-5 px-5'>
                            <img className='w-[10%] border-2' src="/assets/images/slide (4).png" alt="" />
                            <p className='text-xs md:text-base font-semibold text-mblack'>230000</p>
                            <input placeholder='تعداد' className='text-center border-2 py-1
                             text-xs md:text-sm rounded-md w-[15%] md:w-[20%]' type="number" />
                            <FaTrashAlt className='text-red-600 cursor-pointer md:me-8' />
                        </div>

                    </div>

                    <div className="col-span-3 md:col-span-1">
                        <div className='py-10 px-5 lg:px-10 rounded-2xl box_shadow w-full bg-violet-700 bg-opacity-45 h-fit'>

                            <div className='flex justify-between items-center font-semibold text-white'>
                                <p className='flex'><span className='me-1 text-xs lg:text-base'>23000</span><span className='text-xs lg:text-sm'>تومان</span></p>
                                <p className='text-xs lg:text-base'>جمع کل محصولات</p>
                            </div>
                            <div className='mt-3 flex justify-between items-center font-semibold text-white'>
                                <p className='flex'><span className='me-1 text-xs lg:text-base'>23000</span><span className='text-xs lg:text-sm'>تومان</span></p>
                                <p className='text-xs lg:text-base'>مالیات بر ارزش افزوده</p>
                            </div>

                            <hr className="border-2 border-violet-950 mt-3" />

                            <div className='mt-3 flex justify-between items-center font-semibold text-white'>
                                <p className='flex'><span className='me-1 text-xs lg:text-base'>23000</span><span className='text-xs lg:text-sm'>تومان</span></p>
                                <p className='text-xs lg:text-base'>جمع مبلغ کل</p>
                            </div>

                            <div>
                                <p className='pb-10 pt-10 text-xl text-center font-bold text_shadow text-yellow-400'>روش های پرداخت</p>
                                <div className='mb-5 flex justify-between items-center px-5'>
                                    <input className={`w-5 h-5`} type="radio" />
                                    <span className='text-base lg:text-xl text-white font-semibold'>بانک ملت</span>
                                </div>
                                <div className='mb-5 flex justify-between items-center px-5'>
                                    <input className={`w-5 h-5`} type="radio" />
                                    <span className='text-base lg:text-xl text-white font-semibold'>بانک سامان</span>
                                </div>
                            </div>
                        </div>

                        <div className='pt-3'>
                            <button className='font-bold hover:bg-rose-500 w-full py-3 bg-mgreen text-white text_shadow rounded-xl text-xl'>ادامه خرید</button>
                        </div>

                        <div className='text-center mt-5'>
                            <a className='pt-5 text-blue-700 font-bold' href='/'>شرایط و قوانین</a>
                        </div>

                    </div>
                </div>

                <hr className="border-2 border-mblack my-5" />

                <div>
                    <h1 className='text-center py-5 font-bold text-mgreen text-xl'>جزیئات مالی خریدار</h1>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>سیدعلی مهدوی اوغاز</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>IRR</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>alimahdavi30000@gmail.com</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>تهران باغستان باباسلمان خ تقی کریمی پلاک 6</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>باغستان, 3358687283</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>تهران</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>Iran, Islamic Republic Of</p>
                    <p className='font-semibold text-mblack text-sm lg:text-lg'>+98.901 255 9469</p>
                </div>

                <hr className="border-2 border-mblack my-5" />
                <div>
                    <h1 className='text-sm text-mblack font-bold md:text-xl'>توضیحات اضافه</h1>
                    <textarea 
                    name="" 
                    className='w-full rounded-3xl bg-[#DAF3EA] px-5 py-3 mt-5'
                    placeholder='شما میتونید هر توضیحی که در مورد سفارش خود دارید رو در این قسمت وارد کنید'
                     id="" cols="30" rows="5"></textarea>
                </div>
            </div>


            <Footer/>
        </>
    )
}

export default Cart
