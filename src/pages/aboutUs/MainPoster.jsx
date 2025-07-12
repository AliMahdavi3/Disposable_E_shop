import React from 'react'
import { FaArrowDown, FaInstagramSquare, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'

const MainPoster = ({ handleScrollToSection }) => {
    return (
        <div className='about border-b-8'>
            <div className='pt-28 lg:pt-52 container'>
                <div className='text_shadow font-bold'>
                    <p className='text-rose-500 lg:text-7xl text-xl mb-5 lg:mb-10'>
                        همه چیز درباره
                    </p>
                    <h1 className='lg:text-8xl text-2xl text-[#009992]'>
                        فروشگاه اینترنتی ما
                    </h1>
                </div>
                <div className='cursor-pointer flex justify-between items-center 
                    lg:pt-10 pb-10 lg:pb-16'>
                    <button
                        onClick={handleScrollToSection}
                        className='flex items-center text-xs lg:text-sm 
                        rounded-lg bg-violet-500 text-white px-5 lg:px-10 py-2 mt-10'>
                        <span>
                            مطالعه بیشتر
                        </span>
                        <FaArrowDown className='ms-2' />
                    </button>
                    <div className='flex justify-center items-center text-2xl 
                        lg:text-5xl text-violet-500 lg:text-gray-100 mt-10'>
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
    )
}

export default MainPoster
