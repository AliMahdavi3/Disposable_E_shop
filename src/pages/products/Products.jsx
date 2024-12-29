import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import ProductsSection from './ProductsSection';
import { useNavbarContext } from '../../context/NavbarContext';
import ProductCarousel from './carousels/ProductCarousel';
import { useSearchParams } from 'react-router-dom';
import FilterOnProducts from './FilterOnProducts';
import Pagination from './Pagination';

const Products = () => {

    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');
    const { setIsSolid } = useNavbarContext();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [totalProducts, setTotalProducts] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState({ category: null, color: null, tag: null, });

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false);
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            handleFilterChange('category', selectedCategory);
        }
    }, [selectedCategory]);

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
                <ProductCarousel />

                <div className="container">

                    <div className='py-5'>
                        <h1 className='font-bold text-mgreen'>محصولات</h1>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-3">

                            <div className='w-full mb-4'>
                                <input
                                    onChange={handleSearchChange}
                                    value={searchTerm}
                                    type="text"
                                    placeholder='دنبال چه محصولی میگردید ؟'
                                    className='w-full box_shadow px-5 rounded-lg py-2' />
                            </div>

                            <ProductsSection
                                searchTerm={searchTerm}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                filterCriteria={filterCriteria}
                                setTotalProducts={setTotalProducts} />
                        </div>
                        <FilterOnProducts onFilterChange={handleFilterChange} />
                    </div>
 
                    <Pagination
                        currentPage={currentPage}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                    />
                </div>
                <Footer />
            </div >
        </>
    )
}

export default Products
