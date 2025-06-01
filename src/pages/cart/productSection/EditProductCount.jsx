import React, { useState } from 'react'
import ModalContainer from '../../../components/ModalContainer'
import { updateCartItemQuantityService } from '../../../services/cart';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Alert } from '../../../utils/sweetalert2';

const EditProductCount = ({ open, setOpen, currentItem, setCartItems, handleFetchedCartItems }) => {

    const [quantity, setQuantity] = useState(1);

    const handleUpdateCartItemQuantity = async (productId, quantity) => {
        try {
            const res = await updateCartItemQuantityService(productId, { quantity: quantity });
            if (res.status === 200) {
                Alert('عملیات موفقیت آمیز بود', 'تعداد محصول بروزرسانی شد', 'success');
                setCartItems(res.data.cart);
            }
        } catch (error) {
            Alert('خطایی رخ داده است!', error.message, 'error');
            console.log(error);
        }
    }

    const handleOnSave = async (e) => {
        e.preventDefault();
        await handleUpdateCartItemQuantity(currentItem.product._id, quantity);
        handleFetchedCartItems();
        setOpen(false);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <>
            {open && currentItem && (
                <ModalContainer
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <div className="flex items-center justify-center my-5">
                        <button
                            className="bg-white text-amber-500 p-2 rounded-md
                            border-2 border-amber-500"
                            onClick={decreaseQuantity}
                        >
                            <FaMinus />
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleInputChange}
                            className="w-full py-1 text-center rounded text-amber-500 
                            border-y-2 border-amber-500"
                        />
                        <button
                            className="bg-white text-amber-500 p-2 rounded-md
                            border-2 border-amber-500"
                            onClick={increaseQuantity}
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <div className='flex justify-end items-center'>
                        <button
                            className='bg-rose-600 text-white text-xs md:text-sm
                            py-2 px-3 rounded-md'
                            onClick={() => setOpen(false)}>
                            انصراف
                        </button>
                        <button
                            className='bg-mgreen text-white text-xs md:text-sm
                            py-2 px-3 rounded-md ms-4'
                            onClick={handleOnSave}>
                            ذخیره
                        </button>
                    </div>
                </ModalContainer>
            )}
        </>
    )
}

export default EditProductCount
