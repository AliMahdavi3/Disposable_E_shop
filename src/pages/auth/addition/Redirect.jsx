import React from 'react'
import useSolidNavbar from '../../../hooks/useSolidNavbar';
import { NavLink } from 'react-router-dom';

const Redirect = () => {

    useSolidNavbar(true);

    return (
        <div className='container my-20 lg:my-28 flex justify-center items-center'>
            <div className='rounded-2xl w-full lg:w-1/3 py-10 
                shadow-md shadow-mgreen bg-white'>
                <div className="flex justify-center 
                    items-center w-full">
                    <img
                        className='w-[50%]'
                        src="/assets/images/auth.jpg"
                        alt=""
                    />
                </div>
                <div className="px-5 mt-5 bg-white bg-opacity-50 w-full flex flex-col">
                    <p className='py-3 px-2 text-sm font-medium text-gray-500'>
                        لینک بازیابی رمزعبور به ایمیل شما ارسال شد!
                    </p>
                    <NavLink className='py-2 px-3 mt-5 w-full bg-mgreen text-white 
                        rounded-md text-center' to={'/'}>
                        بازگشت به فروشگاه
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default Redirect
