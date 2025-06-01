import * as Yup from 'yup';
import { changePasswordService } from '../../../../services/profile';
import { Alert } from '../../../../utils/sweetalert2';


export const initialValues = {
    oldPassword: '',
    newPassword: '',
}

export const onSubmit = async (values, actions, setOpen, editId) => {
    console.log(editId);
    try {
        const res = await changePasswordService(editId, values);
        if (res.status === 200) {
            Alert('عملیات موفقیت آمیز بود!', 'رمزعبور تغییر کرد!', 'success');
            setOpen(false);
            actions.resetForm();
        }
    } catch (error) {
        console.error(error);
        Alert('Error!', error.message, 'error');
    }
};

export const validationSchema = Yup.object({
    oldPassword: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .min(8, "حداقل 8 کاراکتر")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        "حداقل یک حرف کوچک و بزرگ, اعداد و کاراکتر خاص"),
    newPassword: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .min(8, "حداقل 8 کاراکتر")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        "حداقل یک حرف کوچک و بزرگ, اعداد و کاراکتر خاص"),
});