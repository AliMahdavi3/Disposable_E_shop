import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, pageCount, onPageChange }) => {

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pageCount) {
            onPageChange(newPage);
        }
    };

    return (
        <div className='mt-10'>
            <div className="flex flex-col items-center">
                <div className="flex text-gray-700">
                    <div onClick={() => handlePageChange(currentPage - 1)}
                        className={`w-8 h-8 md:h-10 md:w-10 mr-1 flex justify-center items-center rounded-full
                        ${currentPage === 1 ? "disabled" : ""} bg-gray-200 cursor-pointer`}>
                        <FaChevronRight />
                    </div>
                    {[...Array(pageCount)].map((_, i) => (
                        <div key={i} onClick={() => handlePageChange(i + 1)}
                            className={`w-8 h-8 md:h-10 md:w-10 flex justify-center items-center
                            cursor-pointer leading-5 transition duration-150 ease-in 
                            rounded-full ${currentPage === i + 1 ?
                            'bg-teal-600 text-white' : 'bg-gray-200'}`}>
                            {i + 1}
                        </div>
                    ))}
                    <div onClick={() => handlePageChange(currentPage + 1)}
                        className={`w-8 h-8 md:h-10 md:w-10 ml-1 flex justify-center items-center rounded-full
                        ${currentPage === pageCount ? "disabled" : ""} bg-gray-200 cursor-pointer`}>
                        <FaChevronLeft />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
