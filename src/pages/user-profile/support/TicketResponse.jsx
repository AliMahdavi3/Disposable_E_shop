import React, { useEffect, useState } from 'react'
import ModalContainer from '../../../components/ModalContainer'
import { getSingleTicketService, respondToTicketService } from '../../../services/contactUs';
import { Alert } from '../../../utils/sweetalert2';
import { useRef } from 'react';

const TicketResponse = ({ ticketId, respondToTicketModal, setRespondToTicketModal }) => {

    const [ticket, setTicket] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const responsesContainerRef = useRef(null);

    useEffect(() => {
        if (ticketId && respondToTicketModal) {
            const handleFetchTicket = async () => {
                try {
                    const res = await getSingleTicketService(ticketId);
                    if (res.status === 200) {
                        setTicket(res.data.ticket);
                    }
                } catch (error) {
                    console.log(error.message);
                }
            };
            handleFetchTicket();
        }
    }, [ticketId, respondToTicketModal]);

    const handleSubmitResponse = async () => {
        if (!responseMessage.trim()) {
            Alert('خطا!', 'لطفا پیام خود را وارد کنید.', 'error');
            return;
        }
        try {
            const res = await respondToTicketService(ticketId, { responseMessage });
            if (res.status === 200) {
                Alert('موفقیت!', 'پاسخ شما با موفقیت ثبت شد.', 'success');
                setResponseMessage('');
                setTicket(res.data.ticket);
            }
        } catch (error) {
            Alert('خطا!', error.message, 'error');
            console.log(error);
        }
    };

    useEffect(() => {
        if (responsesContainerRef.current && ticket?.responses) {
            responsesContainerRef.current.scrollTo({
                top: responsesContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [ticket?.responses]);

    return (
        <ModalContainer
            fullScreen={true}
            open={respondToTicketModal}
            onClose={() => setRespondToTicketModal(false)}
        >
            {ticket ? (
                <div className="border-2 border-gray-300 px-5 mt-5 rounded-md shadow-lg">
                    <div className="border-b flex justify-between items-center py-5 text-sm">
                        <p className="text-gray-500">
                            <span className="text-amber-500">نام</span> : {ticket.name}
                        </p>
                        <p className="text-gray-500">
                            <span className="text-amber-500">ایمیل</span> : {ticket.email}
                        </p>
                        <p className="text-gray-500">
                            <span className="text-amber-500">تلفن</span> : {ticket.phone}
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
                    <div className="flex flex-col py-2 text-gray-500 text-sm">
                        <p className="pb-3">
                            <span className="text-amber-500">موضوع</span> : {ticket.subject}
                        </p>
                        <p>
                            <span className="text-amber-500">توضیحات</span> : {ticket.description}
                        </p>
                    </div>

                    <div ref={responsesContainerRef}
                        className="pt-2 border-t overflow-y-auto max-h-[40vh]">
                        <h3 className="text-mgreen font-medium">پاسخ ها</h3>
                        {ticket.responses.length > 0 ? (
                            ticket.responses.map((response, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-300 
                                    py-2 text-gray-500 text-sm"
                                >
                                    <p className='mb-2 text-gray-500 dark:text-darkModeTextColor'>
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
                            <p className="text-gray-500">هنوز پاسخی ثبت نشده است.</p>
                        )}
                    </div>

                    <div className="py-5">
                        <textarea
                            className="w-full border rounded-md p-2 text-sm"
                            placeholder="پاسخ خود را وارد کنید..."
                            rows="4"
                            value={responseMessage}
                            onChange={(e) => setResponseMessage(e.target.value)}
                        ></textarea>
                        <div className='mt-2'>
                            <button
                                onClick={handleSubmitResponse}
                                className={`bg-mgreen text-white py-2 px-4 rounded-md`}
                            >
                                ثبت تیکت
                            </button>
                            <button
                                onClick={() => setRespondToTicketModal(false)}
                                className='bg-rose-500 text-white px-4 py-2 rounded-md mx-2'
                            >
                                خروج
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>هیچ تیکتی یافت نشد!</p>
            )}
        </ModalContainer>
    )
}

export default TicketResponse
