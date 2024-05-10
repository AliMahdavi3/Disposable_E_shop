import { useContext, useState } from "react";
import { createContext } from "react";

const NavbarContext = createContext();
export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({children}) => {
    const [isSolid, setIsSolid] = useState(false);

    return (
        <NavbarContext.Provider value={{isSolid, setIsSolid}}>
            {children}
        </NavbarContext.Provider>
    )
}