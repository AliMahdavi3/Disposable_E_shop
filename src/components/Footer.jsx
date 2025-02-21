import React from 'react'
import { FaInstagram, FaTelegram, FaWhatsapp, FaEnvelope, FaPhoneSquare } from "react-icons/fa";

const Footer = () => {

    const socialMediasItems = [
        {
            icon: <FaInstagram className='text-4xl' />,
            href: "/",
        },
        {
            icon: <FaTelegram className='text-4xl' />,
            href: "/",
        },
        {
            icon: <FaWhatsapp className='text-4xl' />,
            href: "/",
        },
        {
            icon: <FaEnvelope className='text-4xl' />,
            href: "/",
        },
        {
            icon: <FaPhoneSquare className='text-4xl' />,
            href: "/",
        },
    ]

    const customerService = [
        { title: "تماس باما", href: "/" },
        { title: "سوالات", href: "/" },
        { title: "محصولات", href: "/" },
        { title: "بازگشت وجه", href: "/" },
        { title: "حمل و نقل", href: "/" },
    ]
    const productsCategory = [
        { title: "ظروف یکبارمصرف", href: "/" },
        { title: "تم تولدی", href: "/" },
        { title: "ظروف آلمینیومی", href: "/" },
        { title: "ظروف کاغذی", href: "/" },
    ]
    const legalInformation = [
        { title: "سیاست حفظ حریم خصوصی", href: "/" },
        { title: "شرایط و قوانین", href: "/" },
        { title: "استفاده از کوکی ها", href: "/" },
    ]


    return (
        <footer className="bg-gradient-to-r from-mgreen to-[#0dafa7] rounded-t-3xl">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-white">
                        <h1 className='text-2xl'>فروشگاه اینترنتی تکشاپ</h1>
                    </div>
                    <ul className="mt-5 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        {
                            socialMediasItems.map((s, index) => (
                                <li key={index}>
                                    <a
                                        href={s.href}
                                        className="text-gray-100"
                                    >
                                        {s.icon}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-5 border-t border-gray-100 pt-8 
                    sm:grid-cols-2 lg:grid-cols-4 lg:pt-10">
                    <div>
                        <p className="font-medium text-gray-300">خدمات مشتری</p>

                        <ul className="mt-4 space-y-4 text-sm">
                            {
                                customerService.map((c, index) => (
                                    <li key={index}>
                                        <a
                                            href={c.href}
                                            className="text-gray-100">
                                            {c.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-300">محصولات ما</p>
                        <ul className="mt-4 space-y-4 text-sm">
                            {
                                productsCategory.map((p, index) => (
                                    <li key={index}>
                                        <a
                                            href={p.href}
                                            className="text-gray-100">
                                            {p.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-300">لینک های حقوقی</p>

                        <ul className="mt-4 space-y-4 text-sm">
                            {
                                legalInformation.map((l, index) => (
                                    <li key={index}>
                                        <a
                                            href={l.href}
                                            className="text-gray-100">
                                            {l.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='w-full'>
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103727.53456132182!2d51.04402631624899!3d35.6650469041418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1709288702821!5m2!1sen!2s"
                            width="100%" height="200" style={{ borderRadius: '30px', border: 'solid 5px white' }} 
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>

                <p className="text-xs text-gray-100">
                    امفهوم از صنعت چاپ، و با استفاده از طر
                    احان گرافیک است، چاپگرها و متون بلکه ر
                    وزنامه و مجله در ستون و سطرآنچنا
                    ت که تمام و دشواری موجود در ارائه راهکار
                    ها، و شرایط سخت تایپ به پایان رسد و زمان
                     مورد نیاز شامل حروفچینی دستاوردهای اصلی، 
                    و جوابگوی سوالات پیوسته اهل دنیای
                     موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
        </footer>
    )
}

export default Footer
