import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../../../components/cardComponents/CarouselCard';
import { getRelatedProductsService } from '../../../services/product';


const RelatedProducts = ({ productId }) => {

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const handleFetchRelatedProducts = async () => {
            try {
                const res = await getRelatedProductsService(productId);
                if (res.status === 200) {
                    setRelatedProducts(res.data.products);
                    console.log(res.data.products);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        handleFetchRelatedProducts();
    }, [productId]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="container">
            <div className='container bg-mgreen mb-10 px-5 rounded-3xl py-10 mt-10'>
                <h1 className='text-center text-white text-xl font-medium'>محصولات مشابه</h1>
                <div className="slider-container px-5 mt-6">
                    <Slider {...settings}>
                        {
                            Array.isArray(relatedProducts) ? relatedProducts.map((product) => (
                                <CarouselCard key={product._id} product={product} />
                            )) : null
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts
