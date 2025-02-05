import React, { useState } from 'react'
import ModalContainer from '../../../components/ModalContainer'
import ModalButton from './ModalButton'
import { Form, Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './core/core';
import FormikControl from '../../../components/FormikComponents/FormikControl';
import SubmitButton from '../../../components/FormikComponents/SubmitButton';

const EditUser = ({ reInitialValues, editId, setForceRender }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <ModalButton setOpen={setOpen} title={'ویرایش اطلاعات'} />
            <ModalContainer fullScreen={true} open={open} onClose={() => setOpen(false)}>
                <Formik
                    initialValues={reInitialValues || initialValues}
                    onSubmit={(values, actions) => onSubmit(values, actions, setOpen, editId, setForceRender)}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    {
                        formik => {
                            return (
                                <Form>
                                    <div className='grid grid-cols-2 gap-4 mt-5'>
                                        <div className='col-span-2 md:col-span-1'>
                                            <FormikControl
                                                formik={formik}
                                                control="input"
                                                type="text"
                                                label="نام و نام خانوادگی"
                                                placeholder="نام و نام خانوادگی"
                                                name="name"
                                            />
                                        </div>
                                        <div className='col-span-2 md:col-span-1'>
                                            <FormikControl
                                                formik={formik}
                                                control="input"
                                                type="email"
                                                label="ایمیل"
                                                placeholder="ایمیل"
                                                name="email"
                                            />
                                        </div>
                                        <div className='col-span-2 md:col-span-1'>
                                            <FormikControl
                                                formik={formik}
                                                control="input"
                                                type="text"
                                                label="شماره همراه"
                                                placeholder="شماره همراه"
                                                name="phone"
                                            />
                                        </div>
                                        <div className='col-span-2 md:col-span-1'>
                                            <FormikControl
                                                formik={formik}
                                                control="input"
                                                type="text"
                                                label="شهر"
                                                placeholder="شهر"
                                                name="city"
                                            />
                                        </div>
                                        <div className='col-span-2 md:col-span-1'>
                                            <FormikControl
                                                formik={formik}
                                                control="input"
                                                type="text"
                                                label="آدرس"
                                                placeholder="آدرس"
                                                name="address"
                                            />
                                        </div>
                                        <div className='col-span-2 md:col-span-1'>
                                            <FormikControl
                                                formik={formik}
                                                control="input"
                                                type="text"
                                                label="کدپستی"
                                                placeholder="کدپستی"
                                                name="zipCode"
                                            />
                                        </div>
                                    </div>
                                    <SubmitButton setOpen={setOpen} />
                                </Form>
                            )
                        }
                    }
                </Formik>
            </ModalContainer>
        </>
    )
}

export default EditUser
