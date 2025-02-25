import React from 'react'

const FilterByPrice = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, handlePriceChange }) => {
    return (
        <div className='px-10 py-5 mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
            <h3 className='pb-5 font-medium text-center md:text-xl text-gray-600'>
                محدوده قیمت
            </h3>
            <div>
                <span className='block'>از</span>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className='w-full text-xs my-5 px-2 py-2 box_shadow rounded-lg'
                    placeholder='از قیمت'
                />
            </div>
            <div>
                <span className='block'>تا</span>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className='w-full text-xs my-5 px-2 py-2 box_shadow rounded-lg'
                    placeholder='تا قیمت'
                />
            </div>
            <button onClick={handlePriceChange}
                className='w-full py-2 bg-mgreen text-white
                font-medium text-sm md:text-base rounded-xl hover:bg-violet-700'>
                اعمال قیمت
            </button>
        </div>
    )
}

export default FilterByPrice
