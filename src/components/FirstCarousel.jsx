import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CarouselComponent from './CarouselComponent';

const FirstCarousel = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchedTopSellingProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/top-selling-products');
                setData(response.data.products);
            } catch (error) {
                console.error('Error fetching top-selling products:', error);
            }
        }
        fetchedTopSellingProducts();
    }, []);

    return (
        <>
            <CarouselComponent
                title={'پرفروش ترین محصولات'}
                titleColor={'text-gray-500'}
                data={data}
            />
        </>
    )
}

export default FirstCarousel
