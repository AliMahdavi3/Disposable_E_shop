import React from 'react'
import ModalContainer from '../../../components/ModalContainer'
import TicketToSupport from '../../contactUs/ticketSystem/TicketToSupport'

const CreateTicket = ({ setCreateTicketModal, createTicketModal }) => {
    return (
        <>
            <div className='flex justify-between items-center border-b-2 border-mgreen pb-3'>
                <p className='text-xs md:text-sm text-gray-500'>
                    پشتیبانی / راهنمایی
                </p>
                <button onClick={() => setCreateTicketModal(true)}
                    className='py-2 px-5 bg-mgreen text-white font-medium
                    text-xs md:text-sm rounded-md'>
                    ارسال تیکت
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
                    className='bg-rose-500 text-white w-full py-2 
                    my-2 rounded-md'
                >
                    خروج
                </button>
            </ModalContainer>
        </>
    )
}

export default CreateTicket
