import React from 'react'

const FilterByColor = ({ colors, handleColorClick }) => {

    const colorList = {
        'قرمز': '#FF0000',
        'آبی': '#0000FF',
        'سبز': '#008000',
        'زرد': '#ffff00',
        'بنفش': '#800080',
        'صورتی': '#FFC0CB',
        'نارنجی': '#FFA500',
        'مشکی': '#000000',
        'سفید': '#FFFFFF',
        'نقره ای': '#808080',
        'قهوه ای': '#A52A2A',
        'طلایی': '#ffd700'
    };

    return (
        <div className='px-10 py-10 flex justify-center items-center flex-col mt-2 
            box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
            <h3 className='pb-5 font-medium text-center md:text-xl text-gray-600'>
                جستجو بر اساس رنگ
            </h3>
            <div>
                <ul className='grid grid-cols-3 gap-4'>
                    {colors.map((colorName, index) => {
                        const colorValue = colorList[colorName.toLowerCase()];
                        return (
                            colorValue && (
                                <li key={index}
                                    className='col-span-1 flex justify-center items-center'>
                                    <button onClick={() => handleColorClick(colorName)}
                                        className='flex justify-center items-center 
                                        border-2 font-semibold w-8 h-8 lg:w-10 lg:h-10
                                        rounded-full' style={{ backgroundColor: colorValue }}>
                                    </button>
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FilterByColor
