import React from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({ open, onClose, children }) => {
    return (
        <div
            onClick={onClose}
            className={`fixed overflow-y-scroll inset-0 flex justify-center items-center transition-colors
             z_index ${open ? "visible bg-black bg-opacity-30" : "invisible"}`}>

            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow-md p-6 transition-all
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>

                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 p-1 rounded-lg text-gray-400
                    bg-white hover:bg-gray-50 hover:text-gray-600 cursor-pointer'>
                    <IoMdClose />
                </button>

                {children}
            </div>
        </div>
    )
}

export default Modal
