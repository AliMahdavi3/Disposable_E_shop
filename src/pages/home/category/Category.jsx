import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getCategoriesService } from '../../../services/home';


const Category = ({ responsive, onClose }) => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategoriesService();
                setCategories(response.data.categories);
            } catch (error) {
                console.log('error fetching categories', error);
            }
        }
        fetchCategories();
    }, []);

    const categoryImages = {
        'سوت تولدی': '/assets/images/category/category_s (1).png',
        'دیس پلاستیکی': '/assets/images/category/category_s (2).png',
        'تم تولدی': '/assets/images/category/category_s (3).png',
        'لیوان کاغذی': '/assets/images/category/category_s (4).png',
        'ظروف آلمینیومی': '/assets/images/category/category_s (5).png',
        'کاسه': '/assets/images/category/category_s (6).png',
        'ظروف یکبارمصرف': '/assets/images/category/slide (1).png',
        'بادکنک': '/assets/images/category/slide (2).png',
        'لیوان': '/assets/images/category/slide (3).png',
        'کلاه تولد': '/assets/images/category/slide (4).png',
    }

    const handleClickCategories = (category) => {
        if (responsive) {
            navigate(`/products/category/${category}`);
            onClose();
        } else {
            navigate(`/products/category/${category}`);
        }
    }

    return (
        <div
            className={`border-mgreen 
        ${responsive ? "block md:hidden border-t-2 py-4" : "hidden md:block border-b-4"}`}>
            <div className={`${responsive ? "grid grid-cols-3 gap-6" :
                "container flex justify-between items-center py-3"}`}>
                {
                    categories.map((category, index) => (
                        <div key={index} onClick={() => handleClickCategories(category)}
                            className={`cursor-pointer w-16 flex flex-col items-center
                            ${responsive ? "col-span-1" : ""}`}>
                            <div className='mb-1 border-4 border-gray-300 rounded-full'>
                                <img className='border-4 border-teal-600 rounded-full'
                                    src={categoryImages[category] || '/assets/images/category_s (3).png'}
                                    alt={category} />
                            </div>
                            <span className='text-xs truncate text-gray-500 font-medium'>
                                {category}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
