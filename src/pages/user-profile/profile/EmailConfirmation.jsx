import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const EmailConfirmation = ({ renderSection }) => {
    return (
        <div className="col-span-7 h-fit w-full lg:col-span-5">
            <div className='border-2 rounded-lg py-3 px-5 flex justify-between'>
                <p className='text-xs md:text-sm flex justify-center text-yellow-500'>
                    <FaExclamationTriangle className='ml-2' />
                    <span>
                        با تایید هویت می‌توانید‌ امنیت حساب کاربری خود را افزایش دهید!
                    </span>
                </p>
                <a href="/profile"
                    className='text-xs md:text-sm text-blue-500 font-medium'>
                    تایید هویت
                </a>
            </div>
            {renderSection()}
        </div>
    )
}

export default EmailConfirmation
