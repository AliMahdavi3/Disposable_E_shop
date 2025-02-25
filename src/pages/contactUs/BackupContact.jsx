import React from 'react'

const BackupContact = () => {
    return (
        <div className="col-span-5 md:col-span-3">
            <h3 className='mb-5 font-bold text-mgreen text-xl'>ارسال پیام به تیم تک شاپ</h3>
            <form dir='ltr'>
                <div className='flex justify-between gap-4 items-center'>
                    <input type="text" placeholder='ایمیل' className='w-full mb-5 py-2 px-5 rounded-full bg-blue-600 bg-opacity-25' />
                    <input type="text" placeholder='شماره تلفن' className='w-full mb-5 py-2 px-5 rounded-full bg-blue-600 bg-opacity-25' />
                </div>
                <input type="text" placeholder='نام یا نام نام خانوادگی' className='text-end w-full mb-5 py-2 px-5 rounded-full bg-blue-600 bg-opacity-25' />
                <textarea placeholder='متن پیام' className='text-end w-full mb-5 py-2 px-5 rounded-3xl bg-blue-600 bg-opacity-25' name="" id="" cols="30" rows="5"></textarea>
                <button className='w-1/3 py-2 rounded-full text-white font-bold bg-blue-700 bg-opacity-45 hover:bg-violet-800'><span>ارسال پیام</span></button>
            </form>
        </div>
    )
}

export default BackupContact
