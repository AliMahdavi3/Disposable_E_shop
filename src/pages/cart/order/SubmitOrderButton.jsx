import React from 'react'

const SubmitOrderButton = ({ handleCreateOrder }) => {
    return (
        <>
            <div className='pt-3'>
                <button
                    onClick={handleCreateOrder}
                    className='font-medium hover:bg-violet-700 w-full
                    py-3 bg-mgreen text-white rounded-lg text-base'>
                    ادامه خرید
                </button>
            </div>
        </>
    )
}

export default SubmitOrderButton
