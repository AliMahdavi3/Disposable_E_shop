import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import ModalButton from './ModalButton'
import ModalContainer from '../../../components/ModalContainer'
import FormikControl from '../../../components/FormikComponents/FormikControl';
import SubmitButton from '../../../components/FormikComponents/SubmitButton';
import { initialValues, onSubmit, validationSchema } from './core/pCore';

const ChangePassword = ({ editId }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className='mt-5'>
            <ModalButton setOpen={setOpen} title={'تغییر رمزعبور'} />
            <ModalContainer fullScreen={true} open={open} onClose={() => setOpen(false)}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => onSubmit(values, actions, setOpen, editId)}
                    validationSchema={validationSchema}
                >
                    {
                        formik => {
                            return (
                                <Form>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 md:col-span-1">
                                            <FormikControl
                                                control="password"
                                                formik={formik}
                                                type="password"
                                                label="رمزعبور فعلی"
                                                placeholder="رمزعبور فعلی"
                                                name="oldPassword"
                                            />
                                        </div>
                                        <div className="col-span-2 md:col-span-1">
                                            <FormikControl
                                                control="password"
                                                formik={formik}
                                                type="password"
                                                label="رمزعبور جدید"
                                                placeholder="رمزعبور جدید"
                                                name="newPassword"
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
        </div>
    )
}

export default ChangePassword
