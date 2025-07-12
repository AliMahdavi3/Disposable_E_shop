import React from 'react'
import { Form, Formik } from 'formik'
// import Google from '../Google'
import { useNavigate } from 'react-router-dom';
import FormikControl from '../../../components/FormikComponents/FormikControl'
import { initialValues, onSubmit, validationSchema } from './Core'
import useSolidNavbar from '../../../hooks/useSolidNavbar';

const Register = () => {

  const navigate = useNavigate();
  useSolidNavbar(true);

  return (
    <>
      <div className='mt-24 rounded-2xl pb-10 w-full h-fit flex justify-center'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => onSubmit(values, actions, navigate)}
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
                      <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                        <div className='w-full'>
                          <FormikControl
                            control="input"
                            formik={formik}
                            type="text"
                            name="name"
                            label="نام و نام خانوادگی"
                            placeholder="نام نام خانوادگی"
                          />
                        </div>
                        <div className='w-full'>
                          <FormikControl
                            control="input"
                            formik={formik}
                            type="email"
                            name="email"
                            label="ایمیل"
                            placeholder="aaa@example.bbb"
                          />
                        </div>
                      </div>

                      <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                        <div className='w-full'>
                          <FormikControl
                            control="input"
                            formik={formik}
                            type="text"
                            name="phone"
                            label="شماره همراه"
                            placeholder="09123456789"
                          />
                        </div>

                        <div className='w-full'>
                          <FormikControl
                            control="input"
                            formik={formik}
                            type="text"
                            name="city"
                            label="استان"
                            placeholder="استان"
                          />
                        </div>
                      </div>

                      <FormikControl
                        control="input"
                        formik={formik}
                        type="text"
                        name="address"
                        label="آدرس"
                        placeholder="آدرس"
                      />

                      <FormikControl
                        control="input"
                        formik={formik}
                        type="text"
                        name="zipCode"
                        label="کد پستی"
                        placeholder="کد پستی"
                      />

                      <FormikControl
                        control="date"
                        formik={formik}
                        name="birthDate"
                        label="تاریخ تولد"
                      />

                      <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                        <div className="w-full">
                          <FormikControl
                            control="password"
                            formik={formik}
                            type="password"
                            name="password"
                            label="رمزعبور"
                            placeholder="رمزعبور"
                          />
                        </div>
                        <div className="w-full">
                          <FormikControl
                            control="password"
                            formik={formik}
                            type="password"
                            name="confirm_password"
                            label="تکرار رمزعبور"
                            placeholder="تکرار رمزعبور"
                          />
                        </div>
                      </div>

                      <div className='pb-10 md:pb-0'>
                        <button
                          type="submit"
                          disabled={formik.isSubmitting}
                          className={`w-full text-white font-medium py-2 rounded-3xl 
                            text-sm md:text-base cursor-pointer 
                            ${formik.isSubmitting ? 'bg-mgreen bg-opacity-50' : 'bg-mgreen hover:bg-indigo-500'}`}
                        >
                          {formik.isSubmitting ? 'لطفا صبر کنید...' : 'ثبت نام'}
                        </button>
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
