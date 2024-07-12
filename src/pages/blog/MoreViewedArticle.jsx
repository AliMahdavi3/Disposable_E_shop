import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from "jalali-moment";
import { FaEye } from 'react-icons/fa'

const MoreViewedArticle = () => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchMoreViewedArticle = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/articles/more-view');
                setArticle(response.data.article[0]);
                console.log(response.data.article[0]);
            } catch (error) {
                console.log('error fetching article', error);
            }
        }
        fetchMoreViewedArticle();
    }, []);

    if (!article || !article.author) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container pb-10 pt-20">
            <div className='rounded-xl h-screen w-full md:col-span-1 relative'>
                <a href={`/blog/${article._id}`}>
                    <img className='rounded-xl h-screen w-full box_shadow'
                        src={'http://localhost:4000/' + article.imageUrl} alt={article.title} />
                    <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                    h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                        <p className='bg-gray-300 w-full py-5 rounded-xl px-5 
                    font-bold text-4xl text-white navbar_shadow bg-opacity-50'>پربازدید ترین مقاله</p>
                        <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                    hover:text-3xl/5 my-8 text-3xl duration-300'>{article.title}</h5>
                        <p className='mb-5 line-clamp-3 text-gray-200 navbar_shadow text-lg duration-300'>
                            {article.content}
                        </p>
                        <div className='text-white navbar_shadow'>
                            <p><span>نوشته شده توسط : </span>{article.author.name}</p>
                            <p className='mt-3'><span>در تاریخ : {
                                moment(article.createdAt).locale('fa').format('YYYY/MM/DD')
                            }</span></p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MoreViewedArticle
