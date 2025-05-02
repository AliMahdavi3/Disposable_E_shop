import React from 'react'

const ShippingAddressBox = ({ shippingAddress, setShippingAddress }) => {
    return (
        <div className='border-2 border-gray-300 py-5 px-5 rounded-lg my-5'>
            <p className='text-sm flex items-center text-gray-500 md:text-base'>
                <span>آدرس خود را وارد کنید</span>
            </p>
            <textarea
                value={shippingAddress} 
                onChange={(e) => setShippingAddress(e.target.value)}
                name=""
                className='w-full bg-sky-50 border-2 border-gray-300 rounded-2xl px-5 py-3 mt-3'
                placeholder='لطفا آدرسی که میخواهید محصول به آن ارسال بشه رو وارد کنید!'
                id=""
                cols="30"
                rows="5"
            ></textarea>
        </div>
    )
}

export default ShippingAddressBox
