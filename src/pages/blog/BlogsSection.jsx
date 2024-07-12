import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import moment from "jalali-moment";

const BlogsSection = () => {

    const [getArticles, setGetArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(9);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/articles');
                const sortedArticles = response.data.articles.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setGetArticles(sortedArticles);
            } catch (error) {
                console.log('error fetching articles', error);
            }
        }
        fetchArticles();
    }, []);


    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = getArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(getArticles.length / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <div className="container pb-10">
            <h1 className='pb-5 text-mblack'>مقالاتی تازه نوشته شده</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    currentArticles.map((a) => (
                        <div key={a._id} className="col-span-3 md:col-span-1">
                            <div className='rounded-xl md:col-span-1 relative'>
                                <img className='rounded-xl w-full h-60 object-cover' src={'http://localhost:4000/' + a.imageUrl} alt={a.title} />
                                <div className='absolute px-5 rounded-xl bg-gray-700 bg-opacity-40 hover:bg-mgreen
                         hover:bg-opacity-35 h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                    <a href={`/blog/${a._id}`}>
                                        <h5 className='font-semibold text-white navbar_shadow
                                hover:text-xl mb-3 text-lg duration-300'>
                                            {a.title}
                                        </h5>
                                        <p className='line-clamp-3 text-white navbar_shadow
                                text-xs md:text-base duration-300'>
                                            {a.content}
                                        </p>
                                        <div className='mt-5 text-sm text-white navbar_shadow'>
                                            <p><span>نوشته شده توسط : </span>{a.author.name}</p>
                                            <p className='mt-2'><span>در تاریخ : </span>{
                                                moment(a.createdAt).locale('fa').format('YYYY/MM/DD')
                                            }</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* pagination section */}
            <div className='mt-10'>
                <div dir='rtl' className="flex flex-col items-center my-12">
                    <div className="flex text-gray-700">
                        <div className={`h-12 w-12 mr-1 flex justify-center items-center 
                        rounded-full bg-gray-300  ${currentPage === 1 ?
                                'opacity-35 cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={handlePrevPage}>
                            <FaChevronRight />
                        </div>
                        {pageNumbers.map(number => (
                            <div key={number} className={`h-12 w-12 cursor-pointer flex justify-center 
                                items-center rounded-full ${currentPage === number ? 'bg-teal-600 text-white'
                                    : 'bg-gray-300'}`} onClick={() => paginate(number)}>
                                {number}
                            </div>
                        ))}
                        <div className={`h-12 w-12 ml-1 flex justify-center items-center 
                        rounded-full bg-gray-300 ${currentPage === pageNumbers.length ?
                                'opacity-35 cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={handleNextPage}>
                            <FaChevronLeft />
                        </div>
                    </div>
                </div>
            </div>
            {/* pagination section */}
        </div>
    )
}

export default BlogsSection
