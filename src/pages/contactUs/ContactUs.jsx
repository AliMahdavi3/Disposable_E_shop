import React from 'react'
import { FaEnvelope, FaInstagramSquare, FaPhone, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'
import Footer from '../../components/Footer'

const ContactUs = () => {
    return (
        <>
            <div className="contact border-b-8 border-blue-300">
                <div className='pb-36'>
                    <h1 className='text-center pt-52 text-5xl md:text-9xl text-white'>تماس با ما</h1>
                    <div className='flex justify-center items-center py-10'>
                        <a href="/contact" className='text-5xl mx-5 text-rose-700'>
                            <FaInstagramSquare />
                        </a>
                        <a href="/contact" className='text-5xl mx-5 text-blue-700'>
                            <FaTelegram />
                        </a>
                        <a href="/contact" className='text-5xl mx-5 text-mgreen'>
                            <FaWhatsappSquare />
                        </a>
                    </div>
                </div>
            </div>

            <div className='container py-20'>
                <div className="grid grid-cols-5 gap-6">
                    <div className="col-span-5 md:col-span-2
                     bg-blue-700 bg-opacity-30 rounded-3xl px-5 py-10">
                        <h6 className='text-white text-xl font-bold mb-10'>عضویت در خبرنامه</h6>
                        <p className='text-white font-semibold mb-10'>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Beatae, enim.
                            adipisicing elit. Beatae, enim.
                        </p>
                        <input type="text" placeholder='ایمیل'
                            className='w-full rounded-full py-2 px-5 text-end mb-10' />
                        <button className='w-full py-2 rounded-full hover:bg-violet-700
                         text-white bg-blue-500'><span className='mt-1'>ثبت ایمیل</span></button>
                    </div>
                    <div className="col-span-5 md:col-span-3">
                        <h3 className='mb-5 font-bold text-mgreen text-xl'>ارسال پیام به تیم تک شاپ</h3>
                        <form dir='ltr'>
                            <div className='flex justify-between gap-4 items-center'>
                                <input type="text" placeholder='ایمیل' className='w-full mb-5 py-2 px-5 rounded-full bg-blue-600 bg-opacity-25' />
                                <input type="text" placeholder='شماره تلفن' className='w-full mb-5 py-2 px-5 rounded-full bg-blue-600 bg-opacity-25' />
                            </div>
                            <input type="text" placeholder='نام یا نام نام خانوادگی' className='text-end w-full mb-5 py-2 px-5 rounded-full bg-blue-600 bg-opacity-25' />
                            <textarea placeholder='متن پیام' className='text-end w-full mb-5 py-2 px-5 rounded-3xl bg-blue-600 bg-opacity-25' name="" id="" cols="30" rows="5"></textarea>
                            <button className='w-1/3 py-2 rounded-full text-white font-bold bg-blue-700 bg-opacity-45 hover:bg-violet-800'><span>ارسال پیام</span></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container pb-20">
                <h1 className='text-center text-3xl font-bold text-mgreen py-10'>تماس از طریق صفحات مجازی</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 lg:col-span-1 bg-gray-100 box_shadow bg-opacity-80 px-5 py-10 rounded-xl
                     flex justify-center items-center flex-col">
                        <FaEnvelope className='text-7xl mb-5' />
                        <p className='text-2xl flex flex-col text-center'>
                            <span className='mb-2 text-sm md:text-base'>alimahdavi30000@gmail.com</span>
                            <span className='text-xs md-sm'>
                            شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                             اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </span>
                        </p>
                    </div>
                    <div className="col-span-3 lg:col-span-1 bg-gray-400 bg-opacity-30 box_shadow px-5 py-10 rounded-xl">
                        <div className='flex justify-center items-center'>
                            <FaInstagramSquare className='text-5xl mx-2 mb-5' />
                            <FaTelegram className='text-5xl mx-2 mb-5' />
                            <FaWhatsappSquare className='text-5xl mx-2 mb-5' />
                        </div>
                        <p className='text-2xl flex flex-col text-center'>
                            <span className='my-5 text-sm md:text-base'>alimahdavi453</span>
                            <span className='text-sm'>
                            شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                             اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </span>
                        </p>
                    </div>
                    <div className="col-span-3 lg:col-span-1 bg-blue-500 bg-opacity-30 box_shadow px-5 py-10 rounded-xl
                     flex justify-center items-center flex-col">
                        <FaPhone className='text-7xl mb-5' />
                        <p className='text-2xl flex flex-col text-center'>
                            <span className='mb-2 text-sm md:text-base font-semibold'>09012559469</span>
                            <span className='mb-2 text-sm md:text-base font-semibold'>09210487558</span>
                            <span className='text-xs md:text-sm'>
                            شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                             اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container pb-10">
                <h1 className='text-center py-10 text-mgreen font-bold'>آدرس ما</h1>
                <div className='w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103727.53456132182!2d51.04402631624899!3d35.6650469041418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1709288702821!5m2!1sen!2s"
                        width="100%" height="450" style={{ borderRadius: '30px' }} allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
