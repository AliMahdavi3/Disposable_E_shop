import React, { useEffect, useState } from 'react'
import { getNewestArticlesService } from '../../services/home';

const Articles = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNewestArticles = async () => {
            try {
                const response = await getNewestArticlesService();
                setData(response.data.articles);
                console.log(response.data.articles);
            } catch (error) {
                console.log('error fetching articles', error);
            }
        }
        fetchNewestArticles();
    }, []);

    return (
        <div className='pb-10'>
            <h1 className='text-3xl py-8 font-semibold text-mblack text-center'>جدیدترین مقالات وبسایت</h1>
            <div className="container grid gap-2 grid-cols-3">

                {
                    data?.map((a) => (
                        <div key={a._id} className='col-span-3 rounded-xl md:col-span-1 flex flex-col relative'>
                            <div className='flex-grow'>
                                <img className='rounded-xl w-full h-52 object-cover' src={'http://localhost:4000/' + a.imageUrl} alt={a.title} />
                            </div>
                            <div className='absolute px-5 rounded-xl hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href={`/blog/${a._id}`}>
                                    <h5 className='hover:text-white font-bold text-mblack hover:text-lg
                                        mb-5 text-xs duration-300'>{a.title}</h5>
                                </a>
                                <a href={`/blog/${a._id}`}>
                                    <p className='hover:text-white font-bold text-mblack
                                        text-xs duration-300 line-clamp-3'>
                                        {a.content}
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Articles
