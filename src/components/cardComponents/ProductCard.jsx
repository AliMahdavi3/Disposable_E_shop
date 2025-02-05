import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({ product, modify, handleRemoveFavorite }) => {
    return (
        <div className={`md:col-span-1 ${modify ? "col-span-3 md:items-center py-3 mb-2" : "col-span-3"} 
            h-fit box_shadow rounded-lg hover:shadow-lg bg-white bg-opacity-50 cursor-pointer
            ${product.available ? ' hover:shadow-[#17907F]' : ' hover:shadow-rose-500'}`}>

            <a href={`products/${product._id}`} target='_blank' rel='noopener noreferrer'>
                <img className='h-2/3 w-full'
                    src={"http://localhost:4000/" + product.imageUrl[1]} alt="" />
            </a>

            <div className='px-5 text-mblack'>
                <a href={`products/${product._id}`} target='_blank' rel='noopener noreferrer'>
                    <h3 className={`font-medium ${modify ? "text-xs lg:text-base" : "lg:text-xl"}`}>
                        {product.title}
                    </h3>

                    <p className='py-5 text-xs lg:text-base text-gray-600 font-medium truncate'>
                        {product.content}
                    </p>

                    <div className='flex justify-between'>
                        <p>
                            {
                                product.available ? (
                                    <span className='font-medium text-xs md:text-sm text-green-800'>موجود است</span>
                                ) : (
                                    <span className='font-medium text-xs md:text-sm text-rose-600'>موجود نیست</span>
                                )
                            }
                        </p>
                        {
                            modify ? (
                                <p className='flex flex-col items-end'>
                                    <span className='mx-2 font-medium text-xs'>{product.price}</span>
                                    <span className='text-xs'>تومان</span>
                                </p>
                            ) : (
                                <p className='flex justify-end text-xs lg:text-base'>
                                    <span>{product.rating}</span><FaStar className='ms-2 text-amber-500' />
                                </p>
                            )
                        }
                    </div>

                </a>

                <div className='flex justify-between items-center py-5'>

                    <a href={`products/${product._id}`} target='_blank' rel='noopener noreferrer'>
                        <button className={`hover:bg-violet-700 cursor-pointer 
                                bg-[#007274] text-xs text-white px-3 rounded-md py-1
                                ${!modify ? "lg:px-5 lg:text-base" : ""}`}>
                            خرید
                        </button>
                    </a>
                    {
                        modify ? (
                            <button className='hover:bg-violet-700 cursor-pointer mx-2 
                                    bg-rose-600 text-xs text-white px-3 rounded-md py-1'
                                onClick={() => handleRemoveFavorite(product._id)}
                            >
                                حذف
                            </button>
                        ) : (

                            <p className='flex items-center'>
                                <span className='mx-2 font-medium text-xs lg:text-base'>{product.price}</span>
                                <span className='text-xs'>تومان</span>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard
