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
                const response = await getNewestArticlesService();
                setData(response.data.articles);
                console.log(response.data.articles);
            } catch (error) {
                console.log('error fetching articles', error);
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
                    <div className='pb-10'>
                        <h1 className='text-3xl py-8 font-semibold text-mblack text-center'>
                            جدیدترین مقالات وبسایت
                        </h1 >
                        <div className="container grid gap-2 grid-cols-3">
                            {
                                data?.map((article) => (
                                    <ArticleCard key={article._id} article={article} />
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
