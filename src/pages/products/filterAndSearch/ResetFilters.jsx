import React from 'react'

const ResetFilters = ({ handleResetFilters }) => {
    return (
        <div className='px-10 py-5 mb-2 box_shadow text-center 
            rounded-lg bg-white bg-opacity-50 w-full'>
            <button
                onClick={handleResetFilters}
                className='w-full py-2 bg-mgreen text-white font-semibold
                rounded-xl hover:bg-violet-700'
            >
                نمایش همه محصولات
            </button>
        </div>
    )
}

export default ResetFilters
