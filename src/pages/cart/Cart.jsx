import React from 'react'
import Footer from '../../components/Footer'
import ProductsList from './ProductsList';
import useSolidNavbar from '../../hooks/useSolidNavbar';


const Cart = () => {

    useSolidNavbar(true);

    return (
        <>
            <div className="container pb-10 pt-16">
                <h1 className="md:text-3xl text-center font-bold text-mgreen py-10">
                    سبد خرید شما
                </h1>
                <ProductsList />
            </div>
            <Footer />
        </>
    )
}

export default Cart
