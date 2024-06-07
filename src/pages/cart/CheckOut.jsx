import React, { useEffect } from 'react'
import { useNavbarContext } from '../../context/NavbarContext';

const CheckOut = () => {

  
  const { setIsSolid } = useNavbarContext();

  useEffect(() => {
      setIsSolid(true);
      return () => setIsSolid(false);
  }, []);

  return (
    <div className='pt-20'>
      <h1>جزییات سفارش شما</h1>
    </div>
  )
}

export default CheckOut
