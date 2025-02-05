import React from 'react'

const FilterByCategory = ({ handleCategoryClick, categories }) => {
    return (
        <div className='px-10 py-5 box_shadow text-gray-600 rounded-lg
            bg-white bg-opacity-50 w-full'>
            <h3 className='pb-5 font-medium text-center 
                text-lg md:text-xl text-gray-600'>
                دسته بندی محصولات
            </h3>
            <ul>
                {Object.entries(categories).map(([category, count], index) => (
                    <li key={index} className='flex justify-between items-center text-xs 
                        lg:text-base mt-3 font-medium '>
                        <button onClick={() => handleCategoryClick(category)}>
                            {category}
                        </button>
                        <button className='rounded-full pt-1 text-xs px-1 bg-slate-200'>
                            {count}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterByCategory
