import React, { useEffect, useState } from 'react'
import { getBannersService } from '../../services/home';

const Promote = ({ index }) => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await getBannersService();
                setBanners(response.data.banners);

            } catch (error) {
                console.log('error fetching banners', error);
            }
        }
        fetchBanner();
    }, []);

    const banner = banners[index];

    return (
        <div className='pt-12 container'>
            {banner ? (
                <img src={'http://localhost:4000/' + banner.imageUrl} alt="" />
            ) : (
                <img src='/assets/images/banner.png' alt="Default Banner" />
            )}
        </div>
    )
}

export default Promote
