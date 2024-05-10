import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from '../../components/Modal';
import swal from 'sweetalert';

const UserInfo = () => {
    const [open, setOpen] = useState(false);
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: ''
    });
    const [userData, setUserData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            city: '',
            address: '',
            zipCode: '',
            birthDate: ''
        }
    );

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // data is nested within a user object in the response
                setUserData(response.data.user);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put(`http://localhost:4000/auth/user/${userData._id}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            // Update the user data with the response
            setUserData(response.data.user);
            // Close the modal
            setOpen(false);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleChangePasswordSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put(`http://localhost:4000/auth/changePassword/${userData._id}`, passwordData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response.data);
            // Handle success response, maybe show a success message
            await swal({
                title: "عملیات موفقیت آمیز بود",
                text: "رمزعبور تغییر کرد!",
                icon: "success",
                button: "متوجه شدم",
            });
            setPasswordData({ oldPassword: '', newPassword: '' }); // Clear the form
        } catch (error) {
            console.error('Error changing password:', error);
            const errorMessage = error.response?.data?.message || "مشکلی رخ داده است!";
            // Handle error response, maybe show an error message
            await swal({
                title: "خطا",
                text: errorMessage,
                icon: "error",
                button: "متوجه شدم",
            });
        }
    };



    return (
        <section className="border-2 mt-5 px-5 py-10 h-fit w-full rounded-lg">
            <div className='flex justify-between border-b-4 pb-5 border-b-mgreen'>
                <h3 className='font-bold mt-2 text-rose-700'>اطلاعات حساب کاربری</h3>
                <button
                    onClick={() => setOpen(true)}
                    className='bg-mgreen text-white px-4 rounded-md py-2'>
                    ویرایش اطلاعات
                </button>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <form onSubmit={handleSubmit} className='container w-full pt-10'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col-span-2 md:col-span-1'>
                                <label className='font-medium' htmlFor="name">نام و نام خانوادگی</label>
                                <input
                                    onChange={handleInputChange}
                                    value={userData.name}
                                    placeholder='نام و نام خانوادگی' name='name' id="name" type="text"
                                    className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className='font-medium' htmlFor="email">ایمیل</label>
                                <input
                                    onChange={handleInputChange}
                                    value={userData.email}
                                    placeholder='ایمیل' id="email" name="email" type='email'
                                    className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className='font-medium' htmlFor="phone">شماره همراه</label>
                                <input
                                    onChange={handleInputChange}
                                    value={userData.phone}
                                    placeholder='شماره همراه' name='phone' id="phone" type="text"
                                    className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className='font-medium' htmlFor="city">شهر</label>
                                <input
                                    onChange={handleInputChange}
                                    value={userData.city}
                                    placeholder='شهر' id="city" name='city' type="text"
                                    className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className='font-medium' htmlFor="address">آدرس</label>
                                <input
                                    onChange={handleInputChange}
                                    value={userData.address}
                                    placeholder='آدرس' id="address" name='address' type="text"
                                    className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <label className='font-medium' htmlFor="zipCode">کد پستی</label>
                                <input
                                    onChange={handleInputChange}
                                    value={userData.zipCode}
                                    placeholder='کد پستی' id="zipCode" name='zipCode' type="text"
                                    className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                            </div>
                        </div>
                        <div className='pt-5'>
                            <button className='bg-mgreen rounded-md  text-white px-4 py-2' type='submit'>تایید</button>
                            <button className='bg-rose-600 rounded-md ms-3 text-white px-4 py-2'
                                onClick={() => setOpen(false)}>انصراف</button>
                        </div>
                    </form>
                </Modal>

            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                نام و نام خانوادگی :
                            </span>
                            <span className='ms-2 px-3 text-gray-600'>
                                {userData.name}
                            </span>
                        </p>
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                تاریخ تولد :
                            </span>
                            <span className='ms-2 px-3 text-gray-600'>
                                {userData.birthDate}
                            </span>
                        </p>
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                ایمیل :
                            </span>
                            <span className='ms-2 px-3 text-gray-600'>
                                {userData.email}
                            </span>
                        </p>
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                تلفن همراه :
                            </span>
                            <span className='ms-2 px-3 text-gray-600'>
                                {userData.phone}
                            </span>
                        </p>
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                استان :
                            </span>
                            <span className='ms-2 text-gray-600'>
                                {userData.city}
                            </span>
                        </p>
                    </p><hr />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                کدپستی :
                            </span>
                            <span className='ms-2 text-gray-600'>
                                {userData.zipCode}
                            </span>
                        </p>
                    </p><hr />
                </div>
                <div className='col-span-2'>
                    <p className='pb-5 text-lg cursor-pointer flex justify-between'>
                        <p>
                            <span className='text-violet-700' >
                                آدرس :
                            </span>
                            <span className='ms-2 px-3 text-gray-600'>
                                {userData.address}
                            </span>
                        </p>
                    </p>
                </div>
            </div>


            {/* password-change section */}
            <div className='mt-10 flex justify-between border-b-4 pb-5 border-b-mgreen'>
                <h3 className='font-bold mt-2 text-rose-700'>تغییر رمز عبور</h3>
            </div>
            <form onSubmit={handleChangePasswordSubmit} className='container w-full pt-10'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-2 md:col-span-1'>
                        <label className='font-medium' htmlFor="oldPassword">رمز عبور فعلی</label>
                        <input
                            onChange={handlePasswordChange}
                            value={passwordData.oldPassword}
                            placeholder='رمز عبور فعلی'
                            name='oldPassword'
                            id="oldPassword"
                            type="password"
                            className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <label className='font-medium' htmlFor="newPassword">رمز عبور جدید</label>
                        <input
                            onChange={handlePasswordChange}
                            value={passwordData.newPassword}
                            placeholder='رمز عبور جدید'
                            id="newPassword"
                            name="newPassword"
                            type='password'
                            className='px-3 py-2 mt-2 rounded-lg border-2 w-full' />
                    </div>
                </div>
                <div className='pt-5'>
                    <button className='bg-mgreen rounded-md  text-white px-4 py-2'
                        type='submit'>تایید</button>
                </div>
            </form>
        </section>
    )
}

export default UserInfo
