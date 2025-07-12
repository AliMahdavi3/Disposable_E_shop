import React, { useEffect, useState } from 'react';
import { getMostViewedArticleService } from '../../services/blog';
import ArticleCard from '../../components/cardComponents/ArticleCard';

const MoreViewedArticle = () => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchMoreViewedArticle = async () => {
            try {
                const res = await getMostViewedArticleService();
                if (res.status === 200) {
                    setArticle(res.data.article[0]);
                }
            } catch (error) {
                console.log('error fetching article', error);
            }
        }
        fetchMoreViewedArticle();
    }, []);

    return (

        <div className="container pb-7 pt-20">
            {article ? (
                <ArticleCard article={article} modify={true} />
            ) : (
                <div className='border-2 shadow-md rounded-xl'>
                    <p className="py-5 text-xs md:text-base text-gray-500 text-center">
                        مقاله ای یافت نشد!
                    </p>
                </div>
            )}
        </div>
    )
}

export default MoreViewedArticle
