import React from 'react'

const AboutSection = ({ scrollToSectionRef }) => {
    return (
        <div ref={scrollToSectionRef} className="container py-5 md:py-10">
            <div className="grid grid-cols-2 bg-gray-100 bg-opacity-50 px-8 md:px-10 py-5 md:py-10
                rounded-2xl box_shadow h-fit w-full">
                <div className='col-span-2 md:col-span-1 text-center md:text-start'>
                    <h2 className='mt-3 lg:mt-10 font-semibold text-gray-500 md:text-3xl'>
                        درباره تک شاپ
                    </h2>
                    <p className='mt-3 lg:mt-20 font-medium text-gray-500 text-xs md:text-base'>
                        لورم ایپسوم متن ساختگی
                        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طرا
                        حان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                        و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتا
                        بهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                        جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                        زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
                        و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                        سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
                <div className='mt-5 col-span-2 md:col-span-1 flex justify-center items-center'>
                    <img
                        className='w-[70%]'
                        src="/assets/images/about/Frame.png"
                        alt="about_image"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
