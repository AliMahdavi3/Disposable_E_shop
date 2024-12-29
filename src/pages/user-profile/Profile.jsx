import React, { useEffect, useState } from 'react'
import { FaEdit, FaExclamationTriangle } from "react-icons/fa";
import Footer from '../../components/Footer';
import Favorites from './Favorites';
import OrderHistory from './OrderHistory';
import PaymentDetaile from './PaymentDetaile';
import UserInfo from './UserInfo';
import SupportOrHelp from './SupportOrHelp';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNavbarContext } from '../../context/NavbarContext';


const Profile = () => {
    const [activeSection, setActiveSection] = useState('orderHistory');
    const [userData, setUserData] = useState({ phone: '', });
    const navigate = useNavigate();

    const { setIsSolid } = useNavbarContext();

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false); // Revert back when leaving the page
    }, []);

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token != null;
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {

                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // data is nested within a user object in the response
                setUserData(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, []);

    useEffect(() => {
        if (!isAuthenticated() && window.location.pathname !== '/login') {
            navigate('/login');
        }
    }, [navigate]);


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
            case 'logout':
                return <Logout />;
            default:
                return <OrderHistory />
        }
    }


    return (
        <>
            <div className='container pt-20'>
                <h1 className='py-5 font-bold text-center text-mgreen text-2xl'>حساب کاربری شما</h1>

                <div className="grid grid-cols-3 gap-4 py-5">
                    <div className="col-span-3 h-fit w-full lg:col-span-2">

                        {/* Warning */}
                        <div className='border-2 rounded-lg py-3 px-5 flex justify-between'>
                            <p className='text-xs md:text-sm flex justify-center text-yellow-500'>
                                <FaExclamationTriangle className='ml-2' />
                                <span>
                                    با تایید هویت می‌توانید‌ امنیت حساب کاربری خود را افزایش دهید!
                                </span>
                            </p>
                            <a href="/profile" className='text-xs md:text-sm text-blue-500 font-semibold'>تایید هویت</a>
                        </div>
                        {renderSection()}
                    </div>


                    <div className="col-span-3 h-fit w-full lg:col-span-1 rounded-lg border-2">
                        <div className='px-5 py-5'>
                            <h6 className='pb-5 font-semibold text-mblack'>اطلاعات کاربری</h6>
                            <div className='flex justify-between items-center'>
                                <span>{userData.phone}</span>
                                <FaEdit onClick={() => handleSectionChange('userInfo')}
                                    className='text-amber-500 cursor-pointer text-xl' />
                            </div>
                        </div>
                        <hr className='pt-5' />
                        <ul className='px-5'>
                            <li onClick={() => handleSectionChange('orderHistory')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>تاریخچه سفارشات</li><hr />
                            <li onClick={() => handleSectionChange('favorites')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>لیست علاقه مندی ها</li><hr />
                            <li onClick={() => handleSectionChange('paymentDetails')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>جزیئات پرداخت</li><hr />
                            <li onClick={() => handleSectionChange('userInfo')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>اطلاعات حساب کاربری</li><hr />
                            <li onClick={() => handleSectionChange('support')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>پشتیبانی/راهنمایی</li><hr />
                            <li onClick={() => handleSectionChange('logout')} className='cursor-pointer hover:text-mgreen py-5 font-semibold text-gray-700'>خروج</li><hr />
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Profile
