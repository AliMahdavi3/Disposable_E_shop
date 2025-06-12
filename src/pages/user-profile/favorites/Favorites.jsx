import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/cardComponents/ProductCard';
import Pagination from '../../../components/Pagination';
import { deleteFavoritesService, getFavoritesService } from '../../../services/profile';
import { Alert, Confirm } from '../../../utils/sweetalert2';

const Favorites = () => {

    let numOfPage = 6;
    const [data, setData] = useState([]);
    const [favList, setFavList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);


    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await getFavoritesService();
                console.log(res)
                setData(res.data.favorites);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchFavorites();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const pCount = Math.ceil(data.length / numOfPage);
            setPageCount(pCount);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setPageCount(1);
        }
    }, [data, numOfPage]);

    useEffect(() => {
        let start = currentPage * numOfPage - numOfPage;
        let end = currentPage * numOfPage;
        setFavList(data.slice(start, end));
    }, [currentPage, data, numOfPage])

    const handleRemoveFavorite = async (productId) => {
        const confirmDelete = await Confirm("آیا مطمئن هستید؟", "حذف محصول از لیست!", 'question');
        if (confirmDelete.isConfirmed) {
            try {
                const res = await deleteFavoritesService(productId);
                if (res.status === 200) {
                    Alert("عملیات موفقیت آمیز بود!", "محصول از لیست حذف شد!", "success");
                    setData((data) => data.filter((i) => i._id !== productId));
                }
            } catch (error) {
                Alert("خطایی رخ داده است!", error.message, "error");
                console.log(error.message);
            }
        }
    };

    return (
        <section className="border-2 mt-5 px-5 py-5 rounded-lg max-h-[90vh] overflow-y-auto">
            <h3 className='font-medium text-rose-700 pb-5 mb-2 border-b-4 border-b-red-400'>لیست علاقه مندی</h3>
            <div className='grid grid-cols-3 gap-4'>
                {
                    favList.length > 0 ? favList.map((product) => (
                        <ProductCard
                            product={product}
                            shift={true}
                            handleRemoveFavorite={handleRemoveFavorite}
                        />
                    )) : (
                        <div className='col-span-3 flex flex-col justify-center items-center mt-10'>
                            <img className='w-[25%] border-4 rounded-full'
                                src="/assets/images/profile/favorites.png"
                                alt="orders"
                            />
                            <p className='mt-2 text-xs md:text-lg font-medium text-rose-500'>
                                هنوز محصولی به لیست اضافه نکرده اید!
                            </p>
                        </div>
                    )
                }
            </div>

            {
                favList.length > 0 ? (
                    <div className='mt-5'>
                        <Pagination
                            currentPage={currentPage}
                            pageCount={pageCount}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                ) : null
            }
        </section>
    )
}

export default Favorites
