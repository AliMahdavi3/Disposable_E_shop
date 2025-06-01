import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCheckoutService, getPaymentRequestService } from '../../../services/cart';
import SpinnerLoad from '../../../components/SpinnerLoad';
import useSolidNavbar from '../../../hooks/useSolidNavbar';
import { apiPath } from '../../../services/httpService';
import { convertDateToJalali } from '../../../utils/convertDate';
import { Alert } from '../../../utils/sweetalert2';


const Checkout = () => {

    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    useSolidNavbar(true);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            setLoading(true);
            try {
                const res = await getCheckoutService(orderId);
                if (res.status === 200) {
                    setOrderDetails(res.data.order);
                }
            } catch (error) {
                Alert('خطا', 'مشکلی در دریافت اطلاعات سفارش وجود دارد!', 'error');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrderDetails();
    }, [orderId]);

    const handlePaymentRequest = async () => {
        try {
            const res = await getPaymentRequestService(orderId);
            if (res.status === 200) {
                const paymentUrl = res.data.paymentUrl;
                window.location.href = paymentUrl;
            }
        } catch (error) {
            Alert('خطا', 'مشکلی در ایجاد درخواست پرداخت وجود دارد!', 'error');
            console.error(error);
        }
    }

    const DetailItem = ({ label, value }) => (
        <p className='py-1'>
            <strong className='font-medium text-violet-500'>{label} : </strong>
            <span className='text-gray-500'>{value}</span>
        </p>
    );

    return (
        <>
            {
                loading ? (
                    <div className="h-screen flex justify-center items-center">
                        <SpinnerLoad />
                    </div>
                ) : (
                    <>
                        {
                            orderDetails ? (
                                <div className="container pb-12 pt-24">
                                    <div className="border-2 border-gray-300 rounded-lg p-5">
                                        <h2 className="text-gray-500 font-medium mb-3">
                                            اطلاعات سفارش
                                        </h2>
                                        <div className='text-gray-500'>
                                            <DetailItem label='شناسه سفارش'
                                                value={orderDetails?.id} />
                                            <DetailItem label='تاریخ ثبت سفارش'
                                                value={convertDateToJalali(orderDetails?.createdAt)} />
                                            <DetailItem label='وضعیت سفارش'
                                                value={orderDetails?.status} />
                                            <DetailItem label='آدرس سفارش'
                                                value={orderDetails?.shippingAddress} />
                                            {orderDetails?.additionalComment ? (
                                                <DetailItem label="توضیحات اضافه"
                                                    value={orderDetails?.additionalComment} />
                                            ) : (
                                                <p>
                                                    هیچ توضیحی برای این سفارش وجود ندارد!
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="border-2 border-gray-300 rounded-lg p-5 mt-5">
                                        <h2 className="text-gray-500 font-medium mb-3">
                                            جزئیات محصولات
                                        </h2>
                                        {orderDetails.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center
                                                border-b-2 py-2"
                                            >
                                                <img
                                                    src={`${apiPath}/${item.product.imageUrl[0]}`}
                                                    alt={item.product.title}
                                                    className="w-16 h-16 rounded-lg border-2"
                                                />
                                                <p className="text-gray-500 mb-1">
                                                    {item.product.title}
                                                </p>
                                                <p className="text-gray-500">تعداد:
                                                    {item.quantity}
                                                </p>
                                                <p className="text-gray-500">قیمت:
                                                    {item.product.price} تومان
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-2 border-gray-300 rounded-lg p-5 mt-5">
                                        <h2 className="text-gray-500  font-medium mb-3">
                                            جمع کل
                                        </h2>
                                        <DetailItem label="تعداد کل محصولات"
                                            value={orderDetails?.totalQuantity} />
                                        <div className='text-xl mt-2'>
                                            <DetailItem label="مبلغ قابل پرداخت به تومان"
                                                value={orderDetails?.formattedDiscountedPrice || orderDetails?.formattedPrice} />
                                        </div>
                                    </div>

                                    <div className="w-full my-5">
                                        <button
                                            className="bg-mgreen text-white w-full
                                            font-medium py-4 px-4 rounded-lg hover:bg-violet-600"
                                            onClick={handlePaymentRequest}
                                        >
                                            پرداخت
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-screen flex justify-center items-center">
                                    <p>اطلاعات سفارش پیدا نشد!</p>
                                </div>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default Checkout
