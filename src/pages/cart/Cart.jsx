import React from 'react'
import Footer from '../../components/Footer'
import ProductsList from './ProductsList';
import useSolidNavbar from '../../hooks/useSolidNavbar';

const Cart = () => {
    useSolidNavbar(true);
    return (
        <>
            <div className="container mt-24">
                <ProductsList />
            </div>
            <Footer />
        </>
    )
}

export default Cart
