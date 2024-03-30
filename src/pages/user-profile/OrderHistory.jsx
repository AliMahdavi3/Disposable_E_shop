import React from 'react'

const OrderHistory = () => {
    return (
        <section className="border-2 mt-5 py-10 rounded-lg">
            <div className='rounded-lg pb-10 px-5 flex justify-between'>
                <p className='text-xs md:text-lg font-bold text-mblack'>
                    <span>
                        سفارش های من
                    </span>
                </p>
                <a href="/profile" className='text-xs md:text-sm
                text-blue-500 font-semibold'>مشاهده همه</a>
            </div>

            <div className='flex justify-between items-center px-5'>
                <div className='flex justify-start items-center'>
                    <img className='ml-3 w-[25%]' src="/assets/images/user2.png" alt="" />
                    <div>
                        <p><span className='ml-5'>سفارش</span>
                            <span className='text-xs lg:text-sm'>0</span></p>
                        <p>جاری</p>
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <img className='ml-3 w-[25%]' src="/assets/images/user1.png" alt="" />
                    <div>
                        <p><span className='ml-5'>سفارش</span>
                            <span className='text-xs lg:text-sm'>0</span></p>
                        <p>تحویل داده شده</p>
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <img className='ml-3 w-[25%]' src="/assets/images/user.png" alt="" />
                    <div>
                        <p><span className='ml-5'>سفارش</span>
                            <span className='text-xs lg:text-sm'>0</span></p>
                        <p>مرجوع شده</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderHistory
