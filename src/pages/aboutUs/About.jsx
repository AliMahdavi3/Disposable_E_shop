import React, { useRef } from 'react'
import Footer from '../../components/Footer';
import MainPoster from './MainPoster';
import AboutSection from './AboutSection';
import Customers from './Customers';
import TrustUs from './TrustUs';
import Questions from './Questions';
import OurServices from './OurServices';

const About = () => {
    const scrollToSectionRef = useRef(null);
    const handleScrollToSection = () => {
        scrollToSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <MainPoster handleScrollToSection={handleScrollToSection} />
            <AboutSection scrollToSectionRef={scrollToSectionRef} />
            <Customers />
            <TrustUs />
            <Questions />
            <OurServices />
            <Footer />
        </>
    )
}

export default About
