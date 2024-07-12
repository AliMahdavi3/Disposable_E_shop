import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Promote = () => {

    const [promote, setPromote] = useState([]);

    useEffect(() => {
        const fetchBanner = async () => {
            try {

                const response = await axios.get('http://localhost:4000/api/banners');
                setPromote(response.data.banners);

            } catch (error) {
                console.log('error fetching banners', error);
            }
        }
        fetchBanner();
    }, [])

    return (
        <div className='pt-12 container'>
            {
                promote.map((b) => (
                    <img key={b._id} src={'http://localhost:4000/' + b.imageUrl} alt="" />
                ))
            }
        </div>
    )
}

export default Promote
