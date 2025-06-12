import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Alert, Confirm } from '../../utils/sweetalert2';

const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleLogout = async () => {
            const confirmLogout = await Confirm('آیا مطمئن هستید؟', 'شما میخواهید خارج شوید!', 'question');
            if (confirmLogout.isConfirmed) {
                try {
                    localStorage.removeItem('token');
                    await Alert("عملیات موفقیت آمیز بود!", "شما خارج شدید!", "success");
                    navigate('/login');
                } catch (error) {
                    await Alert("خطایی رخ داده است!", error.message, "error");
                    console.log(error);
                }
            }
        }
        handleLogout();
    }, [navigate]);
    return null;
}

export default Logout
