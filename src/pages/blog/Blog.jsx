import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Footer from '../../components/Footer'
import { useNavbarContext } from '../../context/NavbarContext';

const Blog = () => {

    const { setIsSolid } = useNavbarContext();

    useEffect(() => {
      setIsSolid(true);
      return () => setIsSolid(false); // Revert back when leaving the page
    }, []);

    return (
        <>
            <div className="container pb-10 pt-20">              
                <div className='rounded-xl h-screen w-full md:col-span-1 relative'>
                    <a href='/blog'>
                        <img className='rounded-xl h-screen w-full' src="/assets/images/home2.jpg" alt="" />
                    </a>
                    <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                     h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                        <p className='bg-gray-300 w-full py-5 rounded-xl px-5 
                        font-bold text-4xl text-white navbar_shadow bg-opacity-50'>پربازدید ترین مقاله</p>
                        <a href="/blog">
                            <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                            hover:text-3xl/5 my-8 text-3xl duration-300'>تیتر مقاله مورد نظر</h5>
                        </a>
                        <a href="/blog">
                            <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                            text-lg duration-300'>
                                هدف بهبود ابزارها
                                نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                افزارها شناخت بیشتری را برای طراح
                                نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                افزارها شناخت بیشتری را برای طراح
                            </p>
                        </a>
                        <div className='font-semibold text-white navbar_shadow'>
                            <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                            <p><span>در تاریخ : </span>1402/22/03</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-10">
                <h1 className='font-semibold pb-5 text-mblack'>مقالاتی تازه نوشته شده</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className='rounded-xl md:col-span-1 relative'>
                            <a href='/blog'>
                                <img className='rounded-xl' src="/assets/images/home2.jpg" alt="" />
                            </a>
                            <div className='absolute px-5 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-mgreen hover:bg-opacity-35 
                                h-full py-5 top-0 right-0 w-full cursor-pointer duration-300'>
                                <a href="/blog">
                                    <h5 className='hover:text-white font-bold text-gray-200 navbar_shadow
                                     hover:text-xl mb-3 text-lg duration-300'>تیتر مقاله</h5>
                                </a>
                                <a href="/blog">
                                    <p className='pb-5 font-semibold text-gray-200 navbar_shadow
                                    text-xs md:text-md duration-300'>
                                        هدف بهبود ابزارها
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                        نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                        یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                        افزارها شناخت بیشتری را برای طراح
                                    </p>
                                </a>
                                <div className='font-semibold text-sm text-white navbar_shadow'>
                                    <p><span>نوشته شده توسط : </span>سید علی مهدوی</p>
                                    <p><span>در تاریخ : </span>1402/22/03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div dir='ltr' className="flex flex-col items-center my-12">
                        <div className="flex text-gray-700">
                            <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                <FaChevronLeft />
                            </div>
                            <div className="flex h-12 font-medium rounded-full bg-gray-200">
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2</div>
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
                                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
                                <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
                            </div>
                            <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Blog
