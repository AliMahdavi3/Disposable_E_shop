import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { createProductCommentService } from '../../../services/product';
import { Alert } from '../../../utils/alert';

const SendingComment = ({ productId, setRating, fetchComments, rating, handleRating }) => {

    const [newComment, setNewComment] = useState('');
    const [hover, setHover] = useState(0);
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const handleCommentSubmit = async (event) => {
        try {
            event.preventDefault();
            const commentData = {
                content: newComment,
                ...(rating > 0 && { rating }),
            };

            const res = await createProductCommentService(productId, commentData);
            if (res.status === 201) {
                Alert('عملیات موفقیت آمیز بود', 'نظر شما ارسال شد!', 'success');
                fetchComments();
                setNewComment('');
                setRating(0);
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
            Alert('خطایی رخ داده است!', error.message, 'error')
        }
    };

    return (
        <>
            {
                !token ? (
                    <button className='bg-mgreen rounded-lg text-white px-4 py-2
                    hover:bg-violet-600' onClick={() => navigate('/login')}>
                        برای ارسال نظر لطفا وارد حساب کاربری خود شوید
                    </button>
                ) : (
                    <form onSubmit={handleCommentSubmit} className="space-y-3">
                        <span className='text-xs md:text-sm text-gray-600'>
                            چه امتیازی به این محصول میدید؟
                        </span >
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
                                            className={`h-5 w-5 ${ratingValue <= (hover || rating) ?
                                                "text-yellow-500" : "text-gray-300"}`}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(rating)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <textarea
                            className="w-full p-2 border-2 rounded-lg focus:ring 
                            focus:ring-opacity-50"
                            onChange={(event) => setNewComment(event.target.value)}
                            value={newComment}
                            placeholder="نظرتون درباره این محصول چیه...؟"
                            rows='5'
                            required
                        />
                        <button type="submit" className="px-4 py-2 bg-mgreen cursor-pointer
                            rounded-lg hover:bg-violet-700 text-white">
                            ارسال نظر
                        </button>
                    </form >
                )
            }
        </>
    )
}

export default SendingComment
