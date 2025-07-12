import React from 'react'

const NewsMembership = () => {
    return (
        <div className="col-span-5 md:col-span-2
            bg-blue-700 bg-opacity-30 rounded-3xl px-5 md:px-10 py-10">
            <h6 className='text-white text-base md:text-xl font-bold mb-5 md:mb-10'>
                عضویت در خبرنامه
            </h6>
            <p className='text-xs md:text-base text-white font-medium mb-10'>
                برای عضویت در خبرنامه فروشگاه ما و دریافت آخرین اطلاعیه ها و
                اخبار در زمینه ظروف یکبار مصرف و تم تولدی ایمیل خود را وارد کنید..!
            </p>
            <input
                type="text"
                placeholder='ایمیل'
                className='w-full rounded-full py-2 px-5 text-end mb-5 md:mb-10'
            />
            <button className='w-full py-2 hover:bg-violet-700 
                rounded-full text-white bg-blue-500'>
                <span className='mt-1'>ثبت ایمیل</span>
            </button>
        </div>
    )
}

export default NewsMembership
