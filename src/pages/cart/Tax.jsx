import React from 'react'

const Tax = () => {
    return (
        <div className='mt-3 flex justify-between items-center font-medium text-gray-700'>
            <p className='flex'>
                <span className='text-xs lg:text-base'>%</span>
                <span className='me-1 text-xs lg:text-base'>10</span>
            </p>
            <p className='text-xs lg:text-base'>مالیات بر ارزش افزوده</p>
        </div>
    )
}

export default Tax
