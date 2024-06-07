import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const NavbarContext = createContext();
export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [isSolid, setIsSolid] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        fetchedCartCount();
    }, []);

    const fetchedCartCount = async () => {

        try {

            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:4000/api/cart/count', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCartCount(response.data.count);

        } catch (error) {
            console.error('Error fetching cart count:', error);
        }

    }

    const updateCartCount = (newCount) => {
        setCartCount(newCount);
        fetchedCartCount();
    };


    return (
        <NavbarContext.Provider value={{ isSolid, setIsSolid, cartCount, updateCartCount }}>
            {children}
        </NavbarContext.Provider>
    )
}