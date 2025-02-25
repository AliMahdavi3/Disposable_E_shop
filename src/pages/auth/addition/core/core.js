import * as Yup from 'yup'
import axios from 'axios';

export const initialValues = {
    email: "",
}

export const onSubmit = async (values, actions) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/reset-password', {
            email: values.email
        });
        actions.setSubmitting(false);
        actions.resetForm();
        alert(response.data.message);
    } catch (error) {
        actions.setSubmitting(false);
        alert(error.response.data.message || 'An error occurred. Please try again.');
    }
}


export const validationSchema = Yup.object({
    email: Yup.string().email('لطفا قالب ایمیل را رعایت کنید!')
        .required('لطفا ایمیل خود را وارد کنید!'),
});