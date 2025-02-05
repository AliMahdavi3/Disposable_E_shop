import React from 'react'
import { FaStar } from 'react-icons/fa'

const CarouselCard = ({ product, grid }) => {
    return (
        <div className={`${grid ? "grid grid-cols-3" : ""} bg-white bg-opacity-70 rounded-xl my-2
            shadow-mgreen shadow-md ${product.available ? "shadow-mgreen" : "shadow-rose-600"}`}>
            <div className={`${grid ? "col-span-3 md:col-span-1" : ""} border-b flex justify-center`}>
                <img className='w-2/3' src={'http://localhost:4000/' + product.imageUrl[0]} alt={product.title} />
            </div>
            <div className={`${grid ? "col-span-3 md:col-span-2" : ""} px-4 flex flex-col text-mblack`}>
                <p className='py-3 text-end'>{product.title}</p>
                <div className='pb-2 flex justify-end items-center'>
                    <p className='flex items-center me-5'>
                        <span className='mx-2 font-medium text-xs'>{product.price}</span>
                        <span className='text-xs'>تومان</span>
                    </p>
                    <p className='flex justify-end text-xs'>
                        <span>{product.rating}</span><FaStar className='ms-2 text-amber-500' />
                    </p>
                </div>
                <p className='line-clamp-3 text-end text-sm'>{product.content}</p>
                <a href={`/products/${product._id}`} className={`${grid ? "flex justify-end" : ""}`}
                    target='_blank' rel='noopener noreferrer'>
                    <button className={`${grid ? "px-4" : "w-full"} py-2 hover:bg-violet-00 cursor-pointer 
                    text-white text-center rounded-lg bg-[#006758] shadow-xl my-4`}>...جزئیات بیشتر</button>
                </a>
            </div>
        </div >
    )
}

export default CarouselCard
