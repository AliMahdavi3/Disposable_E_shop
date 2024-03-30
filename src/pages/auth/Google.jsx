import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Google = () => {
    return (
        <>
            <a href='login' className='font-medium rounded-full hover:bg-gray-200 cursor-pointer
                flex justify-between border-2 px-5 items-center w-full py-2'>
                <span className='text-gray-600 text-xs md:text-base'>ورود با حساب گوگل</span>
                <FcGoogle className='text-lg md:text-3xl' />
            </a>

            <div className='flex w-full justify-center items-center my-3'>
                <hr className='w-full' />
                <p className='text-xs text-gray-600 text-center w-full lg:w-[50%]'>ورود با</p>
                <hr className='w-full' />
            </div>
        </>
    )
}

export default Google
