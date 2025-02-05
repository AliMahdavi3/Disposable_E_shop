import React, { useEffect, useState } from 'react'
import { getProductCommentService } from '../../../services/product';
import CommentsList from './CommentsList';
import SendingComment from './SendingComment';

const ProductComments = ({ productId }) => {

    const [comments, setComments] = useState([]);
    const [rating, setRating] = useState(0);

    const fetchComments = async () => {
        try {
            const res = await getProductCommentService(productId);
            setComments(res.data.productComments);
            console.log(res.data.productComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [productId]);

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

    const handleRating = (rateValue) => {
        setRating(rateValue);
    };

    return (
        <>
            <div className='my-10'>
                <div className='bg-mgreen text-white font-semibold w-[60%] text-sm 
                md:text-base lg:w-[20%] text-center py-2 rounded-t-lg'>
                    نظرات درباره این محصول
                </div>
                <hr className="border-2 border-mgreen" />
            </div>

            <CommentsList comments={comments} getRatingLabel={getRatingLabel} />

            <SendingComment
                fetchComments={fetchComments}
                handleRating={handleRating}
                rating={rating}
                setRating={setRating}
                productId={productId}
            />

        </>
    )
}

export default ProductComments
