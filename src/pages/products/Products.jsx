import React from 'react'
import Footer from '../../components/Footer';
import ProductsSection from './ProductsSection';
import { useSearchParams } from 'react-router-dom';
import useSolidNavbar from '../../hooks/useSolidNavbar';
import NewestProducts from './carousels/NewestProducts';

const Products = () => {

    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    useSolidNavbar(true);

    return (
        <>
            <div className='pt-16'>
                <NewestProducts />
                <div className="container mb-12">
                    <div className='py-5'>
                        <h1 className='font-medium text-mgreen'>محصولات</h1>
                    </div>
                    <ProductsSection
                        selectedCategory={selectedCategory}
                        itemsPerPage={9}
                    />
                </div>
                <Footer />
            </div >
        </>
    )
}

export default Products
