import React from 'react'

const AdditionalCommentBox = ({ additionalComment, setAdditionalComment }) => {
    return (
        <div className='border-2 border-gray-300 py-5 px-5 rounded-lg my-5'>
            <p className='flex items-center text-gray-500 text-xs md:text-base'>
                <span>توضیحات اضافه</span>
                <span className='ms-2'>(اختیاری)</span>
            </p>
            <textarea
                value={additionalComment}
                onChange={(e) => setAdditionalComment(e.target.value)}
                name=""
                className='w-full bg-sky-50 border-2 border-gray-300 rounded-2xl px-5
                py-3 mt-3 text-xs md:text-base placeholder:text-xs placeholder:md:text-sm'
                placeholder='شما میتونید هر توضیحی که در مورد سفارش خود دارید رو در این قسمت وارد کنید'
                id=""
                cols="30"
                rows="5"
            ></textarea>
        </div>
    )
}

export default AdditionalCommentBox
