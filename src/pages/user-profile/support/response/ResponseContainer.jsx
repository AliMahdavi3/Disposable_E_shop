import React, { useEffect, useRef } from 'react'

const ResponseContainer = ({ ticket }) => {

    const responsesContainerRef = useRef(null);
    useEffect(() => {
        if (responsesContainerRef.current && ticket?.responses) {
            responsesContainerRef.current.scrollTo({
                top: responsesContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [ticket?.responses]);

    return (
        <div ref={responsesContainerRef}
            className="pt-2 container border-t overflow-y-auto max-h-[40vh]">
            <h3 className="text-mgreen font-medium text-xs md:text-sm">پاسخ ها</h3>
            {ticket.responses.length > 0 ? (
                ticket.responses.map((response, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 
                        py-2 text-gray-500 text-xs md:text-sm"
                    >
                        <p className='mb-2 text-gray-500 truncate'>
                            <span className="text-amber-500">شناسه گفتگو : </span>
                            {response.responderId}
                        </p>
                        <p className='mb-2'>
                            <span className="text-amber-500">فرستنده : </span>
                            {
                                response.responderRole === "Admin" ? (
                                    <span>مدیر وبسایت</span>
                                ) : (
                                    <span>کاربر</span>
                                )
                            }
                        </p>
                        <p className='mb-2'>
                            <span className="text-amber-500">پیام : </span>
                            {response.responseMessage}
                        </p>
                    </div>
                ))
            ) : (
                <div className='text-center text-xs md:text-sm'>
                    <p className="text-gray-500">هنوز پاسخی ثبت نشده است.</p>
                </div>
            )}
        </div>
    )
}

export default ResponseContainer
