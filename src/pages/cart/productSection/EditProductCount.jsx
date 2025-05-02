import React, { useState } from 'react'
import ModalContainer from '../../../components/ModalContainer'
import { updateCartItemQuantityService } from '../../../services/cart';
import { Alert } from '../../../utils/alert';

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

    return (
        <>
            {open && currentItem && (
                <ModalContainer
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <form className="container w-full">
                        <h2 className='text-center mb-5'>ویرایش تعداد محصول</h2>
                        <div className='w-full'>
                            <input
                                className='w-full py-2 rounded-md border-2 px-4'
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className='flex justify-end items-center mt-3'>
                            <button
                                className='bg-rose-600 text-white py-2 px-3 rounded-md'
                                onClick={() => setOpen(false)}>
                                انصراف
                            </button>
                            <button
                                className='bg-mgreen text-white py-2 px-3 rounded-md ms-4'
                                onClick={handleOnSave}>
                                ذخیره
                            </button>
                        </div>
                    </form>
                </ModalContainer>
            )}
        </>
    )
}

export default EditProductCount
