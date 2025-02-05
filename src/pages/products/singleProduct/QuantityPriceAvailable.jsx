import React from 'react'

const QuantityPriceAvailable = ({ quantity, setQuantity, data }) => {
    return (
        <div className='flex justify-between md:flex-row flex-col items-center py-10 px-10'>

            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder='تعداد محصول'
                min='1'
                className='rounded-lg box_shadow mb-5 bg-opacity-50 
                text-start px-3 text-xs py-2 md:w-[25%]'
            />

            <span className='text-xs mb-5'>در انبار :
                {
                    data.product.available ? (
                        <span className='font-medium text-green-800'>موجود است</span>
                    ) : (
                        <span className='font-medium text-rose-600'>موجود نیست</span>
                    )
                }
            </span>

            <p className='flex items-center mb-5 '>
                <span className='mx-2 font-medium text-xs lg:text-xl'>
                    {data.product.price}
                </span>
                <span className='text-xs'>تومان</span>
            </p>

        </div>
    )
}

export default QuantityPriceAvailable
