import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaHeart, FaRegHeart } from 'react-icons/fa';
import ArticleComments from './ArticleComments';
import { convertDateToJalali } from '../../utils/convertDate';
import { getSingleArticleService } from '../../services/blog';
import useSolidNavbar from '../../hooks/useSolidNavbar';
import SpinnerLoad from '../../components/SpinnerLoad';

const SingleArticle = () => {

    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [liked, setLiked] = useState(false);

    useSolidNavbar(true);

    useEffect(() => {
        const fetchSingleArticle = async () => {
            try {
                const response = await getSingleArticleService(articleId);
                setArticle(response.data.article);
                console.log(response.data);
            } catch (error) {
                console.log('error fetching articles', error);
            }
        }
        fetchSingleArticle();
    }, [articleId]);


    const handleLikes = async () => {
        try {
            const response = await axios.patch(`http://localhost:4000/api/articles/${articleId}/likes`, {
                increment: liked ? -1 : 1,
            });
            setArticle(prevArticle => ({
                ...prevArticle,
                likes: response.data.likes
            }));
            setLiked(!liked);
        } catch (error) {
            console.error('Error updating likes', error);
        }
    };

    return (
        <>
            {
                !article ? (
                    <div className="h-screen">
                        <SpinnerLoad />
                    </div>
                ) : (
                    <div className='pt-24 pb-10 container mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                            <div className='md:col-span-3 h-full shadow-lg border-4 border-white rounded-md'>
                                <img className='rounded-t-md w-full h-96 object-cover'
                                    src={"http://localhost:4000/" + article.imageUrl} alt={article.title} />
                                <div className="p-5">
                                    <h1 className='text-4xl font-bold mb-3'>{article.title}</h1>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-gray-600'>نوشته شده در تاریخ : {convertDateToJalali(article.createdAt)}</span>
                                        <p className='flex flex-col items-center' onClick={handleLikes}>
                                            {
                                                liked ? (
                                                    <FaHeart className='text-xl cursor-pointer text-rose-600' />
                                                ) : (
                                                    <FaRegHeart className='text-xl hover:text-rose-500 cursor-pointer text-gray-700' />
                                                )
                                            }
                                            <span className='text-xs md:text-sm mt-1 text-gray-500'>{article.likes}</span>
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-center text-gray-500 mb-4 mt-2'>
                                        <span className='text-sm'>زمان مطالعه : {article.readTime}</span>
                                        <div className='flex justify-center items-center'>
                                            <FaEye className='me-2' />
                                            <span className='text-sm'>{article.views}</span>
                                        </div>
                                    </div>
                                    <p className='text-lg font-semibold mb-2'>خلاصه مقاله :</p>
                                    <p className='mb-4'>{article.excerpt}</p>
                                    <p className='text-lg font-semibold mb-2'>محتوای مقاله :</p>
                                    <div className='prose max-w-none'>{article.content}</div>
                                    <p className='py-5 text-lg font-semibold'>دسته‌بندی : <span className='text-sm bg-violet-500 rounded-3xl
                                    px-4 py-2 w-1/6 text-white mt-4'>{article.categories}</span></p>
                                </div>
                            </div>

                            {/* Author info */}
                            <div className='md:col-span-1 h-fit shadow-lg rounded-md mt-4 md:mt-0'>
                                <div className='flex justify-center items-center py-5'>
                                    <img className='rounded-full w-32 h-32 object-cover' src={'http://localhost:4000/' + article.author.profileImage} alt={article.author.name} />
                                </div>
                                <div className='py-3 px-5'>
                                    <hr />
                                </div>
                                <div>
                                    <p className='text-xs md:text-sm text-gray-800 font-semibold px-5'>
                                        <span>نویسنده : {article.author.name}</span>
                                    </p>
                                    <p className='text-sm text-gray-700 px-5 py-3'>{article.author.bio}</p>
                                </div>
                            </div>
                        </div>

                        <ArticleComments />
                    </div>
                )
            }
            <Footer />
        </>
    )
}

export default SingleArticle
