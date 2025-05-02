import { Form, Formik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FormikControl from '../../../components/FormikComponents/FormikControl'
import useSolidNavbar from '../../../hooks/useSolidNavbar';
import { initialValues, onSubmit, validationSchema } from './core/ResetCore';

const ResetPassword = () => {

  const { token } = useParams();
  const navigate = useNavigate();
  useSolidNavbar(true);

  return (
    <div className='container my-20 lg:my-28 flex justify-center items-center'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions, token, navigate)}
        validationSchema={validationSchema}
      >
        {
          formik => {
            return (
              <div className='rounded-2xl w-full lg:w-1/3 py-10 
                shadow-md shadow-mgreen bg-white'>
                <div className="flex justify-center 
                  items-center w-full">
                  <img
                    className='w-[50%]'
                    src="/assets/images/auth.jpg"
                    alt=""
                  />
                </div>
                <div className="px-5 bg-white bg-opacity-50">

                  <p className='py-3 px-1 text-xs md:text-base
                    font-medium text-gray-500'
                  >
                    رمزعبور جدیدتون رو وارد کنید!
                  </p>

                  <Form className='px-1'>

                    <FormikControl
                      control="password"
                      formik={formik}
                      type="password"
                      name="password"
                      label="رمزعبور جدید"
                      placeholder="رمزعبور"
                    />

                    <div>
                      <button
                        type='submit'
                        disabled={formik.isSubmitting}
                        className='w-full bg-mgreen text-white
                          font-medium py-2 hover:bg-indigo-500 
                          rounded-3xl cursor-pointer text-sm md:text-base'
                      >
                        تایید رمزعبور
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            )
          }
        }
      </Formik >
    </div >
  )
}

export default ResetPassword
