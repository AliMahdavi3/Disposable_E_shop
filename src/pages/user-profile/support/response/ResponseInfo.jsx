import React from 'react'

const ResponseInfo = ({ ticket }) => {
    return (
        <>
            <div className="border-b flex flex-col md:flex-row justify-between items-center 
                py-5 text-xs md:text-sm">
                <p className="text-gray-500">
                    <span className='text-amber-400'>نام کاربر : </span>
                    <span>{ticket.name}</span>
                </p>
                <p className="text-gray-500">
                    <span className='text-amber-400'>ایمیل کاربر : </span>
                    <span>{ticket.email}</span>
                </p>
                <p className="text-gray-500">
                    <span className='text-amber-400'>تلفن کاربر : </span>
                    <span>{ticket.phone}</span>
                </p>
                <p className="text-amber-500">
                    <span>وضعیت : </span>
                    {
                        ticket.ticketStatus === 'Open' ? (
                            <span className='text-mgreen'>
                                در جریان...
                            </span>
                        ) : (
                            <span className='text-rose-400'>
                                بسته شده
                            </span>
                        )
                    }
                </p>
            </div>
            <div className="flex flex-col py-2 text-gray-500 text-xs md:text-sm">
                <p className="py-3">
                    <span className="text-amber-500">موضوع</span> : {ticket.subject}
                </p>
                <p>
                    <span className="text-amber-500">توضیحات</span> : {ticket.description}
                </p>
            </div>
        </>
    )
}

export default ResponseInfo
