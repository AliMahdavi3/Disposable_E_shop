import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const Logout = () => {

    const navigate = useNavigate()
    const handleLogout = async () => {

        await swal({
            title: "خروج از حساب ؟",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((result) => {
            if (result) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
    }

    useEffect(() =>{
        handleLogout();
        window.history.replaceState(null, '', '/login');
    });

    return null;

}

export default Logout
