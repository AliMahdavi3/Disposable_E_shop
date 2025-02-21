import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const Promote = () => {
    return (
        <div className='container py-5'>
            <div className='grid grid-cols-2 bg-gradient-to-r from-[#4ea6a8] to-[#bffcfc]
                bg-opacity-65 w-full rounded-xl px-5 lg:px-10 py-5'
            >
                <div className='col-span-2 lg:col-span-1 text-gray-500 
                    flex items-center text_shadow text-sm lg:text-xl mb-5 lg:mb-0'>
                    <p>استفاده کن.! لذت ببر و بعد بندازش دور..!</p>
                </div>
                <div className='col-span-2 lg:col-span-1 flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                    <img
                        className='w-10 h-10 lg:w-16 lg:h-16 ml-3 lg:ml-10 border-2 rounded-full'
                        src="/assets/images/category/category_s (4).png"
                        alt=""
                    />
                    <img
                        className='w-10 h-10 lg:w-16 lg:h-16 ml-3 lg:ml-10 border-2 rounded-full'
                        src="/assets/images/category/category_s (2).png"
                        alt=""
                    />
                    <img
                        className='w-10 h-10 lg:w-16 lg:h-16 ml-3 lg:ml-10 border-2 rounded-full'
                        src="/assets/images/category/slide (3).png"
                        alt=""
                    />
                    </div>
                    <NavLink
                        to="/products"
                        className="border-2 py-2 px-2 lg:px-4 text-white
                        rounded-full flex justify-center items-center"
                    >
                        <span className='hidden lg:inline lg:ml-2'>برو به صفحه محصولات</span>
                        <FaArrowLeft className='text-lg lg:text-xl' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Promote
