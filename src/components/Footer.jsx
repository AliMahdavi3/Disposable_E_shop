import React from 'react'
import { FaInstagramSquare, FaTelegramPlane, FaWhatsappSquare, FaEnvelope, FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer_bg rounded-t-3xl">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-white">
                        <h1 className='text-2xl font-bold'>تکشاپ</h1>
                    </div>
                    <ul className="mt-5 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-100 transition hover:opacity-75"
                            >
                                <span className="sr-only">Facebook</span>

                                <FaInstagramSquare className='text-3xl' />
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-100 transition hover:opacity-75"
                            >
                                <span className="sr-only">Instagram</span>

                                <FaTelegramPlane className='text-3xl' />
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-100 transition hover:opacity-75"
                            >
                                <span className="sr-only">Twitter</span>

                                <FaWhatsappSquare className='text-3xl' />

                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-100 transition hover:opacity-75"
                            >
                                <span className="sr-only">GitHub</span>

                                <FaEnvelope className='text-3xl' />

                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-100 transition hover:opacity-75"
                            >
                                <span className="sr-only">Dribbble</span>
                                <FaPhoneSquare className='text-3xl' />

                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="grid grid-cols-1 gap-5 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
                >
                    <div>
                        <p className="font-medium text-gray-300">Services</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> 1on1 Coaching </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Company Review </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Accounts Review </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> HR Consulting </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> SEO Optimisation </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-300">Company</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> About </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Meet the Team </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Accounts Review </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-300">Helpful Links</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Contact </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> FAQs </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Live Chat </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-300">Legal</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Accessibility </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Returns Policy </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Refund Policy </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-100 transition hover:opacity-75"> Hiring Statistics </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-xs text-gray-100">&copy; 2022. Company Name. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
