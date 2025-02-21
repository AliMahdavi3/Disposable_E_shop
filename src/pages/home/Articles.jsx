import React, { useEffect, useState } from 'react'
import { getNewestArticlesService } from '../../services/home';
import ArticleCard from '../../components/cardComponents/ArticleCard';
import SpinnerLoad from '../../components/SpinnerLoad';

const Articles = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNewestArticles = async () => {
            setLoading(true);
            try {
                const res = await getNewestArticlesService();
                if (res.status === 200) {
                    setData(res.data.articles);
                    console.log(res.data.articles);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchNewestArticles();
    }, []);

    return (
        <>
            {
                loading ? (
                    <div className="h-screen">
                        <SpinnerLoad />
                    </div>
                ) : (
                    <div className='pb-10 container'>
                        <div className='pb-5 md:pb-10 flex w-full justify-center items-center'>
                            <hr className='w-11/12' />
                            <p className='text-gray-500 font-medium 
                                md:text-base text-xs text-center mx-3 w-full'>
                                جدیدترین مقالات وبسایت
                            </p>
                            <hr className='w-11/12' />
                        </div>
                        <div className="container grid grid-cols-3 gap-2">
                            {
                                data?.map((article) => (
                                    <ArticleCard
                                        key={article._id}
                                        article={article}
                                    />
                                ))
                            }
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Articles
