import React from 'react'
import { createPortal } from 'react-dom';
import { FaTimesCircle } from "react-icons/fa";

const ModalContainer = ({ onClose, open, children, fullScreen }) => {
    return createPortal(
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center 
            ${open ? "visible bg-black bg-opacity-30" : "invisible"} 
            transition-colors z_index`}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white shadow-md p-6 transition-all overflow-y-scroll
                ${fullScreen ? "w-full h-screen" : "rounded-xl"} scrollbar_hidden
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>

                <div className='flex justify-end items-center'>
                    <button
                        className='rounded-lg p-1 text-gray-100 bg-rose-500 cursor-pointer'
                        onClick={onClose}
                    >
                        <FaTimesCircle />
                    </button>
                </div>

                {children}

            </div>
        </div>,
        document.getElementById('modals-root'),
    )
}

export default ModalContainer
