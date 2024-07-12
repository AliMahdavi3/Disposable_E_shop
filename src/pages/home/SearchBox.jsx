import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${input}`);
    }

    return (
        <div className="py-3 border-y-4 border-mgreen">
            <div className="container">

                <form onSubmit={handleSearch} className="flex items-center w-full border-2 border-gray-300 h-12 rounded-lg focus-within:shadow-lg
                 bg-gray-200 overflow-hidden">
                    <button type='submit' className="grid place-items-center h-full w-12 text-gray-300">
                        <FaSearch className='h-6 w-6' />
                    </button>

                    <input
                        className="h-full w-full outline-none bg-white text-gray-700 pr-2"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        id="search"
                        placeholder="جستجو در فروشگاه تک شاپ ...!"
                    />
                </form>
            </div>
        </div>

    )
}

export default SearchBox
