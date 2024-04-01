import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
    return (
        <div className="py-3 border-y-4 border-mgreen">
            <div className="container">

                <div className="flex items-center w-full border-2 border-gray-300 h-12 rounded-lg focus-within:shadow-lg
                 bg-gray-200 overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <FaSearch className='h-6 w-6' />
                    </div>

                    <input
                        className="h-full w-full outline-none bg-white text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="جستجو در فروشگاه تک شاپ ...!" />
                </div>
            </div>
        </div>

    )
}

export default SearchBox
