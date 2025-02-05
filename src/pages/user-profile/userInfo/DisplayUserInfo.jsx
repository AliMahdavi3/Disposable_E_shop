import React from 'react'

const DisplayUserInfo = ({ editUserInfo }) => {

    const UserInfo = ({ label, value, grid }) => {
        return (
            <div className={`${grid ? "col-span-2" : "col-span-2 md:col-span-1"}`}>
                <div className='pb-5 text-lg cursor-pointer flex justify-between'>
                    <p className='text-xs md:text-base'>
                        <span className='text-violet-700' >
                            {label}
                        </span>
                        <span className='ms-2 px-3 text-gray-600'>
                            {value}
                        </span>
                    </p>
                </div><hr />
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-8 mt-10">
            <UserInfo label={'نام و نام خانوادگی:'} value={editUserInfo?.name} />
            <UserInfo label={'ایمیل:'} value={editUserInfo?.email} />
            <UserInfo label={'تلفن همراه:'} value={editUserInfo?.phone} />
            <UserInfo label={'استان:'} value={editUserInfo?.city} />
            <UserInfo label={'کدپستی:'} value={editUserInfo?.zipCode} />
            <UserInfo label={'تاریخ تولد:'} value={editUserInfo?.birthDate} />
            <UserInfo label={'آدرس:'} value={editUserInfo?.address} grid={true} />
        </div>
    )
}

export default DisplayUserInfo
