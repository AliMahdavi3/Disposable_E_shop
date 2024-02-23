import React from 'react'

const SearchBox = () => {
    return (
        <div className='border-4 border-y-mgreen border-x-0'>
            <div className='container flex flex-col md:flex-row 
    justify-center items-center py-3 md:py-5'>
                <input type="text" placeholder='جستجو در سایت'
                    className='py-1 shadow-md px-4 mb-2 text-center md:text-start 
        font-semibold ml-4 rounded-xl w-full bg-stone-100'/>
                <button className='md:px-20 mb-2 px-10 font-semibold py-1 rounded-xl text-white bg-mblack'>جستجو</button>
            </div>
        </div>
    )
}

export default SearchBox
