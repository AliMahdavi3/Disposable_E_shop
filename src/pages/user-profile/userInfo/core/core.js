import * as Yup from 'yup';
import { editUserInfoService } from '../../../../services/profile';
import { Alert } from '../../../../utils/alert';

export const initialValues = {
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    zipCode: '',
}

export const onSubmit = async (values, actions, setOpen, editId, setForceRender) => {
    console.log(editId);
    try {
        const res = await editUserInfoService(editId, values);
        if (res.status === 200) {
            setForceRender(last => last + 1);
            Alert('عملیات موفقیت آمیز بود!', 'اطلاعات کاربری ویرایش شد!', 'success');
            setOpen(false);
            actions.resetForm();
        }
    } catch (error) {
        console.error(error);
        Alert('Error!', error.message, 'error');
    }
};

export const validationSchema = Yup.object({
    name: Yup.string().required("لطفا این قسمت را پر کنید"),
    email: Yup.string().required("لطفا این قسمت را پر کنید")
    .email("لطفا قالب ایمیل را رعایت کنید : aaa@example.bbb"),
    phone: Yup.string().required("لطفا این قسمت را پر کنید"),
    city: Yup.string().required('لطفا شهر خود را وارد کنید'),
    address: Yup.string().required('لطفا آدرس خود را وارد کنید'),
    zipCode: Yup.string().required('لطفا کد پستی خود را وارد کنید'),
});