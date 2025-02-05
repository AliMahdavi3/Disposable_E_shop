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
                <p className="mt-5 text-gray-500 text-center">مقاله ای یافت نشد!</p>
            )}
        </div>
    )
}

export default MoreViewedArticle
