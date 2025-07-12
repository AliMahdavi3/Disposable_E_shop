import React, { useState } from 'react'
import ModalContainer from '../../../components/ModalContainer'
import { Alert } from '../../../utils/sweetalert2';

const ShippingAddressButton = ({ shippingAddress, setShippingAddress }) => {

    const [open, setOpen] = useState(false);

    const handleConfirmAddress = () => {
        if (shippingAddress.trim() === "") {
            Alert('هشدار', 'لطفا آدرس خود را وارد کنید!', 'warning');
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <div className='pt-3'>
                <button onClick={() => setOpen(true)}
                    className='font-medium hover:bg-violet-700 w-full
                    py-3 bg-rose-500 text-white rounded-lg text-xs md:text-base truncate'>
                    {shippingAddress.trim()
                        ? shippingAddress.slice(0, 30) + (shippingAddress.length > 30 ? '...' : '')
                        : 'آدرس خود را وارد کنید'}
                </button>
            </div>

            <div className='text-center mt-4 text-xs md:text-sm'>
                <a className='pt-5 text-mgreen font-medium' href='/'>شرایط و قوانین</a>
            </div>

            <ModalContainer fullScreen={true} open={open} onClose={() => setOpen(false)}>
                <div className='border-2 border-gray-300 py-5 px-5 rounded-lg my-5'>
                    <p className='flex items-center text-gray-500'>
                        <span className='text-xs md:text-base'>
                            آدرس خود را وارد کنید
                        </span>
                    </p>
                    <textarea
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        className='w-full bg-sky-50 border-2 border-gray-300 rounded-2xl
                        px-5 py-3 mt-3 placeholder:text-xs placeholder:md:text-sm text-xs md:text-base'
                        placeholder='لطفا آدرسی که میخواهید محصول به آن ارسال بشه رو وارد کنید!'
                        cols="30"
                        rows="5"
                        id=''
                        name=''
                    ></textarea>
                </div>
                <button
                    onClick={handleConfirmAddress}
                    className='bg-mgreen text-white w-full py-2 
                    rounded-md hover:bg-violet-500 text-xs md:text-base'>
                    تایید آدرس
                </button>
            </ModalContainer>
        </>
    )
}

export default ShippingAddressButton
