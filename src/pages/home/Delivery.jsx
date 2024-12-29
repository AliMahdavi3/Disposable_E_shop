import React from 'react'
import { FaShippingFast, FaDollarSign, FaMapMarkedAlt, FaShoppingBag, FaBusinessTime, FaMoneyBillAlt } from "react-icons/fa";


const Delivery = () => {

    const servicesItems = [
        {
            icon: <FaShippingFast className='text-4xl'/>,
            className: "bg-[#7ac97d]",
            title: "حمل و نقل",
            content: ""
        },
        {
            icon: <FaDollarSign className='text-4xl'/>,
            className: "bg-white box_shadow",
            title: "خرید آنلاین",
            content: ""
        },
        {
            icon: <FaMapMarkedAlt className='text-4xl'/>,
            className: "bg-[#7ac97d]",
            title: "ارسال به کل کشور",
            content: ""
        },
        {
            icon: <FaShoppingBag className='text-4xl'/>,
            className: "bg-white box_shadow",
            title: "پیگیری سفارش",
            content: ""
        },
        {
            icon: <FaBusinessTime className='text-4xl'/>,
            className: "bg-[#7ac97d]",
            title: "مرجوع کالا",
            content: ""
        },
        {
            icon: <FaMoneyBillAlt className='text-4xl'/>,
            className: "bg-white box_shadow",
            title: "برگشت سرمایه",
            content: ""
        },
    ]

    return (
        <div className='py-10'>
            <div className='container'>
                <h1 className='text-center md:text-3xl font-bold text-mblack pt-5 pb-10'>شرایط و خدمات وبسایت ما</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        servicesItems.map((i, index) => (
                            <div key={index} className={`px-10 py-10 rounded-xl text-gray-600  
                            bg-opacity-25 shadow-md col-span-3 md:col-span-1 ${i.className}`}>
                                <p className='flex justify-end'>
                                    {i.icon}
                                </p>

                                <div className='text-xs md:text-base'>
                                    <h6 className='my-3 drop-shadow-md'>{i.title}</h6>
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
