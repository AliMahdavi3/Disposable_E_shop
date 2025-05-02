import React from 'react'

const AdditionalCommentBox = ({ additionalComment, setAdditionalComment }) => {
    return (
        <div className='border-2 border-gray-300 py-5 px-5 rounded-lg my-5'>
            <p className='text-sm flex items-center text-gray-500 md:text-base'>
                <span>توضیحات اضافه</span>
                <span className='text-xs ms-2'>(اختیاری)</span>
            </p>
            <textarea
                value={additionalComment} 
                onChange={(e) => setAdditionalComment(e.target.value)}
                name=""
                className='w-full bg-sky-50 border-2 border-gray-300 rounded-2xl px-5 py-3 mt-3'
                placeholder='شما میتونید هر توضیحی که در مورد سفارش خود دارید رو در این قسمت وارد کنید'
                id=""
                cols="30"
                rows="5"
            ></textarea>
        </div>
    )
}

export default AdditionalCommentBox
