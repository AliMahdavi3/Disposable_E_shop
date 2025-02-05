import React from 'react';
import { FaStar } from 'react-icons/fa';

const CommentsList = ({ comments, getRatingLabel }) => {

    return (
        <div className='pb-5'>
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <div key={index} className='bg-gray-300 mb-5 rounded-lg w-full h-fit 
                        container px-5 py-5 bg-opacity-50'>
                        <div className='flex justify-between items-center pt-3'>
                            <div className='flex font-semibold text-mblack justify-center 
                                items-center text-xs md:text-sm'>
                                <p className='ml-5'>{comment.user ?
                                    comment.user.name : 'کاربر ناشناس'}</p>
                                <div className='flex'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`h-5 w-5 ${i < comment.rating ?
                                                "text-yellow-500" : "text-gray-300"}`}
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
                <p className='text-center text-gray-500'>
                    هنوز نظری برای این محصول ثبت نشده!
                </p>
            )}
        </div>
    )
}

export default CommentsList
