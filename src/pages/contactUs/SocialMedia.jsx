import React from 'react'
import { FaEnvelope, FaInstagramSquare, FaPhone, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'

const SocialMedia = () => {
    return (
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
    )
}

export default SocialMedia
