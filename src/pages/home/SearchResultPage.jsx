import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavbarContext } from '../../context/NavbarContext';
import { convertDateToJalali } from '../../utils/convertDate';

const SearchResultPage = () => {

    const [results, setResults] = useState({ products: [], articles: [] });
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const { setIsSolid } = useNavbarContext();

    useEffect(() => {
        setIsSolid(true);
        return () => setIsSolid(false);
    }, []);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/search?term=${query}`);
                const data = await response.json();
                setResults(data.data);
                console.log(data);

            } catch (error) {
                console.log('error fetching search results', error);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [query]);


    return (
        <div className='pt-24 container'>
            <h2 className='text-center text-2xl text-gray-600'>
                <span>جستجو برای</span> : <span className='text-yellow-600'>{query}</span>
            </h2>
            <hr className='border-2 border-mgreen my-5' />
            <div className='pt-5'>
                {results.products && results.products.map(product => (
                    <div className={`grid grid-cols-3 hover:shadow-md box_shadow rounded-lg mb-5 cursor-pointer
                        ${product.available ? "hover:shadow-mgreen" : "hover:shadow-rose-600"}`}
                        key={product._id}>
                        <div className='col-span-1 flex items-center justify-center border-l-2'>
                            <img className='w-2/3' src={'http://localhost:4000/' + product.imageUrl[0]} alt="" />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center px-5'>
                            <p className='text-xl pb-5'>{product.title}</p>
                            <p className='line-clamp-3 text-gray-700'>{product.content}</p>
                            <p className='pt-5'>در انبار : {
                                !product.available ? (
                                    <span className='text-xs md:text-sm text-rose-600'>محصول موجود نیست</span>
                                ) : (
                                    <span className='text-xs md:text-sm text-teal-600'>محصول موجود است</span>
                                )
                            }
                            </p>

                            <div className='pt-5 text-gray-700 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <p className='me-2 '>تومان</p>
                                    <p>{product.price}</p>
                                </div>
                                <div className='bg-mgreen px-5 py-2 text-white rounded-md hover:bg-violet-700'>
                                    <a href={`/products/${product._id}`}>خرید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h3>مقالات</h3>
                {results.articles && results.articles.map(article => (
                    <div className="grid grid-cols-3 box_shadow rounded-lg mb-5 py-5 cursor-pointer"
                        key={article._id}>
                        <div className='col-span-1 flex items-center justify-center border-l-2'>
                            <img className='w-2/3' src={'http://localhost:4000/' + article.imageUrl} alt="" />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center px-5'>
                            <p className='text-xl pb-5'>{article.title}</p>
                            <p className='line-clamp-3 text-gray-700'>{article.content}</p>
                            <div className='pt-5 text-gray-700 flex items-center justify-between'>
                                <div className='mt-5 text-sm'>
                                    <p><span>نوشته شده توسط : </span>{article.author.name}</p>
                                    <p className='mt-2'><span>در تاریخ : </span>{convertDateToJalali(article.createdAt)}</p>
                                </div>

                                <div className='bg-mgreen px-5 py-2 text-white rounded-md hover:bg-violet-700'>
                                    <a href={`/blog/${article._id}`}>مطالعه</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResultPage
