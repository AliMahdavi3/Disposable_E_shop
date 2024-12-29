import React from 'react'

const AboutUs = () => {
    return (
        <div className='container py-10 md:py-28'>
            <div className="container">
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-3 relative'>
                        <div className='col-span-3 md:col-span-2 relative'>
                            <img className='w-full object-cover h-[400px] rounded-xl shadow-2xl'
                                src="/assets/images/home3.jpg" alt="" />
                        </div>
                        <div className='about_section col-span-3 py-5 h-[400px] overflow-y-scroll 
                            md:overflow-auto md:py-8 md:w-[60%] bg-white bg-opacity-60 md:bg-opacity-85 
                            rounded-xl md:left-0 top-0 absolute md:col-span-1 md:mt-5 md:px-10'>
                            <h3 className='mb-3 px-3 md:text-3xl font-bold text-mgreen'>درباره فروشگاه ما</h3>
                            <p className='leading-8 px-3 text-xs font-semibold text-mblack'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                ز صنعت چاپ، و با استفاده از طراحان گرافیک است، چا
                                پگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچ
                                نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                یاز، و کاربردهای متنوع با هدف بهبود ابزارها
                                افزارها شناخت بیشتری را برای طراح
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                ز صنعت چاپ، و با استفاده از طراحان گرافیک است، چا
                                پگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچ
                                ز صنعت چاپ، و با استفاده از طراحان گرافیک است، چا
                                پگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچ
                                نان که لازم است، و برای شرایط فعلی تکنولوژی مورد ن
                                یاز، و کاربردهای متنوع با هدف بهبو
                            </p>
                            <div className='flex justify-end items-center'>
                                <a className='px-4' href="/">
                                    <button className='px-2 bg-mgreen text-white 
                            rounded-md font-semibold py-2'>بیشتر بدانید</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
