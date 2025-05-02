import * as Yup from 'yup'
import axios from 'axios';
import { Alert } from '../../../../utils/alert';

export const initialValues = {
    password: "",
}

export const onSubmit = async (values, actions, token, navigate) => {
    try {
        const res = await axios.post('http://localhost:4000/auth/reset-password', {
            password: values.password,
            token,
        });
        if (res.status === 200) {
            Alert('عملیات موفقیت آمیز بود!', 'رمزعبور شما تغییر کرد!', 'success');
            actions.resetForm();
            navigate('/login');
        }
    } catch (error) {
        Alert('خطایی رخ داده!', error.message, 'error');
        actions.setSubmitting(false);
        console.log(error);
    }
}


export const validationSchema = Yup.object({
    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .min(8, "حداقل 8 کاراکتر")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "حداقل یک حرف کوچک و بزرگ, اعداد و کاراکتر خاص"),
});