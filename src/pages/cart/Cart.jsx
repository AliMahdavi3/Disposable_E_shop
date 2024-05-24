import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import { useNavbarContext } from '../../context/NavbarContext';
import ProductsList from './ProductsList';


const Cart = () => {

    const { setIsSolid } = useNavbarContext();

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false);
    }, []);


    return (
        <>

            <div className="container pb-10 pt-16">
                <h1 className="md:text-3xl text-center font-bold text-mgreen py-10">سبد خرید شما</h1>

                <ProductsList />

            </div>

            <Footer />
        </>
    )
}

export default Cart
