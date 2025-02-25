import React, { useEffect, useState } from 'react'
import { getArticlesService } from '../../services/blog';
import ArticleCard from '../../components/cardComponents/ArticleCard';
import Pagination from '../../components/Pagination';
import SpinnerLoad from '../../components/SpinnerLoad';

const BlogsSection = () => {

    const [getArticles, setGetArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    let articlesPerPage = 9;

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const response = await getArticlesService();
                const sortedArticles = response.data.articles.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setGetArticles(sortedArticles);
            } catch (error) {
                console.log('error fetching articles', error);
            } finally {
                setLoading(false);
            }
        }
        fetchArticles();
    }, []);


    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = getArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const pageCount = Math.ceil(getArticles.length / articlesPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            {
                loading ? (
                    <div className="h-screen">
                        <SpinnerLoad />
                    </div>
                ) : (
                    <div className="container pb-10">
                        <h1 className='pb-4 px-2 text-gray-700'>
                            مقالات تازه نوشته شده
                        </h1>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                currentArticles?.map((article) => (
                                    <ArticleCard key={article._id} article={article} />
                                ))
                            }
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                        />
                    </div>
                )
            }
        </>
    )
}

export default BlogsSection
