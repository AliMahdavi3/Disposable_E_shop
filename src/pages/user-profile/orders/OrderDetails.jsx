import React, { useEffect, useState } from 'react'
import { convertDateToJalali } from '../../../utils/convertDate';
import { apiPath } from '../../../services/httpService';
import { getCheckoutService } from '../../../services/cart';
import { Alert } from '../../../utils/sweetalert2';

const OrderDetails = ({ orderId }) => {

    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const res = await getCheckoutService(orderId);
                if (res.status === 200) {
                    setOrderDetails(res.data.order);
                }
            } catch (error) {
                console.log(error);
                Alert("خطایی رخ داده است!", error.message, "error");
            }
        };
        fetchOrderDetails();
    }, [orderId]);


    return (
         <div className='my-5'>
            {orderDetails ? (
                <div className='border-2 rounded-lg p-4 text-gray-500'>
                    <h2 className='text-mgreen mb-2'>سفارش شناسه: {orderDetails.id}</h2>
                    <p className='mb-2'>قیمت کل: {orderDetails.totalPrice} تومان</p>
                    <p className='mb-2'>تاریخ ثبت: {convertDateToJalali(orderDetails.createdAt)}</p>
                    <p className='mb-2'>آدرس ارسال: {orderDetails.shippingAddress}</p>
                    <p className='mb-2'>
                        توضیحات اضافی: {orderDetails.additionalComment || 'ندارد'}
                    </p>
                    <p className='mb-2'>
                        وضعیت:{' '}
                        {orderDetails.status === 'Paid' ? (
                            <span className='text-teal-600'>پرداخت شده!</span>
                        ) : (
                            <span className='text-amber-500'>در انتظار پرداخت!</span>
                        )}
                    </p>

                    <hr className='border my-5' />
                    <h3>محصولات سفارش</h3>

                    <div className='flex overflow-x-auto pb-2 space-x-2'>
                        {orderDetails.items.map((item, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0 border rounded-lg p-3 w-64'
                            >
                                <img
                                    src={`${apiPath}/${item.product.imageUrl[0]}`}
                                    alt={item.product.title}
                                    className='w-full h-40 object-cover mb-2 rounded-lg'
                                />
                                <h4 className='text-sm text-gray-700 mb-2'>
                                    {item.product.title}
                                </h4>
                                <p className='text-xs text-gray-500'>قیمت: {item.product.price} تومان</p>
                                <p className='text-xs text-gray-500'>تعداد: {item.quantity}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center'>
                    <p className='text-3xl text-amber-400'>سفارشی یافت نشد!</p>
                </div>
            )}
        </div>
    )
}

export default OrderDetails
