import { ErrorMessage, FastField } from 'formik'
import React, { useEffect, useState } from 'react'
import JMoment from 'moment-jalaali';
import { FaCheckCircle } from "react-icons/fa";


const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const months = [
    { id: 1, value: 'فروردین' },
    { id: 2, value: 'اردیبهشت' },
    { id: 3, value: 'خرداد' },
    { id: 4, value: 'تیر' },
    { id: 5, value: 'مرداد' },
    { id: 6, value: 'شهریور' },
    { id: 7, value: 'مهر' },
    { id: 8, value: 'آبان' },
    { id: 9, value: 'آذر' },
    { id: 10, value: 'دی' },
    { id: 11, value: 'بهمن' },
    { id: 12, value: 'اسفند' },
]

const Date = ({ name, placeholder, formik, label }) => {

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [years, setYears] = useState();
    const [showConfig, setShowConfig] = useState(false);

    useEffect(() => {
        let now = JMoment();
        setDay(now.jDate());
        setMonth(now.jMonth());
        setYear(now.jYear());
    }, []);

    const handleShowConfig = () => {
        let arr = [];
        for (let index = parseInt(year) - 100; index < parseInt(year) + 1; index++) {
            arr = [...arr, index]
        }
        setYears(arr);
        setShowConfig(true);
    }

    const handleSetInput = (e) => {
        e.stopPropagation();
        formik.setValues({
            ...formik.values,
            [name]: `${day} / ${month} / ${year}`
        })
        setShowConfig(false)
    }

    return (
        <div className="flex flex-col pb-5 relative" >
            <label htmlFor={name} className='text-xs md:text-sm font-medium text-gray-500'>{label}</label>
            <div className='relative w-full' onClick={handleShowConfig}>
                <FastField
                    id={name}
                    type='text'
                    className={`${formik.touched[name] && formik.errors[name] ? "border-2 border-rose-600" : null} 
                    py-2 w-full placeholder:italic placeholder:text-sm md:placeholder:text-base placeholder:ps-1 rounded-xl mt-3 outline-none px-3 border-2`}
                    placeholder={placeholder}
                    name={name}
                    disabled
                />
                <div className="absolute inset-0" onClick={handleShowConfig}></div>
            </div>

            {
                showConfig ? (

                    <div className='grid grid-cols-4 pt-2'>
                        <div className='col-span-1 flex justify-center items-center'>
                            <select className='border-2 border-gray-300 rounded-md px-2
                            flex items-center' value={day} onChange={(e) => setDay(e.target.value)}>
                                {
                                    days.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            <select className='border-2 border-gray-300 rounded-md px-2
                            flex items-center' value={month} onChange={(e) => setMonth(e.target.value)}>
                                {
                                    months.map((m) => (
                                        <option key={m.id} value={m.id}>{m.value}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            <select className='border-2 border-gray-300 rounded-md px-2
                            flex items-center' value={year} onChange={(e) => setYear(e.target.value)}>
                                {
                                    years.map((y, i) => (
                                        <option key={i} value={y}>{y}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div onClick={handleSetInput} className='col-span-1 flex justify-center cursor-pointer items-center'>
                            <FaCheckCircle className='text-3xl text-green-600'/>
                        </div>
                    </div>
                ) : null
            }
            <div className='text-xs font-med text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export default Date
