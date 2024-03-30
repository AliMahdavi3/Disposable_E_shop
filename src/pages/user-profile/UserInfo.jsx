import React from 'react'
import { FaEdit } from 'react-icons/fa'

const UserInfo = () => {
    return (
        <section className="border-2 mt-5 px-5 py-10 h-fit w-full rounded-lg">
            <h3 className='font-bold text-rose-700 pb-5 border-b-4 border-b-mgreen'>اطلاعات حساب کاربری</h3>
            <div className="grid grid-cols-2 gap-8 mt-10">
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <span className='text-gray-500'>نام و نام خانوادگی</span>
                        <FaEdit className='text-blue-600' />
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <span className='text-gray-500'>کد ملی/گذرنامه/گواهی موقت</span>
                        <FaEdit className='text-blue-600' />
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <span className='text-gray-500'>ایمیل</span>
                        <FaEdit className='text-blue-600' />
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <span className='text-gray-500'>رمزعبور</span>
                        <FaEdit className='text-blue-600' />
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <span className='text-gray-500'>تاریخ تولد</span>
                        <FaEdit className='text-blue-600' />
                    </p>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <span className='text-gray-500'>آدرس</span>
                        <FaEdit className='text-blue-600' />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default UserInfo
