import * as Yup from 'yup'


export const initialValues = {
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
}

export const onSubmit = (values) => {
    console.log(values);
}

export const validationSchema = Yup.object({
    email: Yup.string().required("لطفا این قسمت را پر کنید")
    .email("لطفا قالب ایمیل را رعایت کنید : aaa@example.bbb"),
    phone: Yup.number().required("لطفا این قسمت را پر کنید"),
    password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .min(8, "حداقل 8 کاراکتر")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
     "حداقل یک حرف کوچک و بزرگ, اعداد و کاراکتر خاص"),
    confirm_password : Yup.string()
    .oneOf([Yup.ref('password') , ''], 'با رمزعبور همخوانی ندارد')
    .required('لطفا این قسمت را پر کنید'),
});
