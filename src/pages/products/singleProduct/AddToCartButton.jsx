import React from 'react'
import { useNavbarContext } from '../../../context/NavbarContext';
import { FaCartPlus, FaQuestionCircle } from 'react-icons/fa';
import { addToCartService } from '../../../services/product';
import { Alert } from '../../../utils/alert';

const AddToCartButton = ({ data, quantity, productId }) => {
    
    const { updateCartCount } = useNavbarContext();

    const handleAddToCart = async () => {
        try {
            const quantityToSend = Number(quantity);
            const res = await addToCartService(productId, quantityToSend);
            Alert('عملیات موفقیت آمیز بود', 'محصول به سبد خرید اضافه شد!', 'success')
            updateCartCount(res.data.count);
            console.log(res.data.message);
        } catch (error) {
            Alert('خطایی رخ داده است!', error.message, 'error')
            console.error(error.message);
        }
    }

    return (
        <div className='px-10'>
            {
                <button
                    className={`bg-mgreen flex justify-center items-center w-full 
                    text-white py-2 font-medium rounded-lg 
                    ${data.product.available ? 'hover:bg-violet-800' : 'disabled'}`}
                    onClick={handleAddToCart}
                >
                    <span>افزودن به سبد خرید</span>
                    <FaCartPlus className='text-lg ms-3' />
                </button>

            }
            <button className='bg-rose-700 mt-3 flex justify-center items-center w-full py-2
                text-white font-medium rounded-lg hover:bg-violet-800'>
                <span className='mt-1'>سوالی دارید ؟</span>
                <FaQuestionCircle className='text-lg ms-3' />
            </button>

        </div>
    )
}

export default AddToCartButton
