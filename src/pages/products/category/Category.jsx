import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Category = ({ onFilterChange }) => {

    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [tags, setTags] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
            .then(response => {
                const fetchedProducts = response.data.products;

                const categoryCounts = {};
                const uniqueColors = new Set();
                const uniqueTags = new Set();

                fetchedProducts.forEach(product => {
                    categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
                    uniqueColors.add(product.color);
                    uniqueTags.add(product.tag);
                });

                setCategories(categoryCounts);
                setColors([...uniqueColors]);
                setTags([...uniqueTags]);
            })
            .catch(error => {
                console.error('There was an error fetching the products:', error);
            });
    }, []);

    const handleResetFilters = () => {
        onFilterChange('category', null);
        onFilterChange('color', null);
        onFilterChange('tag', null);
        onFilterChange('minPrice', '');
        onFilterChange('maxPrice', '');
        setMinPrice('');
        setMaxPrice('');
    };

    const handleCategoryClick = (category) => {
        onFilterChange('category', category);
    };

    const handleColorClick = (color) => {
        onFilterChange('color', color);
    };

    const handleTagClick = (tag) => {
        onFilterChange('tag', tag);
    };

    const colorList = {
        'قزمز': '#FF0000',
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

    const handlePriceChange = () => {
        onFilterChange('minPrice', minPrice);
        onFilterChange('maxPrice', maxPrice);
    };


    return (
        <div className="col-span-4 md:col-span-1">
            {/* category section */}
            <div className='px-10 py-5 mb-2 box_shadow text-center rounded-lg bg-white bg-opacity-50 w-full'>
                <button onClick={handleResetFilters} className='w-full py-2 bg-mgreen text-white font-semibold rounded-xl hover:bg-violet-700'>
                    نمایش همه محصولات
                </button>
            </div>

            <div className='px-10 py-5 box_shadow text-gray-600 rounded-lg bg-white bg-opacity-50 w-full'>
                <h3 className='pb-5 font-semibold text-center text-lg md:text-xl'>دسته بندی محصولات</h3>
                <ul>
                    {Object.entries(categories).map(([category, count], index) => (
                        <li key={index} className='flex justify-between items-center text-xs lg:text-base mt-3 font-medium '>
                            <button onClick={() => handleCategoryClick(category)}>{category}</button>
                            <button className='rounded-full pt-1 text-xs px-1 bg-slate-200'>{count}</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* price section */}
            <div className='px-10 py-5 mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
                <h3 className='pb-5 text-center font-semibold text-base lg:text-xl'>محدوده قیمت</h3>
                <div>
                    <span className='block'>از</span>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
                        placeholder='از قیمت' className='w-full text-xs my-5 px-2 py-2 box_shadow rounded-lg' />
                </div>
                <div>
                    <span className='block'>تا</span>
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder='تا قیمت' className='w-full text-xs my-5 px-2 py-2 box_shadow rounded-lg' />
                </div>
                <button onClick={handlePriceChange} className='w-full py-2 bg-mgreen text-white
                font-semibold rounded-xl hover:bg-violet-700'>اعمال قیمت</button>
            </div>

            {/* color section */}
            <div className='px-10 py-10 flex justify-center items-center flex-col mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
                <h3 className='pb-5 font-semibold text-base lg:text-xl'>جستجو بر اساس رنگ</h3>
                <div>
                    <ul className='grid grid-cols-3 gap-4'>
                        {colors.map((colorName, index) => {
                            const colorValue = colorList[colorName.toLowerCase()];
                            return (
                                colorValue && (
                                    <li key={index} className='col-span-1 flex justify-center items-center'>
                                        <button onClick={() => handleColorClick(colorName)} className='flex justify-center items-center 
                                        border-2 font-semibold w-5 lg:w-10 h-5 lg:h-10 rounded-full' style={{ backgroundColor: colorValue }}>
                                        </button>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* tags section */}
            <div className='px-10 py-10 flex justify-center items-center flex-col mt-2 box_shadow rounded-lg bg-white bg-opacity-50 w-full'>
                <h3 className='pb-5 font-semibold text-lg md:text-xl'>تگ های پربازدید</h3>
                <div>
                    <ul className='grid grid-cols-2 gap-2'>
                        {tags.map((tag, index) => (
                            <li key={index} className='mb-4'>
                                <button onClick={() => handleTagClick(tag)} className='bg-gray-500 text-white text-xs md:text-base px-2 rounded-md py-2' href="/products">
                                    {tag}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category
