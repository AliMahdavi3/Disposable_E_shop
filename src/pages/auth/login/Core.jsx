import * as Yup from 'yup'
import axios from 'axios';
import { Alert } from '../../../utils/sweetalert2';

export const initialValues = {
    email: "",
    phone: "",
    password: "",
    auth_mode: "phone"
}

const loginWithPhone = async (phone, password) => {

    try {
        const response = await axios.post('http://localhost:4000/auth/login', {
            phone,
            password,
        })
        return response.data;

    } catch (error) {
        throw error.response.data.message || 'Login failed!';
    }

}

const loginWithEmail = async (email, password) => {

    try {
        const response = await axios.post('http://localhost:4000/auth/login', {
            email,
            password,
        })
        return response.data;

    } catch (error) {
        throw error.response.data.message || 'Login failed!';
    }

}

export const onSubmit = async (values, actions, navigate) => {
    try {
        let response;
        if (values.auth_mode === 'phone') {
            response = await loginWithPhone(values.phone, values.password);
        } else {
            response = await loginWithEmail(values.email, values.password);
        }

        localStorage.setItem('token', response.token);
        await Alert('عملیات موفقیت آمیز بود!', 'شما وارد شدید', 'success')
        navigate('/');

    } catch (error) {
        console.log(error.message);
        Alert('خطایی رخ داده است!', error.message, 'error');
    }
}


export const validationSchema = Yup.object({
    email: Yup.string().when('auth_mode', {
        is: 'email',
        then: () => Yup.string().required("لطفا این قسمت را پر کنید")
            .email("لطفا قالب ایمیل را رعایت کنید"),
    }),

    phone: Yup.string().when('auth_mode', {
        is: 'phone',
        then: () => Yup.string().required("لطفا این قسمت را پر کنید"),
    }),

    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .min(8, "حداقل 8 کاراکتر")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "حداقل یک حرف کوچک و بزرگ, اعداد و کاراکتر خاص"),
});

export const authModeValue = [
    { id: 'phone', value: 'شماره موبایل' },
    { id: 'email', value: 'ایمیل' },
]