import React from 'react'

const ModalButton = ({ setOpen, title }) => {
    return (
        <button
            onClick={() => setOpen(true)}
            className='bg-mgreen text-white rounded-md text-xs 
            font-medium md:text-base px-4 py-2'>
            {title}
        </button>
    )
}

export default ModalButton
