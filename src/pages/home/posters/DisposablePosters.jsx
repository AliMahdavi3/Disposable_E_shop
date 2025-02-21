import React, { useEffect, useState } from 'react'
import { getBannersService } from '../../../services/home';
import { apiPath } from '../../../services/httpService';

const DisposablePosters = ({ index }) => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await getBannersService();
                if (res.status === 200) {
                    setBanners(res.data.banners);
                    console.log(res.data.banners);
                }
            } catch (error) {
                console.log('error fetching banners', error);
            }
        }
        fetchBanner();
    }, []);

    if (banners.length === 0 || index >= banners.length) {
        return null;
    }

    const { imageUrl } = banners[index];

    return (
        <div className='container w-full pt-12'>
            <div className='grid grid-cols-4 gap-2 md:gap-5'>
                {imageUrl.map((img, imgIndex) => (
                    <div key={imgIndex} className="col-span-2 md:col-span-1 rounded-xl">
                        <img
                            className='rounded-xl box_shadow'
                            src={`${apiPath}/${img}`}
                            alt={`promote-${imgIndex}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DisposablePosters
