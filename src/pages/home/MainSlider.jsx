import React, { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = [
        { url: '../assets/images/home1.jpg' },
        { url: '../assets/images/home2.jpg' },
        { url: '../assets/images/home3.jpg' },
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const islastSlide = currentIndex === slides.length - 1;
        const newIndex = islastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    return (
        <div className='max-w-[1000px] h-[300px] md:max-w-[1400px] md:h-[610px] w-full m-auto relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500 object-cover'>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%]
                     right-5 text-2xl rounded-full p-2 bg-slate-600 text-white cursor-pointer'>
                <FaAngleRight onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%]
                     left-5 text-2xl rounded-full p-2 bg-slate-600 text-white cursor-pointer'>
                <FaAngleLeft onClick={nextSlide} size={30} />
            </div>
        </div>
    )
}

export default MainSlider
