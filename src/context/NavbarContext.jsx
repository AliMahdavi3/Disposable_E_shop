import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getCartCountService } from "../services/cart";
import { Alert } from "../utils/alert";

const NavbarContext = createContext();
export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    const [isSolid, setIsSolid] = useState(false);

    const fetchedCartCount = async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            setCartCount(0);
            return;
        }
        try {
            const res = await getCartCountService();
            setCartCount(res.data.count || 0);
        } catch (error) {
            if(error.response && error.response.status === 401) {
                setCartCount(0);
            } else {
                console.log(error);
                Alert('خطایی رخ داده!', error.message, 'error');
            }
        }
    }

    useEffect(() => {
        fetchedCartCount();
    }, []);


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