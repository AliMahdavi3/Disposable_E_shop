import React, { useState } from 'react'
import { applyDiscountService } from '../../../services/cart';
import { Alert } from '../../../utils/sweetalert2';

const DiscountSection = ({ handleFetchedCartItems }) => {

    const [discountCode, setDiscountCode] = useState('');

    const handleApplyDiscountCode = async () => {
        try {
            if (!discountCode.trim()) {
                Alert('خطا', 'کد تخفیف نمی‌تواند خالی باشد!', 'warning');
                return;
            }

            const res = await applyDiscountService({ discountCode });
            console.log(res);
            if (res.status === 200) {
                Alert('کد تخفیف اعمال شد!', 'کد تخفیف شما با موفقیت اعمال شد.', 'success');
                handleFetchedCartItems();
                setDiscountCode('');
            }
        } catch (error) {
            console.log(error);
            Alert('خطایی رخ داده است!', error.message, 'error');
        }
    }

    return (
        <div className='mt-5'>
            <div className='w-full text-end mt-3'>
                <label
                    htmlFor=""
                    className='text-xs md:text-sm font-medium text-gray-500'>
                    آیا کد تخفیف دارید ؟
                </label>
                <div className='flex justify-between items-center gap-2 mt-3
                    text-xs md:text-sm'>
                    <button
                        onClick={handleApplyDiscountCode}
                        className='bg-mgreen text-white hover:bg-violet-500
                        rounded-md py-2 px-2 w-[25%]'>
                        تایید کد
                    </button>
                    <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className='py-2 px-2 w-[75%] border-2 rounded-md text-end'
                        placeholder='کد تخفیف خود را وارد کنید'
                    />
                </div>
            </div>
        </div>
    )
}

export default DiscountSection
