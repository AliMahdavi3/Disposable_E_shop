import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserInfo = () => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        birthDate: '',
    });

    useEffect(() => {
        const fetchedUserInfo = async () => {

            try {

                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });

                setUserInfo({
                    name: response.data.user.name,
                    email: response.data.user.email,
                    phone: response.data.user.phone,
                    address: response.data.user.address,
                    city: response.data.user.city,
                    zipCode: response.data.user.zipCode,
                    birthDate: response.data.user.birthDate,
                });

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchedUserInfo();
    }, [])

    return (
        <div>
            <h1 className='text-center py-3 font-bold text-mgreen text-xl'>جزییات حساب خریدار</h1>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    نام و نام خانوادگی
                </span>
                <span>
                    : {userInfo.name}
                </span>
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                IRR
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    ایمیل
                </span>
                <span>
                    : {userInfo.email}
                </span>
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    شماره همراه
                </span>
                <span>
                    : {userInfo.phone}
                </span>
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    آدرس
                </span>
                <span>
                    : {userInfo.address}
                </span>
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    شهر
                </span>
                <span>
                    : {userInfo.city}
                </span>
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    کشور
                </span>
                <span>
                    : Islamic Republic Of Iran
                </span>
            </p>
            <p className='font-semibold text-mblack text-sm lg:text-lg'>
                <span className='me-2 text-gray-500'>
                    کدپستی
                </span>
                <span>
                    : {userInfo.zipCode}
                </span>
            </p>
        </div>
    )
}

export default UserInfo
