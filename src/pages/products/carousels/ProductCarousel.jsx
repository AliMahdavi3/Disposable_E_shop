import React, { useEffect, useState } from 'react'
import CarouselComponent from '../../../components/CarouselComponent';
import { getNewestProductsService } from '../../../services/product';

const ProductCarousel = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNewestProducts = async () => {
            try {
                const response = await getNewestProductsService();
                setData(response.data.products);
            } catch (error) {
                console.error('Error fetching newest products:', error);
            }
        }
        fetchNewestProducts();
    }, []);

    return (
        <>

            <CarouselComponent
                title={'جدیدترین محصولات'}
                titleColor={'text-gray-500'}
                data={data}
            />
        </>
    )
}

export default ProductCarousel
