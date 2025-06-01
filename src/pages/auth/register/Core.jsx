import * as Yup from 'yup'
import axios from 'axios';
import { Alert } from '../../../utils/sweetalert2';


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
    // console.log(values);
    const { confirm_password, ...dataToSend } = values;
    try {
        const response = await axios.post('http://localhost:4000/auth/register', dataToSend);
        if (response.status === 201) {
            console.log(response);
            Alert('عملیات موفقیت آمیز بود!', 'ثبت نام انجام شد', 'success');
            navigate('/login');

        } else {
            Alert('خطایی سمت سرور رخ داده است!', '404', 'warning');
        }
    } catch (error) {
        console.log(error.message);
        Alert('خطایی رخ داده است!', error.message, 'error');
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
