import React from 'react'

const Content = ({ data }) => {
    return (
        <div className='md:px-10'>
            <span className='text-lg md:text-2xl text-mblack'>توضیحات محصول :</span>
            <p className='mt-5 font-medium text-xs md:text-base text-mblack'>
                {data.product.content}
            </p>
        </div>
    )
}

export default Content
