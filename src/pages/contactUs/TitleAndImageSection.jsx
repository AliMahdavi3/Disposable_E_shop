import React from 'react'
import { FaInstagramSquare, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'

const TitleAndImageSection = () => {
    return (
        <div className="contact border-b-8 border-blue-300">
            <div className='pb-36'>
                <h1 className='text-center pt-52 text-5xl md:text-9xl text-white'>تماس با ما</h1>
                <div className='flex justify-center items-center py-10'>
                    <a href="/contact" className='text-5xl mx-5 text-rose-700'>
                        <FaInstagramSquare />
                    </a>
                    <a href="/contact" className='text-5xl mx-5 text-blue-700'>
                        <FaTelegram />
                    </a>
                    <a href="/contact" className='text-5xl mx-5 text-mgreen'>
                        <FaWhatsappSquare />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TitleAndImageSection
