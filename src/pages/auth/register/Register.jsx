import { Form, Formik } from 'formik'
import React from 'react'
import Google from '../Google'
import FormikControl from '../../../components/FormikComponents/FormikControl'
import { initialValues, onSubmit, validationSchema } from './Core'

const Register = () => {
  return (
    <>
            <div className='h-20 rounded-b-2xl bg-gradient-to-r from-mgreen to-[#1F917C] w-full'></div>
      <div className='mt-5 rounded-2xl pb-10 w-full h-fit flex justify-center'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validationSchema}
        >
          {
            formik => {
              return (
                <div className='grid grid-cols-2 rounded-2xl shadow-md shadow-mgreen w-[85%]'>
                  <div className="col-span-2 md:col-span-1 bg-white bg-opacity-50 pb-10 rounded-r-2xl">
                    <div className='flex justify-between items-center px-5 md:px-10 pt-5'>
                      <p className='text-xs text-gray-500 font-medium'>قبلا ثبت نام کرده اید ؟</p>
                      <a href='login' className='text-xs rounded-3xl bg-gray-50 border-2 px-2 md:px-5
                    hover:text-indigo-500 cursor-pointer py-1'>ورود</a>
                    </div>

                    <h3 className='px-5 md:px-10 pt-5 pb-5
                     md:text-lg font-medium text-gray-500'>ثبت نام</h3>

                    <Form className='px-5 md:px-10'>

                      <Google />

                      <FormikControl
                        control="input"
                        formik={formik}
                        type="email"
                        name="email"
                        label="ایمیل"
                        placeholder="aaa@example.bbb"
                      />

                      <FormikControl
                        control="input"
                        formik={formik}
                        type="number"
                        name="phone"
                        label="شماره همراه"
                        placeholder="09123456789"
                      />

                      <FormikControl
                        control="input"
                        formik={formik}
                        type="password"
                        name="password"
                        label="رمزعبور"
                        placeholder="رمزعبور"
                      />

                      <FormikControl
                        control="input"
                        formik={formik}
                        type="password"
                        name="confirm_password"
                        label="تکرار رمزعبور"
                        placeholder="تکرار رمزعبور"
                      />

                      <div className='pb-10 md:pb-0'>
                        <button className='w-full bg-mgreen text-white
                        font-medium py-2 rounded-3xl hover:bg-indigo-500 cursor-pointer'>ثبت نام</button>
                      </div>
                    </Form>
                  </div>
                  <div className="hidden sm:block sm:col-span-1 px-20 py-20 rounded-l-2xl bg-white">
                    <img src="/assets/images/auth.jpg" className='mt-14' alt="" />
                  </div>
                </div>
              )
            }
          }
        </Formik>
      </div>
    </>
  )
}

export default Register