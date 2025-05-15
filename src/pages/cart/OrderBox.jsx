import React from 'react'
import DiscountSection from './actions/DiscountSection';
import SubmitOrderButton from './order/SubmitOrderButton';
import { Alert } from '../../utils/alert';
import { createOrderService } from '../../services/cart';
import { useNavigate } from 'react-router-dom';

const OrderBox = ({ cartItems, shippingAddress, additionalComment }) => {

    const totalAmount = cartItems && cartItems.cart && cartItems.cart.length > 0 ? cartItems.formattedPrice : '0 تومان';
    const totalQuantity = cartItems && cartItems.cart && cartItems.cart.length > 0 ? cartItems.totalQuantity : '0';
    const totalPrice = cartItems && cartItems.cart && cartItems.cart.length > 0 ? cartItems.formattedPrice : '0 تومان';
    const navigate = useNavigate();

    const handleCreateOrder = async () => {
        try {
            if (!cartItems.cart || cartItems.cart.length === 0) {
                Alert('خطا', 'سبد خرید شما خالی است!', 'warning');
                return;
            }
            if (!shippingAddress || shippingAddress.trim() === '') {
                Alert('خطا', 'لطفا آدرس خود را وارد کنید!', 'warning');
                return;
            }
            const res = await createOrderService({ shippingAddress, additionalComment, });
            if (res.status === 201) {
                await Alert('سفارش ثبت شد!', 'سفارش شما با موفقیت ثبت شد!', 'success');
                const orderId = res.data.order._id;
                navigate(`/checkout/${orderId}`)
            }
        } catch (error) {
            Alert('خطا', 'مشکلی در ثبت سفارش وجود دارد.', 'error');
            console.error(error);
        }
    }

    return (
        <>
            <div className='py-5 px-5 lg:px-10 rounded-lg border-2 border-gray-300 w-full h-fit'>
                <div className='flex justify-between items-center font-medium text-gray-500'>
                    <p className='flex'>
                        <span className='me-1 text-xs lg:text-sm'>
                            {totalAmount}
                        </span>
                        <span className='text-xs lg:text-sm'>تومان</span>
                    </p>
                    <p className='text-xs lg:text-sm'>جمع کل محصولات</p>
                </div>

                <div className='mt-3 flex justify-between items-center 
                    font-medium text-gray-500'>
                    <p className='flex'>
                        <span className='me-1 text-xs lg:text-sm'>
                            {totalQuantity}
                        </span>
                    </p>
                    <p className='text-xs lg:text-sm'>تعداد کل محصولات</p>
                </div>

                <hr className="border border-gray-400 rounded-full mt-3" />

                <div className='mt-3 flex justify-between items-center 
                    font-medium text-gray-500'>
                    <p className='flex'>
                        <span className='me-1 text-xs lg:text-sm'>
                            {totalPrice}
                        </span>
                        <span className='text-xs lg:text-sm'>تومان</span>
                    </p>
                    <p className='text-xs lg:text-sm'>جمع مبلغ کل</p>
                </div>
                <DiscountSection />
            </div>
            <SubmitOrderButton handleCreateOrder={handleCreateOrder} />
        </>
    )
}

export default OrderBox
