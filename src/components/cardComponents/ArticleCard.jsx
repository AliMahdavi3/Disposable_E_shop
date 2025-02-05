import React from 'react'
import { convertDateToJalali } from '../../utils/convertDate'
import { FaEye, FaHeart } from 'react-icons/fa'

const ArticleCard = ({ article, modify }) => {
    return (
        <div className="col-span-3 md:col-span-1">
            <a href={`/blog/${article._id}`} target='_blank' rel='noopener noreferrer'>
                <div className='rounded-xl md:col-span-1 relative'>
                    <img className='rounded-xl w-full h-60 object-cover'
                        src={'http://localhost:4000/' + article.imageUrl} alt={article.title} />
                    <div className='absolute px-5 rounded-xl bg-gray-700 bg-opacity-40
                        hover:bg-opacity-20 h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                        {
                            modify ? (
                                <p className='bg-gray-300 mb-2 w-full py-2 rounded-xl px-2 font-semibold 
                                    text-xl text-white navbar_shadow bg-opacity-50'>
                                    پربازدید ترین مقاله
                                </p>
                            ) : null
                        }
                        <h5 className='font-semibold text-white navbar_shadow
                            hover:text-xl hover:mb-3 mb-2 text-lg duration-300 px-1'>
                            {article.title}
                        </h5>
                        <p className={`${modify ? "line-clamp-2" : "line-clamp-3"} px-1
                            navbar_shadow text-white text-xs md:text-sm duration-300 font-medium`}>
                            {article.content}
                        </p>
                        <div className='mt-5 px-1 text-sm text-white navbar_shadow'>
                            <p><span>نوشته شده توسط : </span>{article.author.name}</p>
                            <div className='mt-2 flex items-center'>
                                <p className='me-3'>
                                    <span>در تاریخ : </span>{convertDateToJalali(article.createdAt)}
                                </p>
                                <p className='flex items-center'>
                                    <FaHeart className='me-2' />
                                    <span className='text-xs me-3'>
                                        {article.likes}
                                    </span>
                                </p>
                                <p className='flex items-center'>
                                    <FaEye className='me-2' />
                                    <span className='text-xs me-3'>{article.views}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ArticleCard
