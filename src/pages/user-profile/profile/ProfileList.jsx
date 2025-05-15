import React from 'react'
import { FaEdit } from 'react-icons/fa'

const ProfileList = ({ userData, handleSectionChange }) => {

    const ProfileListItems = ({ title, value }) => {
        return (
            <li
                onClick={() => handleSectionChange(value)}
                className='cursor-pointer hover:text-mgreen py-5 
                font-medium text-gray-700'>
                {title}
            </li>
        )
    }

    return (
        <div className="col-span-7 h-fit w-full lg:col-span-2 rounded-lg border-2">
            <div className='px-5 py-5'>
                <h6 className='pb-5 font-medium text-mblack'>{userData.name}</h6>
                <div className='flex justify-between items-center'>
                    <span className='text-mblack'>{userData.phone}</span>
                    <FaEdit onClick={() => handleSectionChange('userInfo')}
                    className='text-amber-500 cursor-pointer text-xl' />
                </div>
            </div>

            <hr className='pt-5' />
            <ul className='px-5'>
                <ProfileListItems title={'تاریخچه سفارشات'} value={'ordersHistory'} /><hr />
                <ProfileListItems title={'لیست علاقه مندی ها'} value={'favorites'} /><hr />
                <ProfileListItems title={'جزئیات پرداخت'} value={'paymentDetails'} /><hr />
                <ProfileListItems title={'اطلاعات حساب کاربری'} value={'userInfo'} /><hr />
                <ProfileListItems title={'پشتیبانی/راهنمایی'} value={'support'} /><hr />
                <ProfileListItems title={'خروج'} value={'logout'} /><hr />
            </ul>
        </div>
    )
}

export default ProfileList
