import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Category = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {

                const response = await axios.get('http://localhost:4000/api/products/categories');
                setCategories(response.data.categories);

            } catch (error) {
                console.log('error fetching categories', error);
            }
        }
        fetchCategories();
    }, []);

    const categoryImages = {
        'تم تولدی': '/assets/images/category_s (3).png',
        'ظروف یکبارمصرف': '/assets/images/slide (1).png',
        'ظروف آلمینیومی': '/assets/images/category_s (5).png',
        'بادکنک': '/assets/images/slide (2).png',
        'کلاه تولد': '/assets/images/category_s (3).png',
        'لیوان کاغذی': '/assets/images/category_s (4).png',
        'سوت تولدی': '/assets/images/category_s (1).png',
        'دیس پلاستیکی': '/assets/images/category_s (2).png',
        'لیوان': '/assets/images/slide (3).png',
        'کاسه': '/assets/images/category_s (6).png',
    }

    const handleClickCategories = (category) => {
        navigate(`/products?category=${category}`);
    }


    return (
        <div className='hidden md:block border-4 border-b-mgreen border-t-0 border-x-0'>
            <div className='container flex justify-between items-center py-4'>
                {
                    categories.map((category, index) => (
                        <div key={index} onClick={() => handleClickCategories(category)}
                         className='w-16 flex flex-col items-center cursor-pointer'>
                            <img className='mb-1 border-4 border-mgreen rounded-full'
                                src={categoryImages[category] || '/assets/images/category.png'} alt={category} />
                            <span className='text-sm truncate'>{category}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
