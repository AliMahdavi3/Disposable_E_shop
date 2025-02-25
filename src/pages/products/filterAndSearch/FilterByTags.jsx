import React from 'react'

const FilterByTags = ({ tags, handleTagClick }) => {
    return (
        <div className='px-10 py-10 flex justify-center items-center flex-col mt-2 box_shadow
            rounded-lg bg-white bg-opacity-50 w-full'>
            <h3 className='pb-5 font-medium text-center md:text-xl text-gray-600'>
                تگ های مرتبط با محصول
            </h3>
            <div>
                <ul className='grid grid-cols-2 gap-2'>
                    {tags.map((tag, index) => (
                        <li key={index} className='mb-4'>
                            <button onClick={() => handleTagClick(tag)}
                                className='bg-gray-500 text-white text-xs md:text-base 
                                px-2 rounded-md py-2'>
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FilterByTags
