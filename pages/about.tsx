import Head from 'next/head';
import React from 'react';
import AboutPageSection from '../components/AboutpageSection';
import Footer from '../components/Footer';
import NavbarComponent from '../components/NavBar';
// import TeamSectionCard from '../components/TeamSectionCard';
import WelcomeInner from '../components/WelcomeInner';

const AboutUs = () => {
    return(
        <>
        <Head>
            <title>About Us</title>
            <link rel="shortcut icon" href="/images/cropped-DeliverE-2.94-192x192.png" type="image/x-icon" />
        </Head>
        <NavbarComponent/>
        <WelcomeInner title="About us " subtitle = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the " img="/images/aboutus.png"/>
        <AboutPageSection/>
        <Footer/>
        </>
    )
}

export default AboutUs