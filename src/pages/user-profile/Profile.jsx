import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import OrderHistory from './OrderHistory';
import PaymentDetaile from './PaymentDetaile';
import SupportOrHelp from './SupportOrHelp';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import useSolidNavbar from '../../hooks/useSolidNavbar';
import Favorites from './favorites/Favorites';
import { getUserService } from '../../services/profile';
import UserInfo from './userInfo/UserInfo';
import EmailConfirmation from './profile/EmailConfirmation';
import ProfileList from './profile/ProfileList';


const Profile = () => {

    const [activeSection, setActiveSection] = useState('orderHistory');
    const [userData, setUserData] = useState({ phone: '', });
    const navigate = useNavigate();
    useSolidNavbar(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token && window.location.pathname !== '/login') {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserService();
                setUserData(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchUserData();
    }, []);

    const renderSection = () => {
        switch (activeSection) {
            case 'orderHistory':
                return <OrderHistory />;
            case 'favorites':
                return <Favorites />;
            case 'paymentDetails':
                return <PaymentDetaile />;
            case 'userInfo':
                return <UserInfo />;
            case 'support':
                return <SupportOrHelp />;
            case 'logout':
                return <Logout />;
            default:
                return <OrderHistory />
        }
    }

    const handleSectionChange = (section) => {
        setActiveSection(section);
    }

    return (
        <>
            <div className='container pt-20'>
                <div className="grid grid-cols-7 gap-4 py-5">
                    <EmailConfirmation renderSection={renderSection} />
                    <ProfileList
                        handleSectionChange={handleSectionChange}
                        userData={userData}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
