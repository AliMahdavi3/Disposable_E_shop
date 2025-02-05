import React from 'react'
import { Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { authModeValue, initialValues, onSubmit, validationSchema } from './Core';
import FormikControl from '../../../components/FormikComponents/FormikControl';
import Google from '../Google';
import useSolidNavbar from '../../../hooks/useSolidNavbar';
import { useNavbarContext } from '../../../context/NavbarContext';

const Login = () => {

    const { setLoading } = useNavbarContext();
    const navigate = useNavigate();
    useSolidNavbar(true);

    return (
        <>
            <div className='mt-24 rounded-2xl pb-10 w-full h-fit flex justify-center'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => onSubmit(values, actions, setLoading, navigate)}
                    validationSchema={validationSchema}
                >
                    {
                        formik => {
                            return (
                                <div className='grid grid-cols-2 rounded-2xl shadow-md shadow-mgreen w-[85%]'>
                                    <div className="col-span-2 md:col-span-1 bg-white bg-opacity-50 pb-10 rounded-r-2xl">
                                        <div className='flex justify-between items-center px-5 md:px-10 pt-5'>
                                            <p className='text-xs text-gray-500 font-medium'>هنوز ثبت نام نکردید ؟</p>
                                            <a href='register' className='text-xs rounded-3xl bg-gray-50 border-2 px-2 md:px-5
                                            hover:text-indigo-500 cursor-pointer py-1'>ثبت نام</a>
                                        </div>

                                        <h3 className='px-5 md:px-10 pt-5 pb-5 md:text-lg font-medium text-gray-500'>ورود به حساب کاربری</h3>

                                        <Form className='px-5 md:px-10'>

                                            <Google />

                                            <FormikControl
                                                control="radio"
                                                formik={formik}
                                                name="auth_mode"
                                                options={authModeValue}
                                            />

                                            {
                                                formik.values.auth_mode === 'phone' ? (
                                                    <FormikControl
                                                        control="input"
                                                        formik={formik}
                                                        type="text"
                                                        name="phone"
                                                        label="شماره همراه"
                                                        placeholder="09123456789"
                                                    />
                                                ) : (
                                                    <FormikControl
                                                        control="input"
                                                        formik={formik}
                                                        type="email"
                                                        name="email"
                                                        label="ایمیل"
                                                        placeholder="aaa@example.bbb"
                                                    />

                                                )
                                            }

                                            <FormikControl
                                                control="input"
                                                formik={formik}
                                                type="password"
                                                name="password"
                                                label="رمزعبور"
                                                placeholder="رمزعبور"
                                            />

                                            <div className='pb-5'>
                                                <button type='submit' className='w-full bg-mgreen text-white
                                                font-medium py-2 rounded-3xl hover:bg-indigo-500 cursor-pointer'>ورود</button>
                                            </div>

                                        </Form>

                                        <div className='text-center pb-5 md:pb-0'>
                                            <a className='text-blue-600 hover:text-rose-600 text-xs' href="/login">رمزعبور خود را فراموش کرده اید ؟</a>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block sm:col-span-1 px-20 py-20 rounded-l-2xl bg-white">
                                        <img src="/assets/images/auth.jpg" alt="" />
                                    </div>
                                </div>
                            )
                        }
                    }
                </Formik >
            </div >
        </>
    )
}

export default Login
