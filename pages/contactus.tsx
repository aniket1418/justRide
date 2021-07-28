import Head from 'next/head'
import React from 'react'
import ContactusForm from '../components/Contact'
import Footer from '../components/Footer'
import NavbarComponent from '../components/NavBar'
import WelcomeInner from '../components/WelcomeInner'

const Contactus = () => {
    return(
        <>
        <Head>
            <title>Deliver E - Contact Us</title>
            <link rel="icon" href="/images/cropped-DeliverE-2.94-192x192.png" />
        </Head>
        <NavbarComponent/>
        <WelcomeInner title="Contact Us" subtitle="We are always available for your help to make the things for easy" img="/images/contact.png"/>
        <ContactusForm/>
        <Footer/>
        </>
    )
}

export default Contactus