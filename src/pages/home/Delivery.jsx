import React from 'react'
import { FaShippingFast, FaDollarSign, FaMapMarkedAlt, FaShoppingBag, FaBusinessTime, FaMoneyBillAlt } from "react-icons/fa";


const Delivery = () => {

    const servicesItems = [
        {
            icon: <FaShippingFast className='text-3xl md:text-4xl' />,
            className: "bg-[#7ac97d]",
            title: "حمل و نقل",
            content: ""
        },
        {
            icon: <FaDollarSign className='text-3xl md:text-4xl' />,
            className: "bg-white box_shadow",
            title: "خرید آنلاین",
            content: ""
        },
        {
            icon: <FaMapMarkedAlt className='text-3xl md:text-4xl' />,
            className: "bg-[#7ac97d]",
            title: "ارسال به کل کشور",
            content: ""
        },
        {
            icon: <FaShoppingBag className='text-3xl md:text-4xl' />,
            className: "bg-white box_shadow",
            title: "پیگیری سفارش",
            content: ""
        },
        {
            icon: <FaBusinessTime className='text-3xl md:text-4xl' />,
            className: "bg-[#7ac97d]",
            title: "مرجوع کالا",
            content: ""
        },
        {
            icon: <FaMoneyBillAlt className='text-3xl md:text-4xl' />,
            className: "bg-white box_shadow",
            title: "برگشت سرمایه",
            content: ""
        },
    ]

    return (
        <div className='py-5 md:py-10'>
            <div className='container'>
                <div className='pb-10 flex w-full justify-center items-center'>
                    <hr className='w-3/12 md:w-11/12' />
                    <p className='text-gray-500 font-medium 
                        md:text-base text-xs text-center mx-3 w-full'>
                        خدماتی که فروشگاه ما ارائه میدهد
                    </p>
                    <hr className='w-3/12 md:w-11/12' />
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        servicesItems.map((i, index) => (
                            <div key={index} className={`px-5 py-5 md:px-10 md:py-10 
                                rounded-xl text-gray-600  
                                bg-opacity-25 shadow-md col-span-3 md:col-span-1 ${i.className}`}>
                                <p className='flex justify-end'>
                                    {i.icon}
                                </p>

                                <div className='text-xs md:text-base'>
                                    <h6 className='my-2 md:my-3 drop-shadow-md'>{i.title}</h6>
                                    <p className='drop-shadow-md'>
                                        بود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Delivery
