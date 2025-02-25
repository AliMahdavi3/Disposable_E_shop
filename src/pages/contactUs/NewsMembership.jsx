import React from 'react'

const NewsMembership = () => {
    return (
        <div className="col-span-5 md:col-span-2
            bg-blue-700 bg-opacity-30 rounded-3xl px-5 py-10">
            <h6 className='text-white text-xl font-bold mb-10'>عضویت در خبرنامه</h6>
            <p className='text-white font-semibold mb-10'>
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Beatae, enim.
                adipisicing elit. Beatae, enim.
            </p>
            <input type="text" placeholder='ایمیل'
                className='w-full rounded-full py-2 px-5 text-end mb-10' />
            <button className='w-full py-2 rounded-full hover:bg-violet-700
            text-white bg-blue-500'><span className='mt-1'>ثبت ایمیل</span></button>
        </div>
    )
}

export default NewsMembership
