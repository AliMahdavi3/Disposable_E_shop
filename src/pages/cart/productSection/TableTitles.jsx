import React from 'react'

const TableTitles = () => {
    return (
        <>
            <div>
                <ul className='flex justify-between items-center text-gray-500 
                    py-2 px-5 border-2 border-gray-300 rounded-lg'>
                    <li>محصول</li>
                    <li className='md:ms-16'>نام</li>
                    <li className='md:ms-16'>قیمت</li>
                    <li className='md:ms-16'>تعداد</li>
                    <li>ویرایش</li>
                </ul>
            </div>
        </>
    )
}

export default TableTitles
