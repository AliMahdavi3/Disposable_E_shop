import React, { useEffect, useState } from 'react'
import { getUserOrdersService } from '../../../services/cart';
import { convertDateToJalali } from '../../../utils/convertDate';
import { apiPath } from '../../../services/httpService';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../../utils/sweetalert2';

const OrdersHistory = ({ handleViewDetails }) => {
    const [userOrders, setUserOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const handleFetchUserOrders = async () => {
            try {
                const res = await getUserOrdersService();
                if (res.status === 200) {
                    setUserOrders(res.data.orders);
                }
            } catch (error) {
                console.log(error);
                Alert("خطایی رخ داده است!", error.message, "error")
            }
        }
        handleFetchUserOrders();
    }, []);

    const handleGoToCheckout = (o) => {
        navigate(`/checkout/${o._id}`)
        return;
    }


    return (
        <div className='my-5'>
            {
                Array.isArray(userOrders) && userOrders.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {userOrders.map((o) => (
                            <div key={o._id} className='font-medium text-xs
                                border-2 rounded-lg p-4 text-gray-500'>
                                <h2 className='text-mgreen mb-2'>
                                    سفارش شناسه: {o._id}
                                </h2>
                                <p className='mb-2'>
                                    قیمت کل: {o.totalPrice} تومان
                                </p>
                                <p className='mb-2'>
                                    تاریخ ثبت: {convertDateToJalali(o.createdAt)}
                                </p>

                                <hr className='border my-5' />
                                <h3 className=''>
                                    محصولات
                                </h3>
                                <div className='flex overflow-x-auto pb-2 space-x-2 scrollbar_hidden'>
                                    {o.items.map((item) => (
                                        <div key={item._id} className='flex-shrink-0'>
                                            <img
                                                src={`${apiPath}/${item.product.imageUrl[0]}`}
                                                alt={item.product.title}
                                                className='w-20 h-20'
                                            />
                                        </div>
                                    ))}
                                </div>
                                <hr className='border my-5' />

                                <div className='flex justify-between items-center'>
                                    <p className=''><span>وضعیت : </span>
                                        {o.status === 'Paid' ? (
                                            <span className='text-teal-600'>
                                                پرداخت شده!
                                            </span>
                                        ) : (
                                            <span className='text-amber-500'>
                                                در انتظار پرداخت!
                                            </span>
                                        )}
                                    </p>
                                    {
                                        o.status === 'Pending' ? (
                                            <button
                                                className='bg-mgreen text-white rounded-md 
                                                    px-4 py-2 text-xs'
                                                onClick={()=>handleGoToCheckout(o)}
                                            >
                                                پرداخت
                                            </button>
                                        ) : (
                                            <button
                                                className='bg-amber-500 text-white rounded-md 
                                                    px-4 py-2 text-xs'
                                                onClick={() => handleViewDetails(o._id)}
                                            >
                                                جزئیات بیشتر...
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='my-10 flex flex-col justify-center items-center'>
                        <img
                            className='w-[30%] h-[30%] border-4 rounded-full'
                            src="/assets/images/profile/user2.png"
                            alt=""
                        />
                        <h1 className='text-center pt-5 text-xs md:text-xl font-medium
                        text-gray-400'>
                            هنوز هیچ سفارشی ایجاد نکرده اید!
                        </h1>
                    </div>
                )
            }
        </div>
    )
}

export default OrdersHistory
