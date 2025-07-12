import * as Yup from 'yup'
import { Alert } from '../../../utils/sweetalert2';
import { loginWithEmailService, loginWithPhoneService } from '../../../services/auth';

export const initialValues = {
    email: "",
    phone: "",
    password: "",
    auth_mode: "phone"
}

const loginWithPhone = async (phone, password) => {
    try {
        const res = await loginWithPhoneService(phone, password);
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        throw error.response.data.message || 'Login failed!';
    }
}

const loginWithEmail = async (email, password) => {
    try {
        const res = await loginWithEmailService(email, password);
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        throw error.response.data.message || 'Login failed!';
    }
}

export const onSubmit = async (values, actions, navigate) => {
    try {
        let res;
        if (values.auth_mode === 'phone') {
            res = await loginWithPhone(values.phone, values.password);
        } else {
            res = await loginWithEmail(values.email, values.password);
        }
        localStorage.setItem('token', res.token);
        actions.resetForm();
        await Alert('عملیات موفقیت آمیز بود!', 'شما وارد شدید', 'success');
        navigate('/');

    } catch (error) {
        if (error === 'User not found!') {
            Alert('خطایی رخ داده است!', 'کاربر یافت نشد!', 'error');
        } else if (error === 'Invalid password!') {
            Alert('خطایی رخ داده است!', 'رمزعبور اشتباه است!', 'error');
        } else {
            Alert('خطایی رخ داده است!', error || 'ورود ناموفق بود!', 'error');
        }
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