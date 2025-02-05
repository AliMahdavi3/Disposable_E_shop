import { useEffect } from 'react'
import { useNavbarContext } from '../context/NavbarContext'

const useSolidNavbar = (isSolidValue) => {
    const { setIsSolid } = useNavbarContext();
    useEffect(() => {
        setIsSolid(isSolidValue);
        return () => setIsSolid(false);
    }, [setIsSolid, isSolidValue]);
}

export default useSolidNavbar;
