import React, { useEffect, useState } from 'react'
import moment from "jalali-moment";
import { FaRegHeart, FaReply, FaShareAlt, FaRegEye, FaStar, FaCartPlus, FaQuestionCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer';
import SimilarProducts from './carousels/SimilarProducts';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useNavbarContext } from '../../context/NavbarContext';
import ProductComments from './ProductComments';
import swal from 'sweetalert';



const SingleProduct = () => {

    let { productId } = useParams();
    console.log(productId);
    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { setIsSolid, updateCartCount } = useNavbarContext();

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false);
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/products/${productId}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((error) => {
            console.log(error.message);
        })
    }, [productId]);

    const handleAddToCart = async () => {

        try {

            const token = localStorage.getItem('token');
            const quantityToSend = Number(quantity);

            const response = await axios.post('http://localhost:4000/api/cart', {
                productId: productId,
                quantity: quantityToSend 
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            await swal({
                title: "عملیات موفقیت آمیز بود",
                text: "محصول به سبد خرید اضافه شد!",
                icon: "success",
                button: "متوجه شدم",
            });
            
            updateCartCount(response.data.count);
            console.log(response.data.message);

        } catch (error) {

            swal({
                title: "خطایی رخ داده است",
                text: error.response ? error.response.data : error.message,
                icon: "error",
                button: "متوجه شدم",
            });
            console.error(error.response ? error.response.data : error.message);
        }

    }

    const crumbs = [
        { title: 'Home', href: '/' },
        { title: 'محصولات', href: '/products' },
        { title: data ? data.product.title : 'Loading...', href: `/products/${productId}` },
    ];

    return (
        <>
            <Breadcrumbs crumbs={crumbs} />

            {
                !data ? (

                    <h1 className='text-center mt-5 fw-bold'>درحال بارگذاری....!</h1>

                ) : (

                    <div className="pt-5 container single_product">
                        <div className='py-10 grid grid-cols-5 gap-4'>

                            <div className="col-span-5 md:col-span-3 h-fit py-5">
                                <div className='md:flex-row flex-col
                             items-start md:items-center md:px-10 pb-10'>

                                    <div className='mb-3'>
                                        <div className='flex justify-between'>
                                            <h1 className='text-base md:text-xl text-mblack font-bold'>{data.product.title}</h1>
                                            <div className='flex justify-center items-center'>
                                                <FaRegHeart className='text-gray-700 ml-3 md:ml-5 text-base md:text-xl' />
                                                <FaShareAlt className='text-gray-700 ml-3 md:ml-5 text-base md:text-xl' />
                                                <FaReply className='text-gray-700 text-base md:text-xl' />
                                            </div>
                                        </div>
                                        <div className='pt-2 md:pt-5 flex justify-start flex-col lg:flex-row text-xs'>
                                            <div className='flex justify-start items-center py-2'>
                                                <FaRegEye />
                                                <span className='mx-3'>{data.product.views}</span>
                                            </div>
                                            <div className='flex justify-start py-2 items-center'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <div className='flex justify-start py-2 items-center'>
                                                <span className='md:mx-5'>اضافه شده در تاریخ : {
                                                    moment(data.product.createdAt).locale('fa').format('YYYY/MM/DD')
                                                }</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className='md:px-10'>
                                    <span className='text-lg md:text-2xl text-mblack'>توضیحات محصول :</span>
                                    <p className='mt-5 font-medium text-xs md:text-base text-mblack'>
                                        {data.product.content}
                                    </p>
                                </div>
                                <div className='flex justify-between md:flex-row flex-col items-center py-10 px-10'>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        placeholder='تعداد محصول'
                                        min='1'
                                        className='rounded-lg box_shadow mb-5  bg-opacity-50 text-start px-3 text-xs py-2 md:w-[25%]' />

                                    <span className='text-xs mb-5'>در انبار :
                                        {
                                            data.product.available ? (
                                                <span className='font-medium text-green-800'>موجود است</span>
                                            ) : (
                                                <span className='font-medium text-rose-600'>موجود نیست</span>
                                            )
                                        }
                                    </span>

                                    <p className='flex items-center mb-5 '>
                                        <span className='mx-2 font-medium text-xs lg:text-xl'>{data.product.price}</span>
                                        <span className='text-xs'>تومان</span>
                                    </p>
                                </div>


                                <div className="block md:hidden col-span-5 md:col-span-2 my-5 rounded-xl">
                                    <img src={"http://localhost:4000/" + data.product.imageUrl[0]} className='box_shadow hover:shadow-2xl cursor-pointer rounded-xl mb-5' alt="" />
                                    <div className='grid grid-cols-3 gap-4'>
                                        <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl'
                                            src={"http://localhost:4000/" + data.product.imageUrl[1]} alt="" />
                                        <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl'
                                            src={"http://localhost:4000/" + data.product.imageUrl[2]} alt="" />
                                        <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl'
                                            src={"http://localhost:4000/" + data.product.imageUrl[3]} alt="" />
                                    </div>
                                </div>

                                <div className='px-10'>
                                    {

                                        <button
                                            className={`bg-mgreen flex justify-center items-center w-full py-2 text-white font-medium rounded-lg
                                        ${data.product.available ? 'hover:bg-violet-800' : 'opacity-50 cursor-not-allowed'}`}
                                            disabled={!data.product.available}
                                            onClick={handleAddToCart}
                                        >
                                            <span>افزودن به سبد خرید</span>
                                            <FaCartPlus className='text-lg ms-3' />
                                        </button>

                                    }

                                    <button className='bg-rose-700 mt-3 flex justify-center items-center w-full py-2 text-white font-medium
                                 rounded-lg hover:bg-violet-800'>
                                        <span className='mt-1'>سوالی دارید ؟</span>
                                        <FaQuestionCircle className='text-lg ms-3' />
                                    </button>

                                </div>

                                <hr className='border-2 border-gray-300 mt-10 mb-5' />

                                <div className='px-10'>
                                    <h5 className='py-3 text-mgreen'>مشخصات کالا : </h5>
                                    <div className='lg:flex justify-between items-center'>
                                        <p className='font-medium '>ابعاد : <span className='text-gray-600'>{data.product.size}</span></p>
                                        <p className='font-medium '>وزن : <span className='text-gray-600'>{data.product.weight}</span></p>
                                        <p className='font-medium '>کد کالا : <span className='text-gray-600'>{data.product.productCode}</span></p>
                                        <p className='font-medium '>دسته بندی  : <span className='text-gray-600'>{data.product.category}</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block col-span-5 md:col-span-2 rounded-xl">
                                <img src={"http://localhost:4000/" + data.product.imageUrl[0]} className='box_shadow hover:shadow-2xl cursor-pointer rounded-xl mb-5' alt="" />
                                <div className='grid grid-cols-3 gap-4'>
                                    <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src={"http://localhost:4000/" + data.product.imageUrl[1]} alt="" />
                                    <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src={"http://localhost:4000/" + data.product.imageUrl[2]} alt="" />
                                    <img className='col-span-1 box_shadow hover:shadow-2xl cursor-pointer rounded-xl' src={"http://localhost:4000/" + data.product.imageUrl[3]} alt="" />
                                </div>
                            </div>



                        </div>

                        <ProductComments />


                        {/* Similar Carousel */}
                        <SimilarProducts />

                    </div>
                )
            }




            <Footer />
        </>
    )
}

export default SingleProduct
