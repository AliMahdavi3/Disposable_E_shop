import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { getAllProductsService } from '../../services/product';

const ProductsSection = ({ filterCriteria, searchTerm, currentPage, itemsPerPage, setTotalProducts }) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const handleFetchProducts = async () => {
            try {
                const res = await getAllProductsService();
                setData(res.data.products);
                setFilteredData(res.data.products);
                setTotalProducts(res.data.products.length)
            } catch (error) {
                console.log(error.message);
            }
        }
        handleFetchProducts();
    }, [filterCriteria, setTotalProducts]);

    useEffect(() => {
        let filtered = [...data];

        if (filterCriteria.category) {
            filtered = filtered.filter(d => d.category === filterCriteria.category);
        }
        if (filterCriteria.color) {
            filtered = filtered.filter(d => d.color === filterCriteria.color);
        }
        if (filterCriteria.tag) {
            filtered = filtered.filter(d => d.tag === filterCriteria.tag);
        }
        if (filterCriteria.minPrice) {
            filtered = filtered.filter(d => d.price >= filterCriteria.minPrice);
        }
        if (filterCriteria.maxPrice) {
            filtered = filtered.filter(d => d.price <= filterCriteria.maxPrice);
        }
        if (searchTerm) {
            filtered = filtered.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setFilteredData(filtered);
        setTotalProducts(filtered.length);

    }, [data, filterCriteria, searchTerm, setTotalProducts]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                Array.isArray(currentItems) ?
                    currentItems.map((d, index) => (

                        <div key={index} className={`md:col-span-1 h-fit col-span-3 
                        box_shadow rounded-lg hover:shadow-lg bg-white bg-opacity-50 cursor-pointer
                        ${d.available ? ' hover:shadow-[#17907F]' : ' hover:shadow-rose-500'}`}>

                            <a href="/singleProduct">
                                <img className='h-2/3 w-full'
                                    src={"http://localhost:4000/" + d.imageUrl[1]} alt="" />
                            </a>
                            <div className='px-5 text-mblack'>
                                <a href="/singleProduct">
                                    <h3 className='font-medium lg:text-xl'>{d.title}</h3>
                                    <p className='py-5 text-xs lg:text-base text-gray-600 font-medium truncate'>
                                        {d.content}
                                    </p>
                                    <p className='flex justify-between'>
                                        <div>
                                            {
                                                d.available ? (
                                                    <span className='font-medium text-xs md:text-sm text-green-800'>موجود است</span>
                                                ) : (
                                                    <span className='font-medium text-xs md:text-sm text-rose-600'>موجود نیست</span>
                                                )
                                            }
                                        </div>
                                        <div className='flex justify-end text-xs lg:text-base'>
                                            <span>3.7</span><FaStar className='ms-2 text-amber-500' />
                                        </div>
                                    </p>
                                </a>

                                <a href="/singleProduct">
                                    <div className='flex justify-between items-center py-5'>

                                        <a href={`products/${d._id}`}>
                                            <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs lg:text-base text-white 
                                                px-3 lg:px-5 rounded-md py-1'>
                                                خرید
                                            </button>
                                        </a>

                                        <p className='flex items-center'>
                                            <span className='mx-2 font-medium text-xs lg:text-base'>{d.price}</span>
                                            <span className='text-xs'>تومان</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )) : null
            }
        </div>
    )
}

export default ProductsSection