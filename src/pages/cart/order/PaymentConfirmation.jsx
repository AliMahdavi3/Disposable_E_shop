import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import useSolidNavbar from '../../../hooks/useSolidNavbar';
import { Alert } from '../../../utils/alert';
import { getConfirmPaymentService } from '../../../services/cart';

const PaymentConfirmation = () => {
    const [searchParams] = useSearchParams();
    useSolidNavbar(true);

    useEffect(() => {
        const handlePaymentConfirmation = async () => {
            try {

                const authority = searchParams.get('Authority');
                const status = searchParams.get('Status');

                console.log('Authority:', authority);
                console.log('Status:', status);

                if (!authority || !status) {
                    Alert('خطا', 'پارامترهای پرداخت ناقص هستند!', 'error');
                    return;
                }

                const res = await getConfirmPaymentService({ authority, status });
                console.log('API Call Data:', { authority, status });
                console.log('API Response:', res);
                if (res.status === 200) {
                    Alert('پرداخت موفقیت آمیز بود!', 'سفارش شما با موفقیت ثبت شد.', 'success');
                } else {
                    Alert('خطا', res.data.message || 'مشکلی در تایید پرداخت وجود دارد.', 'error');
                }

            } catch (error) {
                console.error(error);
                Alert('خطا', 'مشکلی در پردازش پرداخت وجود دارد.', 'error');
            }
        }

        handlePaymentConfirmation();
    }, [searchParams]);


    return (
        <>

            <div className="h-screen flex justify-center items-center">
                <p>پرداخت شما پردازش شد!</p>
            </div>

        </>
    )
}

export default PaymentConfirmation
