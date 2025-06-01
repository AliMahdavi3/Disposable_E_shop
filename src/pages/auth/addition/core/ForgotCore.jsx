import * as Yup from 'yup'
import axios from 'axios';
import { Alert } from '../../../../utils/sweetalert2';

export const initialValues = {
    email: "",
}

export const onSubmit = async (values, actions, navigate) => {
    try {
        const res = await axios.post('http://localhost:4000/auth/reset-password-request', {
            email: values.email
        });
        if (res.status === 200) {
            Alert('عملیات موفقیت آمیز بود!', 'لینک بازیابی به ایمیل شما ارسال شد!', 'success');
            actions.setSubmitting(false);
            actions.resetForm();
            navigate('/redirect');
        }
    } catch (error) {
        Alert('خطایی رخ داده!', error.message, 'error');
        actions.setSubmitting(false);
        console.log(error);
    }
}


export const validationSchema = Yup.object({
    email: Yup.string().email('لطفا قالب ایمیل را رعایت کنید!')
        .required('لطفا ایمیل خود را وارد کنید!'),
});