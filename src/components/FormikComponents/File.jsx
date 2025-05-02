import React from 'react';
import { FastField } from 'formik';
import { FaImages } from "react-icons/fa";


const File = ({ name, formik, placeholder, isMultiple }) => {
    return (
        <div className="flex flex-col">
            <FastField>
                {({ form }) => (
                    <div className='relative'>
                        <input
                            className='absolute inset-0 cursor-pointer opacity-0'
                            onChange={(e) => {
                                const files = Array.from(e.currentTarget.files);
                                if (isMultiple) {
                                    form.setFieldValue(name, files); // Set multiple files
                                } else {
                                    form.setFieldValue(name, files[0]); // Set single file
                                }
                            }}
                            placeholder={placeholder}
                            type="file"
                            name={name}
                            id={name}
                            multiple={isMultiple} // Allow multiple only if isMultiple is true
                        />

                        <button
                            type="button"
                            className={`flex items-center justify-center w-full
                                py-4 px-5 rounded-full text-xs bg-blue-600
                                bg-opacity-25 font-medium text-gray-500
                                transition duration-200 ease-in-out`}
                        >
                            <span>بارگذاری {placeholder}</span>
                            <FaImages className='mr-2' />
                        </button>

                        <div className="mt-1 px-2">
                            <p className="text-xs font-medium text-gray-400">
                                فایل های انتخاب شده :
                            </p>
                            {formik.values[name] && formik.values[name].length > 0 ? (
                                isMultiple ? (
                                    <ul className="pl-5 mt-1">
                                        {Array.isArray(formik.values[name]) &&
                                            formik.values[name].map((file, index) => (
                                                <li
                                                    key={index}
                                                    className="text-xs text-gray-400"
                                                >
                                                    {file.name}
                                                </li>
                                            ))}
                                    </ul>
                                ) : (
                                    <p className="text-xs text-gray-400">
                                        {formik.values[name]?.name}
                                    </p>
                                )
                            ) : (
                                <p className="text-xs text-gray-400 italic">
                                    هیچ فایلی انتخاب نشده
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </FastField>
        </div>
    )
}

export default File
