import React from 'react'

const Promote = () => {
    return (
        <div className='pt-12'>
            <div className="container flex justify-center md:justify-between 
    items-center md:items-end flex-col md:flex-row">
                <div className='md:w-1/6 w-full md:ml-2 mb-2 shadow-cyan-800 rounded-xl shadow-md bg-gray-200 '>
                    <img src="/assets/images/baner.jpg" className='shadow-cyan-800 rounded-xl shadow-md' alt="baner" />
                </div>
                <div className='bg-gray-200 w-full mb-2 shadow-cyan-800 shadow-md text-center py-6 rounded-xl'>
                    <h2 className='text-xl font-semibold text-mblack md:text-3xl'>فروش انواع ظروف یکبار مصرف. تم تولدی و ظروف المینیومی</h2>
                </div>
            </div>
        </div>
    )
}

export default Promote
