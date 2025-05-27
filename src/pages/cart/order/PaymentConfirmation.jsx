import React, { useEffect, useRef, useState } from 'react'
import useSolidNavbar from '../../../hooks/useSolidNavbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Alert } from '../../../utils/alert';
import { getPaymentConfirmationService } from '../../../services/cart';
import SpinnerLoad from '../../../components/SpinnerLoad';
import { FaCheck, FaRedoAlt, FaTimes } from "react-icons/fa";

const PaymentConfirmation = () => {
    const [searchParams] = useSearchParams();
    const isRequestSent = useRef(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useSolidNavbar(true);

    useEffect(() => {
        const handlePaymentConfirmation = async () => {
            if (isRequestSent.current) {
                return;
            }
            isRequestSent.current = true;

            try {
                const Authority = searchParams.get('Authority');
                const Status = searchParams.get('Status');

                if (!Authority || !Status) {
                    Alert('خطا', 'پارامترهای پرداخت ناقص است!', 'error');
                    setLoading(false);
                    return;
                }

                const res = await getPaymentConfirmationService({ Authority, Status });
                if (res.status === 200) {
                    console.log('Response data:', res.data);
                    setPaymentStatus(res.data.status);
                    setOrderDetails(res.data.order);

                    if (res.data.status === 100) {
                        Alert('موفقیت!', 'پرداخت شما تایید شد!', 'success');
                    } else if (res.data.status === 101) {
                        Alert('موفقیت!', 'پرداخت شما قبلاً تایید شده است!', 'success');
                    } else {
                        Alert('خطا', res.data.message, 'error');
                    }
                } else {
                    setPaymentStatus('failed');
                    Alert('خطا', res.data.message, 'error');
                }

            } catch (error) {
                console.log(error);
                setPaymentStatus('failed');
                Alert('خطایی رخ داده!', error.message, 'error');
            } finally {
                setLoading(false);
            }
        }
        handlePaymentConfirmation();
    }, [searchParams]);

    const DetailItem = ({ label, value }) => (
        <p className='pb-1'>
            <strong className='font-medium text-violet-500'>{label} : </strong>
            <span className='text-gray-500'>{value}</span>
        </p>
    );

    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <>
            {
                loading ? (
                    <div className='h-screen flex justify-center items-center'>
                        <SpinnerLoad />
                    </div>
                ) : (
                    <div className="container pt-24 flex justify-center items-center">
                        {paymentStatus === 100 ? (
                            <div className="border-2 py-10 px-10 rounded-xl border-gray-300">
                                <div className='pb-5 flex flex-col justify-center items-center'>
                                    <h2 className="text-2xl font-semibold text-gray-500 mb-3">
                                        پرداخت موفق
                                    </h2>
                                    <FaCheck className='text-6xl p-3 border rounded-full
                                    bg-teal-500 text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className="mt-2 text-gray-500 mb-4">پرداخت شما تایید شد!</p>
                                    {orderDetails ? (
                                        <div>
                                            <DetailItem label='شناسه سفارش' value={orderDetails.id} />
                                            <DetailItem label='قیمت کل' value={orderDetails.formattedDiscountedPrice} />
                                            <DetailItem label="شناسه پرداخت" value={orderDetails.refId} />
                                            <DetailItem label="شماره کارت" value={orderDetails.cardPan} />
                                            <DetailItem label="هزینه تراکنش" value={`${orderDetails.fee / 1000} تومان`} />
                                        </div>
                                    ) : (
                                        <p>اطلاعات سفارش موجود نیست.</p>
                                    )}
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <DetailItem label='وضعیت سفارش' value={paymentStatus} />
                                    <button
                                        className="mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleRedirect('/profile')}
                                    >
                                        مشاهده تاریخچه سفارشات
                                    </button>
                                </div>
                            </div>
                        ) : paymentStatus === 101 ? (
                            <div className="border-2 py-10 px-10 rounded-xl border-gray-300">
                                <div className='pb-5 flex flex-col justify-center items-center'>
                                    <h2 className="text-xl text-gray-500 font-semibold mb-3">
                                        پرداخت شما قبلاً تایید شده است!
                                    </h2>
                                    <FaCheck className='text-6xl p-3 border 
                                        rounded-full bg-teal-500 text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className="py-2 font-semibold text-gray-500 mb-4">
                                        جزئیات شفارش
                                    </p>
                                    {orderDetails ? (
                                        <div>
                                            <DetailItem label='شناسه سفارش' value={orderDetails.id} />
                                            <DetailItem label='قیمت کل' value={orderDetails.formattedDiscountedPrice} />
                                            <DetailItem label="شناسه پرداخت" value={orderDetails.refId} />
                                            <DetailItem label="شماره کارت" value={orderDetails.cardPan} />
                                            <DetailItem label="هزینه تراکنش" value={`${orderDetails.fee / 1000} تومان`} />
                                        </div>
                                    ) : (
                                        <p>اطلاعات سفارش موجود نیست.</p>
                                    )}
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <DetailItem label='وضعیت سفارش' value={paymentStatus} />
                                    <button
                                        className="mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleRedirect('/profile')}
                                    >
                                        مشاهده تاریخچه سفارشات
                                    </button>
                                </div>
                            </div>
                        ) : paymentStatus === 'failed' ? (
                            <div className='border-2 py-10 px-10 rounded-xl border-gray-300'>
                                <div className='pb-5 text-gray-500 flex flex-col justify-center items-center'>
                                    <h2 className="text-xl font-bold mb-4">پرداخت ناموفق!</h2>
                                    <p className='pb-5 pt-3 text-xs md:text-sm'>
                                        پرداخت شما با مشکل مواجه شده است. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
                                    </p>
                                    <FaTimes className='text-6xl p-3 border rounded-full bg-rose-500 text-white' />
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <button
                                        className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleRedirect('/support')}
                                    >
                                        تماس با پشتیبانی
                                    </button>
                                    <button
                                        className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleRedirect('/profile')}
                                    >
                                        تلاش مجدد
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='border-2 py-10 px-10 rounded-xl border-gray-300'>
                                <div className='pb-5 text-gray-500 flex flex-col justify-center items-center'>
                                    <h2 className="text-xl font-bold mb-4">در حال پردازش...</h2>
                                    <p className='pb-5 pt-3 text-xs md:text-sm'>
                                        لطفاً منتظر بمانید تا وضعیت پرداخت بررسی شود.
                                    </p>
                                    <FaRedoAlt className='text-7xl p-3 border rounded-full bg-violet-500 text-white' />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button
                                        className="mt-4 bg-violet-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleRedirect('/')}
                                    >
                                        بازگشت به صفحه اصلی
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
        </>
    )
}

export default PaymentConfirmation
