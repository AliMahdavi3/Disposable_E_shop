import React from 'react'

const SpinnerLoad = ({ small }) => {
  return (
    <div className='z_index fixed bg-mblack bg-opacity-30 inset-0 flex
      backdrop-blur-sm justify-center items-center h-screen'>
      <div className='box_shadow bg-white w-fit h-fit rounded-xl
        flex flex-col justify-center items-center py-5 md:py-6 px-5 md:px-8'>
        <div className='mb-1'>
          <p className='font-bold'>
            <span className='md:text-2xl text-mgreen'>TA</span>
            <span className='md:text-2xl text-mblack'>K</span>
            <span className='md:text-2xl text-mblack'>S</span>
            <span className='md:text-2xl text-rose-600'>HOP</span>
          </p>
        </div>
        <span className={`relative inline-block w-10 h-10 ${small ? "md:w-16 md:h-16" : "md:w-20 md:h-20"} border-2 md:border-4 border-transparent animate-spin rounded-full border-t-mgreen border-l-mgreen`}>
          <span className={`absolute inset-0 m-auto w-8 h-8 ${small ? "md:w-12 md:h-12" : "md:w-16 md:h-16"} border-2 md:border-4 border-transparent animate-spin-reverse rounded-full border-t-rose-500 border-l-rose-500`}></span>
          <span className={`absolute inset-0 m-auto w-6 h-6 ${small ? "md:w-8 md:h-8" : "md:w-12 md:h-12"} border-2 md:border-4 border-transparent animate-spin rounded-full border-t-violet-600 border-l-violet-600`}></span>
        </span>
        <h5 className='mt-2 text-gray-400 font-semibold text-xs md:text-sm'>درحال بارگذاری !</h5>
      </div>
    </div>
  )
}

export default SpinnerLoad
