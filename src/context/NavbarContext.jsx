import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [isSolid, setIsSolid] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cartCount, setCartCount] = useState(0);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchedCartCount();
    }, [token]);

    const fetchedCartCount = async () => {
        if (!token) {
            setCartCount(0);
        } else {
            try {
                const response = await axios.get('http://localhost:4000/api/cart/count', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCartCount(response.data.count || 0);

            } catch (error) {
                console.error('Error fetching cart count:', error);
                if (error.response && error.response.status === 401) {
                    setCartCount(0);
                }
            }
        }
    }

    const updateCartCount = (newCount) => {
        setCartCount(newCount);
        fetchedCartCount();
    };


    return (
        <NavbarContext.Provider value={{
            isSolid,
            setIsSolid,
            loading,
            setLoading,
            cartCount,
            updateCartCount,
        }}>
            {children}
        </NavbarContext.Provider>
    )
}