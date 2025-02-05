import React from 'react'

const SearchBox = ({ setSearchTerm }) => {
    return (
        <div className='w-full mb-4'>
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder='دنبال چه محصولی میگردید ؟'
                className='w-full box_shadow px-5 rounded-lg py-2'
            />
        </div>
    )
}

export default SearchBox
