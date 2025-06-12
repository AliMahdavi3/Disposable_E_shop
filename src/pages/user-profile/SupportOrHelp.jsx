import React, { useEffect, useState } from 'react'
import ModalContainer from '../../components/ModalContainer'
import TicketToSupport from '../contactUs/ticketSystem/TicketToSupport'
import { getUserAllTicketsService } from '../../services/contactUs';
import TicketResponse from './support/TicketResponse';

const SupportOrHelp = () => {
    const [data, setData] = useState([]);
    const [createTicketModal, setCreateTicketModal] = useState(false);
    const [respondToTicketModal, setRespondToTicketModal] = useState(false);
    const [selectedTicketId, setSelectedTicketId] = useState(null);

    useEffect(() => {
        const handleFetchTickets = async () => {
            try {
                const res = await getUserAllTicketsService();
                if (res.status === 200) {
                    setData(res.data.tickets);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        handleFetchTickets();
    }, []);


    const handleViewTicket = (ticketId) => {
        setSelectedTicketId(ticketId);
        setRespondToTicketModal(true);
    };

    return (
        <section className="border-2 mt-5 px-5 py-5 h-fit w-full rounded-lg">
            <div className='flex justify-between items-center border-b-2 border-mgreen pb-3'>
                <button className='text-sm text-gray-500'>
                    پشتیبانی / راهنمایی
                </button>
                <button onClick={() => setCreateTicketModal(true)}
                    className='py-2 px-5 bg-mgreen text-white font-medium text-sm rounded-md'>
                    ارسال تیکت به پشتیبانی
                </button>
            </div>

            <ModalContainer
                fullScreen={true}
                open={createTicketModal}
                onClose={() => setCreateTicketModal(false)}
            >
                <TicketToSupport />
                <button
                    onClick={() => setCreateTicketModal(false)}
                    className='bg-rose-300 hover:bg-rose-500 text-white w-full py-2 
                    my-2 rounded-md'
                >
                    خروج
                </button>
            </ModalContainer>

            {
                data?.length > 0 ? (
                    <ul>
                        <li className='flex justify-between items-center py-2 border-b
                            text-amber-500 text-xs'>
                            <span className='w-[20%]'>موضوع</span>
                            <span className='w-[50%]'>توضیحات</span>
                        </li>
                        {
                            data?.map((t, index) => (
                                <li key={index} className='border-b py-3 flex justify-between items-center
                            text-sm text-gray-500'>
                                    <span className='w-[20%] line-clamp-1 truncate'>{t.subject}</span>
                                    <span className='w-[50%] line-clamp-1 truncate'>{t.description}</span>
                                    <button
                                        onClick={() => handleViewTicket(t._id)}
                                        className='bg-mgreen text-white px-2 py-1
                                rounded-md text-sm'
                                    >
                                        مشاهده
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <div className='col-span-3 flex flex-col justify-center items-center mt-10'>
                        <img className='w-[25%] border-4 rounded-full'
                            src="/assets/images/profile/ticket.png"
                            alt="orders"
                        />
                        <p className='mt-2 text-xs md:text-lg font-medium text-gray-400'>
                            هنوز تیکتی ثبت نکرده اید..!
                        </p>
                    </div>
                )
            }

            <TicketResponse
                ticketId={selectedTicketId}
                respondToTicketModal={respondToTicketModal}
                setRespondToTicketModal={setRespondToTicketModal}
            />
        </section>
    )
}

export default SupportOrHelp
