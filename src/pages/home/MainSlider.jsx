import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { getMainSliderService } from '../../services/home';
import { apiPath } from '../../services/httpService';

const MainSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        const handleGetMainSlider = async () => {
            try {
                const res = await getMainSliderService();
                if (res.status === 200) {
                    setData(res.data.mainSliders);
                    console.log(res.data.mainSliders);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        handleGetMainSlider();
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex((index + data.length) % data.length);
    };

    const prevSlide = () => goToSlide(currentIndex - 1);
    const nextSlide = () => goToSlide(currentIndex + 1);


    return (
        <div className='max-w-[1000px] h-[300px] md:max-w-[1400px] 
            md:h-[610px] w-full m-auto relative group'>
            {data.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 
                    ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={`${apiPath}/${slide.imageUrl}`}
                        className='w-full h-full object-cover'
                        alt={`Slide ${index}`}
                    />
                </div>
            ))}
            <div className='bg-opacity-35 md:bg-opacity-100 md:hidden group-hover:block
                absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2
                bg-slate-600 text-white cursor-pointer'>
                <FaAngleRight onClick={nextSlide} className='text-base md:text-3xl' />
            </div>
            <div className='bg-opacity-35 md:bg-opacity-100 md:hidden group-hover:block
                absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2
                bg-slate-600 text-white cursor-pointer'>
                <FaAngleLeft onClick={prevSlide} className='text-base md:text-3xl' />
            </div>
        </div>
    )
}

export default MainSlider
