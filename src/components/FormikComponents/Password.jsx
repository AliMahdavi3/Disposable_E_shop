import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = ({ formik, type, name, placeholder, label }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className={`flex flex-col pb-5`}>
            <label
                htmlFor={name}
                className={`text-xs md:text-sm font-medium text-gray-500`}
            >
                {label}
            </label>
            <div className='relative flex flex-col'>
                <Field
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className={`${formik.touched[name] && formik.errors[name] ?
                    "border-2 border-rose-600" : null} 
                    py-2 placeholder:italic placeholder:text-sm md:placeholder:text-base 
                    placeholder:ps-1 rounded-xl
                    mt-3 outline-none px-3 border-2`}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute left-5 top-6 text-lg text-gray-500"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>

            <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} />
            </div>

        </div>
    )
}

export default Password
