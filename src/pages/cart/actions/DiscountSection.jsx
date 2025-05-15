import React from 'react'

const DiscountSection = () => {
    return (
        <div className='mt-5'>
            <div className='w-full text-end mt-3'>
                <label
                    htmlFor=""
                    className='text-xs md:text-sm font-medium text-gray-500'>
                    آیا کد تخفیف دارید ؟
                </label>
                <div className='flex justify-between items-center gap-2 mt-3
                    text-xs md:text-sm'>
                    <button className='bg-mgreen text-white hover:bg-violet-500
                    rounded-md py-2 px-2 w-[25%]'>
                        تایید کد
                    </button>
                    <input
                        type="text"
                        className='py-2 px-2 w-[75%] border-2 rounded-md text-end'
                        placeholder='کد تخفیف خود را وارد کنید'
                    />
                </div>
            </div>
        </div>
    )
}

export default DiscountSection
