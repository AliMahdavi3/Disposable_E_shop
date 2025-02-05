import React, { useState } from 'react'
import { FaHeart, FaRegHeart, FaReply } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { addProductToFavoritesService } from '../../../services/product';
import { Alert } from '../../../utils/alert';

const AddToFavorites = ({ productId, data }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = async () => {
        try {
            const res = await addProductToFavoritesService(productId);
            if (res.status === 200) {
                setIsFavorite(true);
                Alert("عملیات موفقیت آمیز بود!", "محصول به لیست علاقه مندی اضافه شد!", 'success');
            }
        } catch (error) {
            Alert('خطایی رخ داده است!', error.message, 'error')
            console.log(error.message);
        }
    };

    return (
        <div className='flex justify-between'>
            <h1 className='text-base md:text-xl text-mblack font-bold'>{data.product.title}</h1>
            <div className='flex justify-center items-center'>
                <div onClick={handleAddToFavorites}>
                    {isFavorite ? (
                        <FaHeart className='text-rose-500 ml-3 md:ml-5 text-base md:text-xl cursor-pointer' />
                    ) : (
                        <FaRegHeart className='text-gray-700 ml-3 md:ml-5 text-base md:text-xl cursor-pointer' />
                    )}
                </div>
                <NavLink to="/products">
                    <FaReply className='text-gray-700 text-base md:text-xl' />
                </NavLink>
            </div>
        </div>
    )
}

export default AddToFavorites
