import * as Yup from 'yup'
import { Alert } from '../../../utils/sweetalert2';
import { registerService } from '../../../services/auth';


export const initialValues = {
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    zipCode: "",
    birthDate: "",
    password: "",
    confirm_password: "",
}


export const onSubmit = async (values, actions, navigate) => {
    const { confirm_password, ...dataToSend } = values;
    try {
        const res = await registerService(dataToSend);
        if (res.status === 201) {
            await Alert('عملیات موفقیت آمیز بود!', 'ثبت نام انجام شد', 'success');
            actions.resetForm();
            navigate('/login');
        }
    } catch (error) {
        if (error.response && error.response.data.message === 'User with this email already exists!') {
            await Alert('خطا!', 'کاربری با این ایمیل قبلا ثبت شده', 'error');
        } else if (error.response && error.response.data.message === 'User with this phone number already exists!') {
            await Alert('خطا!', 'کاربری با این شماره تلفن قبلا ثبت شده', 'error');
        } else {
            await Alert('خطا!', error.message, 'error');
        }
    }
}


export const validationSchema = Yup.object({
    name: Yup.string().required("لطفا این قسمت را پر کنید"),
    email: Yup.string().required("لطفا این قسمت را پر کنید")
        .email("لطفا قالب ایمیل را رعایت کنید : aaa@example.bbb"),
    phone: Yup.string().required("لطفا این قسمت را پر کنید"),
    city: Yup.string().required('لطفا شهر خود را وارد کنید'),
    address: Yup.string().required('لطفا آدرس خود را وارد کنید'),
    zipCode: Yup.string().required('لطفا کد پستی خود را وارد کنید'),
    birthDate: Yup.string().required('لطفا تاریخ تولد خود را وارد کنید!'),
    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .min(8, "حداقل 8 کاراکتر")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "حداقل یک حرف کوچک و بزرگ, اعداد و کاراکتر خاص"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'با رمزعبور همخوانی ندارد')
        .required('لطفا این قسمت را پر کنید'),
});
