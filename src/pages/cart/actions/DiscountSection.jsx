import React from 'react'

const DiscountSection = () => {
    return (
        <div>
            <p className='pb-10 pt-10 text-xl text-center
                font-semibold text-yellow-400'>
                اعمال کد تخفیف
            </p>
            <div className='w-full text-end mt-3'>
                <label
                    htmlFor=""
                    className='text-sm md:text-base font-medium text-gray-700'>
                    آیا کد تخفیف دارید ؟
                </label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        className='mt-3 py-2 text-xs md:text-base 
                        w-full border-2 rounded-lg text-end px-2'
                        placeholder='کد تخفیف خود را وارد کنید'
                    />
                </div>
            </div>
        </div>
    )
}

export default DiscountSection
