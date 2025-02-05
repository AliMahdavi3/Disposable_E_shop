import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import UserInfo from './UserInfo';
import Footer from '../../components/Footer';
import useSolidNavbar from '../../hooks/useSolidNavbar';

const CheckOut = () => {

  const [order, setOrder] = useState(null);
  let { orderId } = useParams();
  useSolidNavbar(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/order/${orderId}`);
        setOrder(response.data.order);
        console.log(response.data.order);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchOrder();
  }, [orderId]);

  const totalQuantity = order?.cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;

  const handlePayment = async () => {

    try {

      const token = localStorage.getItem('token') || '';

      const paymentResponse = await axios.get(`http://localhost:4000/api/PaymentRequest/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (paymentResponse.data && paymentResponse.data.paymentUrl) {
        window.location.href = paymentResponse.data.paymentUrl;
      } else {
        swal({
          title: "خطایی رخ داده است",
          text: 'Error", "Failed to initiate payment process. Please try again.", "error',
          icon: "error",
          button: "متوجه شدم",
        });
      }

    } catch (error) {
      swal({
        title: "خطایی رخ داده است",
        text: error,
        icon: "error",
        button: "متوجه شدم",
      });
      console.error('Payment initiation error:', error.response || error.message);
    }

  }

  return (
    <>
      <div className='container pb-10 pt-16'>
        {/* Display order details */}
        {order && (
          <>
            <h1 className="md:text-3xl text-center font-bold text-mgreen py-10">سفارش شما</h1>
            <div className="grid grid-cols-3 gap-4 relative">
              <div className="col-span-3 md:col-span-2 w-full overflow-y-scroll h-[300px] checkout">
                <div className='md:px-10 pb-2'>
                  <ul className='flex justify-between items-center'>
                    <li>محصول</li>
                    <li>نام</li>
                    <li>قیمت</li>
                    <li>تعداد</li>
                  </ul>
                </div>

                <hr className="border-2 border-gray-500 mb-2" />

                {order.cart.items.map((item, index) => (
                  <div key={index} className='flex justify-between items-center mb-5 rounded-xl border-2 border-gray-300 py-2 md:ps-5 md:pe-14'>
                    <img className='w-[15%] md:w-[10%] rounded-lg border-2' src={'http://localhost:4000/' + item.product.imageUrl[0]} alt="product" />
                    <p>{item.product.title}</p>
                    <p className='text-xs md:text-base font-medium text-gray-700'>{item.product.price}</p>
                    <p className='text-center'>{item.quantity}</p>
                  </div>
                ))}
              </div>
              {/* Display total and other order info */}
              <div className="col-span-3 md:col-span-1">
                <div className='py-10 px-5 lg:px-10 rounded-2xl border-2 border-gray-300 w-full h-fit'>
                  {/* Display total amount, quantity, etc. */}

                  <div className='flex justify-between items-center font-medium text-gray-700'>
                    <p className='text-xs lg:text-base'>جمع کل مبلغ</p>
                    <p className='flex items-center'>
                      <span className='text-xs me-2 lg:text-sm'>تومان</span>
                      <span className='me-1 text-xs lg:text-base'>{order.total}</span>
                    </p>
                  </div>

                  <div className='pt-3 flex justify-between items-center font-medium text-gray-700'>
                    <p className='text-xs lg:text-base'>تعداد محصولات</p>
                    <p className='flex'>
                      <span className='me-1 text-xs lg:text-base'>{totalQuantity}</span>
                    </p>
                  </div>

                  <hr className="border-gray-500 my-2" />

                  <div className='mt-5 flex justify-between items-center font-medium text-gray-700'>
                    <p className='text-xs lg:text-base'>مبلغ نهایی</p>
                    <p className='flex items-center'>
                      <span className='text-xs me-2 lg:text-sm'>تومان</span>
                      <span className='me-1 text-xs lg:text-base'>{order.discount.amount}</span>
                    </p>
                  </div>

                  {/* Display other order info */}
                </div>
                <div className='pt-3'>
                  <button onClick={handlePayment} className='font-bold hover:bg-violet-700 w-full py-3
                   bg-mgreen text-white text_shadow rounded-xl text-xl'>پرداخت</button>
                </div>
                <div className='text-center mt-5'>
                  <a className='pt-5 text-blue-700 font-bold' href='/'>شرایط و قوانین</a>
                </div>
              </div>
            </div>
          </>
        )}
        <hr className="border-2 border-mblack my-5" />
        {/* Display user info */}
        <UserInfo />
        <hr className="border-2 border-mblack my-5" />
        {/* Additional description */}
        <div>
          <p className='text-sm flex pb-3 items-center font-semibold text-mgreen md:text-lg'>توضیحات اضافه</p>
          <p className='text-sm md:text-base text-gray-700'>{order && order.additionalComment}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CheckOut
