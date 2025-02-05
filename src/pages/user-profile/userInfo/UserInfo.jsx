import React, { useEffect, useState } from 'react'
import { initialValues } from './core/core';
import { getUserService } from '../../../services/profile';
import { Alert } from '../../../utils/alert';
import DisplayUserInfo from './DisplayUserInfo';
import ChangePassword from './ChangePassword';
import EditUser from './EditUser';

const UserInfo = () => {

    const [editUserInfo, setEditUserInfo] = useState(null);
    const [reInitialValues, setReInitialValues] = useState(initialValues);
    const [forceRender, setForceRender] = useState(0)
    const [editId, setEditId] = useState(null);

    const handleFetchUserInfo = async () => {
        try {
            const res = await getUserService();
            console.log(res);
            if (res.status === 200) {
                const currentUserInfo = res.data.user;
                setEditUserInfo(currentUserInfo);
                setEditId(currentUserInfo._id);
            }
        } catch (error) {
            console.log(error);
            Alert('خطا!', 'محصول موردنظر یافت نشد!', 'warning')
        }
    }

    useEffect(() => {
        handleFetchUserInfo()
    }, [forceRender]);


    useEffect(() => {
        if (editUserInfo) {
            setReInitialValues({
                name: editUserInfo.name || '',
                email: editUserInfo.email || '',
                phone: editUserInfo.phone || '',
                city: editUserInfo.city || '',
                address: editUserInfo.address || '',
                zipCode: editUserInfo.zipCode || '',
            });
        }
    }, [editUserInfo]);

    return (
        <section className="border-2 mt-5 px-5 py-10 h-fit w-full rounded-lg">
            <div className='flex justify-between border-b-4 pb-5 border-b-mgreen'>
                <h3 className='text-xs md:text-base font-bold mt-2 text-rose-700'>
                    اطلاعات شخصی
                </h3>
                <EditUser
                    reInitialValues={reInitialValues}
                    setForceRender={setForceRender}
                    editId={editId}
                />
            </div>
            <DisplayUserInfo editUserInfo={editUserInfo} />
            <ChangePassword editId={editId} />
        </section>
    )
}

export default UserInfo
