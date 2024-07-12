import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from '../../components/Footer';
import ProductsSection from './ProductsSection';
import { useNavbarContext } from '../../context/NavbarContext';
import Category from './category/Category';
import ProductCarousel from './carousels/ProductCarousel';
import { useSearchParams } from 'react-router-dom';

const Products = () => {

    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const [totalProducts, setTotalProducts] = useState(0);
    const { setIsSolid } = useNavbarContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState({
        category: null,
        color: null,
        tag: null,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        if (selectedCategory) {
            handleFilterChange('category', selectedCategory);
        }
    }, [selectedCategory]);

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterCriteria]);

    const handleFilterChange = (type, value) => {
        setFilterCriteria(prevCriteria => ({
            ...prevCriteria,
            [type]: value
        }));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pageCount) {
            setCurrentPage(newPage);
        }
    };
    const pageCount = Math.ceil(totalProducts / itemsPerPage);


    return (
        <>
            <div className='pt-16'>
                {/* FirstCarousel */}
                <ProductCarousel />

                {/* Products-List */}
                <div className="container">

                    <div className='py-5'>
                        <h1 className='font-bold text-mgreen'>محصولات</h1>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-3">

                            {/* Search_box */}
                            <div className='w-full mb-4'>
                                <input
                                    onChange={handleSearchChange}
                                    value={searchTerm}
                                    type="text"
                                    placeholder='دنبال چه محصولی میگردید ؟'
                                    className='w-full box_shadow px-5 rounded-lg py-2' />
                            </div>

                            {/* ProductsSection */}
                            <ProductsSection
                                searchTerm={searchTerm}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                filterCriteria={filterCriteria}
                                setTotalProducts={setTotalProducts} />
                        </div>
                        <Category onFilterChange={handleFilterChange} />
                    </div>

                    {/* Pagination section */}
                    <div className='mt-10'>
                        <div className="flex flex-col items-center my-12">
                            <div className="flex text-gray-700">
                                <div onClick={() => handlePageChange(currentPage - 1)} className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                    <FaChevronRight />
                                </div>
                                {[...Array(pageCount)].map((x, i) => (
                                    <div key={i} onClick={() => handlePageChange(i + 1)} 
                                    className={`w-12 md:flex justify-center items-center hidden
                                     cursor-pointer leading-5 transition duration-150 ease-in 
                                     rounded-full ${currentPage === i + 1 ?
                                      'bg-teal-600 text-white' : 'bg-gray-200'}`}>
                                        {i + 1}
                                    </div>
                                ))}
                                <div onClick={() => handlePageChange(currentPage + 1)} className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                    <FaChevronLeft />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pagination section */}

                </div>
                {/* Footer */}
                <Footer />
            </div >
        </>
    )
}

export default Products
