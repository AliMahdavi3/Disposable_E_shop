import React from 'react'
import Footer from '../../components/Footer'
import TitleAndImageSection from './TitleAndImageSection'
import NewsMembership from './NewsMembership'
import BackupContact from './BackupContact'
import SocialMedia from './SocialMedia'
import GoogleMap from './GoogleMap'

const ContactUs = () => {
    return (
        <>
            <TitleAndImageSection />
            <div className='container py-20'>
                <div className="grid grid-cols-5 gap-6">
                    <NewsMembership />
                    <BackupContact />
                </div>
            </div>
            <SocialMedia />
            <GoogleMap />
            <Footer />
        </>
    )
}

export default ContactUs
