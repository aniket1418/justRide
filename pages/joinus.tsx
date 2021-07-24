import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import JoinUsSectionForm from '../components/JoinUsSection'
import NavbarComponent from '../components/NavBar'
import WelcomeInner from '../components/WelcomeInner'

const JoinUs = () => {
    return(
        <>
        <Head>
            <title>Deliver E - Join us</title>
            
        </Head>
        <NavbarComponent/>
        <WelcomeInner title="Join the WonderFull Journey with us" img="/images/joinus.png" subtitle="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate"/>

        <JoinUsSectionForm/>

        <Footer/>
        </>
    )
}

export default JoinUs