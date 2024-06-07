import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import swal from 'sweetalert';
import Modal from '../../components/Modal';
import { useNavbarContext } from '../../context/NavbarContext';

const ProductsList = () => {

    const [cartItems, setCartItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [discountCode, setDiscountCode] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [additionalComment, setAdditionalComment] = useState('');
    const { updateCartCount } = useNavbarContext();

    useEffect(() => {
        fetchedCartItems()
    }, [])

    const fetchedCartItems = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:4000/api/cart', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCartItems(response.data.cart);
            console.log(response.data.cart);
        } catch (error) {
            console.error('There was an error fetching the cart items:', error);
        }
    }

    const updateCartItemQuantity = async (productId, quantity) => {
        try {

            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:4000/api/cart/${productId}`, {
                quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const updatedItems = response.data;
            const updatedCartItems = cartItems.map((item) => {
                if (item.product._id === productId) {
                    return { ...item, quantity: updatedItems.quantity }
                }
                return item;
            });
            setCartItems(updatedCartItems);
            swal({
                title: "عملیات موفقیت آمیز بود",
                text: "تعداد محصول به‌روزرسانی شد!",
                icon: "success",
                button: "متوجه شدم",
            });

        } catch (error) {
            swal({
                title: "خطایی رخ داده است",
                text: error.response.data.message || error.message,
                icon: "error",
                button: "متوجه شدم",
            });
        }
    }

    const onSave = async (e, productId, quantity) => {
        e.preventDefault();
        await updateCartItemQuantity(productId, quantity);
        setOpen(false); // Close the modal after saving
        fetchedCartItems()
    }

    const deleteItemFromCart = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:4000/api/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const updatedCartItems = cartItems.filter((item) => (
                item.product._id !== productId
            ));
            setCartItems(updatedCartItems);
            await swal({
                title: "عملیات موفقیت آمیز بود",
                text: "محصول از سبد حذف شد!",
                icon: "success",
                button: "متوجه شدم",
            });

            // Update the cart count
            const newCartCount = updatedCartItems.length;
            updateCartCount(newCartCount);

        } catch (error) {
            swal({
                title: "خطایی رخ داده است",
                text: error,
                icon: "error",
                button: "متوجه شدم",
            });
        }
    }


    const calculateTotals = (items) => {
        let newTotal = 0;
        let totalQuantity = 0;
        items.forEach(item => {
            const price = item.product.price;
            const quantity = parseInt(item.quantity, 10);
            if (!isNaN(price) && !isNaN(quantity)) {
                newTotal += price * quantity;
                totalQuantity += quantity;
            }
        });
        return { newTotal, totalQuantity };
    }

    const { newTotal, totalQuantity } = calculateTotals(cartItems);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('fa-IR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    }

    const handleApplyDiscount = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:4000/api/apply-discount', {
                code: discountCode.trim(), // Trim whitespace
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Adjusted to match the backend response
            if (response.data.message === 'Discount applied successfully') {
                if (response.data.discountAmount > 0) {
                    setTotalPrice(response.data.newTotal);
                    swal({
                        title: "عملیات موفقیت آمیز بود",
                        text: "تخفیف اعمال شد!",
                        icon: "success",
                        button: "متوجه شدم",
                    });
                } else {
                    // Handle the case where no discount is applied
                    swal({
                        title: "Notice",
                        text: "No discount could be applied.",
                        icon: "info",
                        button: "OK",
                    });
                    return;
                }
            }
        } catch (error) {
            // Handle other errors
            swal({
                title: "Error",
                text: error.response?.data?.message || error.message || 'An unexpected error occurred',
                icon: "error",
                button: "OK",
            });
        }
    }

    return (
        <>
            <div dir='ltr' className="grid grid-cols-3 gap-4">

                {open && currentItem && (
                    <Modal
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
                                <button className='bg-rose-600 text-white py-2 px-3 rounded-md'
                                    onClick={() => setOpen(false)}>انصراف</button>
                                <button className='bg-mgreen text-white py-2 px-3 rounded-md ms-4'
                                    onClick={(e) => onSave(e, currentItem.product._id, quantity)}>ذخیره</button>
                            </div>
                        </form>
                    </Modal>
                )}

                <div className="col-span-3 md:col-span-2 w-full h-fit">

                    <div className='md:px-10 pb-3'>
                        <ul className='flex justify-between items-center'>
                            <li>محصول</li>
                            <li className='md:ms-16'>نام</li>
                            <li className='md:ms-16'>قیمت</li>
                            <li className='md:ms-16'>تعداد</li>
                            <li>ویرایش</li>
                        </ul>
                    </div>

                    <hr className="border-2 border-gray-500" />

                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className='flex justify-between items-center mt-5
                        rounded-xl border-2 border-gray-300 py-5 px-5'>
                                <img className='w-[15%] md:w-[10%] rounded-lg border-2' src={'http://localhost:4000/' + item.product.imageUrl[0]} alt="" />
                                <span>{item.product.title}</span>
                                <p className='text-xs md:text-base font-medium text-gray-700'>{item.product.price}</p>
                                <p className='text-center'>{item.quantity}</p>
                                <div className='md:me-8 flex items-center'>
                                    <FaTrashAlt onClick={() => deleteItemFromCart(item.product._id)} className='text-red-600 cursor-pointer' />
                                    <FaEdit
                                        onClick={() => {
                                            setCurrentItem(item);
                                            setOpen(true);
                                        }}
                                        className='text-yellow-600 cursor-pointer ms-2' />
                                </div>

                            </div>
                        ))
                    ) : (
                        <h1 className='text-center pt-10 font-medium text-pink-600'>!هنوز محصولی به سبد خرید خود اضافه نکرده اید</h1>
                    )}

                </div>

                <div className="col-span-3 md:col-span-1">
                    <div className='py-10 px-5 lg:px-10 rounded-2xl border-2 border-gray-300 w-full h-fit'>

                        <div className='flex justify-between items-center font-medium text-gray-700'>
                            <p className='flex'><span className='me-1 text-xs lg:text-base'>{formatPrice(newTotal)}</span>
                                <span className='text-xs lg:text-sm'>تومان</span></p>
                            <p className='text-xs lg:text-base'>جمع کل محصولات</p>
                        </div>

                        <div className='mt-3 flex justify-between items-center font-medium text-gray-700'>
                            <p className='flex'>
                                <span className='me-1 text-xs lg:text-base'>{totalQuantity}</span>
                            </p>
                            <p className='text-xs lg:text-base'>تعداد کل محصولات</p>
                        </div>

                        <hr className="border-2 border-gray-600 mt-3" />



                        <div className='mt-3 flex justify-between items-center font-medium text-gray-700'>
                            <p className='flex'>
                                <span className='me-1 text-xs lg:text-base'>{formatPrice(totalPrice > 0 ? totalPrice : newTotal)}</span>
                                <span className='text-xs lg:text-sm'>تومان</span>
                            </p>
                            <p className='text-xs lg:text-base'>جمع مبلغ کل</p>
                        </div>

                        <div>
                            <p className='pb-10 pt-10 text-xl text-center font-semibold text-yellow-400'>اعمال کد تخفیف</p>

                            {/* discount field */}
                            <div className='w-full text-end mt-3'>
                                <label htmlFor="" className='text-sm md:text-base font-medium text-gray-700'>آیا کد تخفیفی دارید ؟</label>
                                <div className='flex items-center'>
                                    <button
                                        className='mt-3 py-2 text-xs md:text-base bg-mgreen text-white px-3 rounded-lg me-1'
                                        onClick={handleApplyDiscount}
                                    >
                                        تایید
                                    </button>
                                    <input
                                        type="text"
                                        className='mt-3 py-2 text-xs md:text-base w-full border-2 rounded-lg text-end px-2'
                                        placeholder='کد تخفیف خود را وارد کنید'
                                        value={discountCode}
                                        onChange={(e) => setDiscountCode(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='mt-3 flex justify-between items-center font-medium text-gray-700'>
                                <p className='flex items-center'>
                                    <span className='me-1 text-xs lg:text-base'>{formatPrice(totalPrice)}</span>
                                    <span className='text-xs lg:text-sm'>تومان</span>
                                </p>
                                <p className='text-xs lg:text-base'>جمع مبلغ کل با تخفیف</p>
                            </div>
                        </div>
                    </div>

                    <div className='pt-3'>
                        <button className='font-bold hover:bg-violet-700 w-full
                         py-3 bg-mgreen text-white text_shadow rounded-xl text-xl'>ادامه خرید</button>
                    </div>

                    <div className='text-center mt-5'>
                        <a className='pt-5 text-blue-700 font-bold' href='/'>شرایط و قوانین</a>
                    </div>

                </div>
            </div>

            <hr className="border-2 border-mblack my-5" />
            <div>
                <p className='text-sm flex items-center text-mblack md:text-base'>
                    <span>توضیحات اضافه</span>
                    <span className='text-xs ms-2'>(اختیاری)</span>
                </p>
                <textarea
                    name=""
                    value={additionalComment}
                    onChange={(e) => setAdditionalComment(e.target.value)}
                    className='w-full rounded-2xl bg-[#DAF3EA] px-5 py-3 mt-3'
                    placeholder='شما میتونید هر توضیحی که در مورد سفارش خود دارید رو در این قسمت وارد کنید'
                    id="" cols="30" rows="5"></textarea>
            </div>

        </>
    )
}

export default ProductsList
