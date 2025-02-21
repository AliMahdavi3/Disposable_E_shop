import React, { useState } from 'react'
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (input.trim()) {
            navigate(`/search?query=${input}`);
        }
    }

    return (
        <div className="py-3 bg-gradient-to-r from-mgreen to-[#0dafa7]">
            <div className="px-3 md:px-5">

                <form onSubmit={handleSearch}
                    className="flex items-center w-full h-10 md:h-12 box_shadow
                    rounded-full focus-within:shadow-lg bg-white overflow-hidden">

                    <button type='submit'
                        className="grid place-items-center h-full w-12
                        rounded-full text-teal-500">
                        <FaSearch className='h-4 w-4 md:h-6 md:w-6' />
                    </button>

                    <input
                        className="h-full w-full outline-none bg-gray-100 box_shadow
                        rounded-full text-gray-600 pr-5 text-xs md:text-base"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        id="search"
                        placeholder="جستجو در فروشگاه تک شاپ ...!"
                    />

                    <button
                        onClick={() => setInput("")}
                        type='button'
                        className={`grid place-items-center h-full w-12 rounded-full 
                        ${input ? "text-rose-500" : "text-gray-300"}`}
                    >
                        <FaTimesCircle className='h-4 w-4 md:h-6 md:w-6' />
                    </button>

                </form>
            </div>
        </div>

    )
}

export default SearchBox
