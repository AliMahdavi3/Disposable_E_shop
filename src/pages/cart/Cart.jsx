import React from 'react'
import Footer from '../../components/Footer'
import ProductsList from './ProductsList';
import useSolidNavbar from '../../hooks/useSolidNavbar';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    useSolidNavbar(true);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    return (
        <>
            {
                !token ? (
                    <div className='px-10 py-24 flex flex-col justify-center items-center'>
                        <img
                            className='w-[50%] md:w-[25%] border-4 rounded-full'
                            src="/assets/images/auth.jpg"
                            alt="auth_poster"
                        />
                        <h1 className='text-center pt-5 text-xs md:text-base 
                            font-medium text-gray-400'>
                            برای افزودن کالا به سبد و ادامه خرید لطفا وارد حساب خود شوید!
                        </h1>
                        <button
                            onClick={() => navigate('/login')}
                            className='bg-mgreen text-white px-4 py-2 rounded-lg
                            mt-4 text-xs md:text-sm md:hover:bg-violet-500'
                        >
                            ورود به حساب کاربری
                        </button>
                    </div>
                ) : (
                    <div className="container mt-24">
                        <ProductsList />
                    </div>
                )
            }
            <Footer />
        </>
    )
}

export default Cart
