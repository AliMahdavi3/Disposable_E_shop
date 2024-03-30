import React, { useState } from 'react'
import { FaEdit, FaExclamationTriangle } from "react-icons/fa";
import Footer from '../../components/Footer';
import Favorites from './Favorites';
import OrderHistory from './OrderHistory';
import PaymentDetaile from './PaymentDetaile';
import UserInfo from './UserInfo';
import SupportOrHelp from './SupportOrHelp';
import Comments from './Comments';
const Profile = () => {
    const [activeSection, setActiveSection] = useState('orderHistory');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    }
 
    const renderSection = () => {
        switch (activeSection) {
            case 'orderHistory':
                return <OrderHistory />;
            case 'favorites':
                return <Favorites />;
            case 'paymentDetails':
                return <PaymentDetaile />;
            case 'userInfo':
                return <UserInfo />;
            case 'support':
                return <SupportOrHelp />;
            case 'comments':
                return <Comments />;
            default:
                return <OrderHistory />
        }
    }


    return (
        <>
            <div className='h-20 rounded-b-2xl bg-gradient-to-r from-mgreen to-[#1F917C] w-full'></div>

            <div className='container pt-5'>
                <h1 className='py-5 font-bold text-center text-mgreen text-2xl'>حساب کاربری شما</h1>

                <div className="grid grid-cols-3 gap-4 py-5">
                    <div className="col-span-3 h-fit w-full lg:col-span-2">

                        {/* Warning */}
                        <div className='border-2 rounded-lg py-3 px-5 flex justify-between'>
                            <p className='text-xs md:text-sm flex justify-center text-yellow-500'>
                                <FaExclamationTriangle className='ml-2' />
                                <span>
                                    با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید
                                </span>
                            </p>
                            <a href="/profile" className='text-xs md:text-sm text-blue-500 font-semibold'>تایید هویت</a>
                        </div>
                        {renderSection()}
                    </div>


                    <div className="col-span-3 h-fit w-full lg:col-span-1 rounded-lg border-2">
                        <div className='px-5 py-5'>
                            <h6 className='pb-5 font-semibold text-mblack'>اطلاعات کاربری</h6>
                            <a href="/profile" className='flex justify-between items-center'>
                                <span>09012559459</span>
                                <FaEdit className='text-blue-500' />
                            </a>
                        </div>
                        <hr className='pt-5' />
                        <ul className='px-5'>
                            <li onClick={() => handleSectionChange('orderHistory')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>تاریخچه سفارشات</li><hr />
                            <li onClick={() => handleSectionChange('favorites')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>لیست علاقه مندی ها</li><hr />
                            <li onClick={() => handleSectionChange('paymentDetails')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>جزیئات پرداخت</li><hr />
                            <li onClick={() => handleSectionChange('userInfo')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>اطلاعات حساب کاربری</li><hr />
                            <li onClick={() => handleSectionChange('support')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>پشتیبانی/راهنمایی</li><hr />
                            <li onClick={() => handleSectionChange('comments')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>نظرات و بازخوردها</li><hr />
                            <li onClick={() => handleSectionChange('orderHistory')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>پیغام ها</li><hr />
                            <li onClick={() => handleSectionChange('orderHistory')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>خروج</li><hr />
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Profile
