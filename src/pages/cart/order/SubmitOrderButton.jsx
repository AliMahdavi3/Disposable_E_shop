import React from 'react'

const SubmitOrderButton = ({ handleCreateOrder }) => {
    return (
        <>
            <div className='pt-3'>
                <button
                    onClick={handleCreateOrder}
                    className='font-bold hover:bg-violet-700 w-full
                    py-3 bg-mgreen text-white text_shadow rounded-lg text-xl'>
                    ادامه خرید
                </button>
            </div>

            <div className='text-center mt-5'>
                <a className='pt-5 text-blue-700 font-bold' href='/'>شرایط و قوانین</a>
            </div>
        </>
    )
}

export default SubmitOrderButton
