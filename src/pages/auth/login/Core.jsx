import * as Yup from 'yup'


export const initialValues = {
    email: "",
    phone: "",
    password: "",
    auth_mode: "phone"
}

export const onSubmit = (values) => {
    console.log(values);
    alert('OK');
}

export const validationSchema = Yup.object({
    email: Yup.string().when('auth_mode', {
        is: 'email',
        then: () => Yup.string().required("لطفا این قسمت را پر کنید")
        .email("لطفا قالب ایمیل را رعایت کنید"),
    }),

    phone: Yup.number().when('auth_mode', {
        is: 'phone',
        then: () => Yup.number().required("لطفا این قسمت را پر کنید"),
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


