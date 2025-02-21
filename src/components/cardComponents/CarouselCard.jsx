import React from 'react'
import { FaStar } from 'react-icons/fa'
import { apiPath } from '../../services/httpService'

const CarouselCard = ({ product, grid }) => {
    return (
        <div
            className={`${grid ? "grid grid-cols-3" : ""}
            ${product.available ? "shadow-mgreen" : "shadow-rose-600"} 
            bg-opacity-70 bg-white rounded-xl my-2 box_shadow`}
        >
            <div
                className={`${grid ? "col-span-3 md:col-span-1" : ""} 
                border-b flex justify-center`}
            >
                <img
                    className='w-3/5  md:w-2/3'
                    src={`${apiPath}/${product.imageUrl[0]}`}
                    alt={product.title}
                />
            </div>

            <div
                className={`${grid ? "col-span-3 md:col-span-2" : ""} 
                px-4 flex flex-col text-mblack`}
            >
                <p className='text-xs md:text-sm font-medium py-3 text-end'>
                    {product.title}
                </p>

                <div className='pb-2 flex justify-end items-center'>
                    <p className='flex items-center me-5'>
                        <span className='mx-2 font-medium text-xs'>
                            {product.price}
                        </span>
                        <span className='text-xs'>تومان</span>
                    </p>
                    <p className='flex justify-end text-xs'>
                        <span>
                            {product.rating}
                        </span>
                        <FaStar className='ms-2 text-amber-500' />
                    </p>
                </div>

                <p className='line-clamp-3 text-end text-xs md:text-sm font-medium'>
                    {product.content}
                </p>

                <a
                    href={`/products/${product._id}`}
                    className={`${grid ? "flex justify-end" : ""}`}
                    target='_blank' rel='noopener noreferrer'
                >
                    <button
                        className={`${grid ? "w-full md:w-auto px-4" : "w-full"} 
                        py-2 hover:bg-violet-00 cursor-pointer text-xs 
                        md:text-sm text-white text-center rounded-lg
                        shadow-xl my-4 bg-[#006758]`}
                    >
                        جزئیات بیشتر...
                    </button>
                </a>

            </div>
        </div >
    )
}

export default CarouselCard
