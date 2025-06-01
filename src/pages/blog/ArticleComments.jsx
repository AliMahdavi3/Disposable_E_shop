import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert } from '../../utils/sweetalert2';

const ArticleComments = () => {

    let { articleId } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const navigate = useNavigate();

    const fetchComments = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/articles/${articleId}/comments`);
            setComments(res.data.articleComments);
            console.log(res.data.articleComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    useEffect(() => {
        fetchComments();
    }, [articleId]);

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token != null;
    }

    const redirectToLogin = () => {
        navigate('/login');
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleRating = (rateValue) => {
        setRating(rateValue);
    };

    const getRatingLabel = (rating) => {
        const ratings = {
            1: { label: 'ضعیف', color: 'text-red-500' },
            2: { label: 'متوسط', color: 'text-orange-500' },
            3: { label: 'خوب', color: 'text-yellow-500' },
            4: { label: 'خیلی خوب', color: 'text-teal-500' },
            5: { label: 'عالی', color: 'text-green-500' }
        };
        return ratings[rating] || { label: 'بدون امتیاز', color: 'text-gray-500' };
    };

    const handleCommentSubmit = async (event) => {

        try {
            event.preventDefault();
            const token = localStorage.getItem('token');

            // Prepare the comment data
            const commentData = {
                content: newComment,
            };

            // Only include the rating if it is greater than 0
            if (rating > 0) {
                commentData.rating = rating;
            }

            const response = await axios.post(`http://localhost:4000/api/articles/${articleId}/comments`,
                commentData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            Alert('عملیات موفقیت آمیز بود', 'نظر شما ارسال شد!', 'success');
            fetchComments();
            setNewComment('');
            setRating(0);

        } catch (error) {
            console.error('Error submitting comment:', error);
            Alert('خطایی رخ داده است', error.message, 'error');
        }
    };


    return (
        <>
            <div className='my-10'>
                <div className='bg-mgreen text-white font-semibold w-[60%] text-sm md:text-base lg:w-[20%]
                    text-center py-2 rounded-t-lg'>نظرات درباره این مقاله</div>
                <hr className="border-2 border-mgreen" />
            </div>
            <div className='pb-5'>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index} className='bg-gray-300 mb-5 rounded-lg w-full h-fit container px-5 py-5 bg-opacity-50'>
                            <div className='flex justify-between items-center pt-3'>
                                <div className='flex font-semibold text-mblack justify-center items-center text-xs md:text-sm'>
                                    <p className='ml-5'>{comment.user ? comment.user.name : 'Unknown User'}</p>
                                    <div className='flex'>
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`h-5 w-5 ${i < comment.rating ? "text-yellow-500" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className={`${getRatingLabel(comment.rating).color} font-semibold`}>
                                    {getRatingLabel(comment.rating).label}
                                </p>
                            </div>
                            <p className='py-5 text-xs md:text-sm text-gray-700'>
                                {comment.content}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className='text-center'>هنوز نظری برای این محصول ثبت نشده است.</p>
                )}
            </div>

            {
                !isAuthenticated() ? (
                    <button className='bg-mgreen rounded-lg text-white px-4 py-2
            hover:bg-violet-600' onClick={redirectToLogin}>
                        برای ارسال نظر لطفا وارد حساب کاربری خود شوید
                    </button>
                ) : (
                    <form onSubmit={handleCommentSubmit} className="space-y-3">
                        <span className='text-xs md:text-sm text-gray-600'>دادن امتیاز به این محصول</span >
                        <div className="flex">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;

                                return (
                                    <label key={index} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            onClick={() => handleRating(ratingValue)}
                                            className="sr-only"
                                        />
                                        <FaStar
                                            className={`h-5 w-5 ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(rating)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <textarea
                            value={newComment}
                            rows='5'
                            onChange={handleCommentChange}
                            placeholder="نوشتن نظر درباره این محصول...!"
                            required
                            className="w-full p-2 border-2 rounded-lg focus:ring focus:ring-opacity-50"
                        />
                        <button type="submit" className="px-4 py-2 bg-mgreen cursor-pointer rounded-lg
            hover:bg-violet-700 text-white">
                            ارسال نظر
                        </button>
                    </form >
                )
            }
        </>
    )
}

export default ArticleComments
