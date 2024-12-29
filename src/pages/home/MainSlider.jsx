import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { getMainSliderService } from '../../services/home';


const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        const handleGetMainSlider = async () => {
            try {
                const res = await getMainSliderService();
                console.log(res.data.mainSliders);
                setData(res.data.mainSliders);
            } catch (error) {
                console.log(error.message);
            }
        }
        handleGetMainSlider();
    }, []);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const islastSlide = currentIndex === data.length - 1;
        const newIndex = islastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    return (
        <div className='max-w-[1000px] h-[300px] md:max-w-[1400px] md:h-[610px] w-full m-auto relative group'>
        {data.map((slide, index) => (
            <div 
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <img src={"http://localhost:4000/" + slide.imageUrl} alt={`Slide ${index}`} className='w-full h-full object-cover' />
            </div>
        ))}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%]
                 right-5 text-2xl rounded-full p-2 bg-slate-600 text-white cursor-pointer'>
            <FaAngleRight onClick={nextSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%]
                 left-5 text-2xl rounded-full p-2 bg-slate-600 text-white cursor-pointer'>
            <FaAngleLeft onClick={prevSlide} size={30} />
        </div>
    </div>
    )
}

export default MainSlider
