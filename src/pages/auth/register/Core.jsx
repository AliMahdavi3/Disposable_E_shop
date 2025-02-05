import * as Yup from 'yup'
import axios from 'axios';
import swal from 'sweetalert';


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

            await swal({
                title: "عملیات موفقیت آمیز بود",
                text: "ثبت نام انجام شد!",
                icon: "success",
                button: "متوجه شدم",
            });
            navigate('/login');

        } else {

            await swal({
                title: "خطایی از سمت سرور رخ داده!",
                text: "404",
                icon: "warning",
                button: "متوجه شدم",
            });
        }
    } catch (error) {
        console.log(error.message);
        await swal({
            title: "خطایی رخ داده است",
            text: error.message,
            icon: "error",
            button: "متوجه شدم",
        });
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
