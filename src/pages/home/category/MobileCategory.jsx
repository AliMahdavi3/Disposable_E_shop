import React from 'react'
import ModalContainer from '../../../components/ModalContainer'
import Category from './Category'

const MobileCategory = ({open, setOpen}) => {
  return (
    <ModalContainer open={open} onClose={() => setOpen(false)} fullScreen={true}>
        <h2 className="text-sm text-gray-500 font-medium mb-2">دسته بندی ها</h2>
        <Category responsive={true} onClose={() => setOpen(false)} />
        <button
          onClick={() => setOpen(false)}
          className="bg-rose-500 text-white w-full py-2 mb-4 rounded-md"
        >
          بستن
        </button>
      </ModalContainer>
  )
}

export default MobileCategory
