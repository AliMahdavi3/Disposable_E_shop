import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Alert, Confirm } from '../../utils/alert';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Favorites = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    let numOfPage = 8;
    const [favList, setFavList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [pageCount, setPageCount] = useState(1);


    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await axios.get('http://localhost:4000/auth/user/favorites', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                console.log(res)
                setData(res.data.favorites);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFavorites();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const pCount = Math.ceil(data.length / numOfPage);
            setPageCount(pCount);
            const pArr = Array.from({ length: pCount }, (_, i) => i + 1);
            setPages(pArr);
        } else {
            setPageCount(1);
            setPages([]);
        }
    }, [data]);

    useEffect(() => {
        let start = currentPage * numOfPage - numOfPage;
        let end = currentPage * numOfPage;
        setFavList(data.slice(start, end));
    }, [currentPage, data])

    const handleRemoveFavorite = async (productId) => {

        const confirmDelete = await Confirm("آیا مطمئن هستید؟", "حذف محصول از لیست!");

        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:4000/auth/user/favorites/${productId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setData((prevData) => prevData.filter((item) => item._id !== productId));
                await Alert("عملیات موفقیت آمیز بود!", "محصول از لیست حذف شد!", "success");
            } catch (err) {
                setError(err.message);
                await Alert("خطایی رخ داده است!", error.message, "error");
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="border-2 mt-5 px-5 py-5 rounded-lg">
            <h3 className='font-medium text-rose-700 pb-5 mb-2 border-b-4 border-b-red-400'>لیست علاقه مندی</h3>
            <div className='grid grid-cols-4 gap-2'>
                {
                    favList.length > 0 ? favList.map((d, index) => (
                        <div key={index} className={`md:col-span-1 h-fit col-span-4 md:items-center py-3 mb-2 box_shadow rounded-lg hover:shadow-lg bg-white bg-opacity-50 cursor-pointer
                                    ${d.available ? ' hover:shadow-[#17907F]' : ' hover:shadow-rose-500'}`}>

                            <div className='flex justify-center items-center'>
                                <img className='w-2/3' src={`http://localhost:4000/${d.imageUrl[1]}`} alt={d.title} />
                            </div>

                            <div className='px-5 text-mblack'>
                                <h3 className='font-medium text-xs lg:text-base'>{d.title}</h3>
                                <p className='hidden md:block py-5 text-xs lg:text-sm text-gray-600 font-medium'>
                                    <span className='line-clamp-1'>{d.content}</span>
                                </p>
                                <div className='flex justify-between'>
                                    <p>
                                        {
                                            d.available ? (
                                                <span className='font-medium text-xs text-green-800'>موجود است</span>
                                            ) : (
                                                <span className='font-medium text-xs text-rose-600'>موجود نیست</span>
                                            )
                                        }
                                    </p>
                                    <p className='flex flex-col items-end'>
                                        <span className='mx-2 font-medium text-xs'>{d.price}</span>
                                        <span className='text-xs'>تومان</span>
                                    </p>
                                </div>
                                <div className='flex justify-between items-center pt-2 '>
                                    <div className='flex justify-center items-center'>
                                        <a href={`/products/${d._id}`}>
                                            <button className='hover:bg-violet-700 cursor-pointer 
                                                bg-[#007274] text-xs text-white px-3 rounded-md py-1'
                                            >
                                                خرید
                                            </button>
                                        </a>
                                        <button className='hover:bg-violet-700 cursor-pointer mx-2 
                                                bg-rose-600 text-xs text-white px-3 rounded-md py-1'
                                            onClick={() => handleRemoveFavorite(d._id)}
                                        >
                                            حذف
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className='col-span-4 flex flex-col justify-center items-center mt-10'>
                            <img className='w-[25%]' src="/assets/images/favorites.png" alt="" />
                            <p className='mt-2 text-xs md:text-lg font-medium text-rose-500'>هنوز محصولی به این لیست اضافه نکرده اید!</p>
                        </div>
                    )
                }
            </div>

            {
                favList.length > 0 ? (
                    <div className='mt-5'>
                        <div className="flex flex-col items-center my-5">
                            <div className="flex text-gray-700">
                                <div onClick={() => setCurrentPage(currentPage - 1)}
                                    className={`w-8 mr-1 flex justify-center items-center 
                                    rounded-full bg-gray-200 cursor-pointer 
                                    ${currentPage === 1 ? "disabled" : ""}`}>
                                    <FaChevronRight />
                                </div>

                                {
                                    pages.map((page, index) => (
                                        <div key={index} onClick={() => setCurrentPage(page)}
                                            className={`h-8 w-8 md:flex justify-center items-center hidden
                                            cursor-pointer leading-5 transition duration-150 ease-in 
                                            rounded-full bg-gray-200`}>
                                            {page}
                                        </div>
                                    ))
                                }

                                <div onClick={() => setCurrentPage(currentPage + 1)}
                                    className={`h-8 w-8 ml-1 flex justify-center items-center 
                                    rounded-full bg-gray-200 cursor-pointer 
                                    ${currentPage === pageCount ? "disabled" : ""}`}>
                                    <FaChevronLeft />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }


        </section>
    )
}

export default Favorites
