import Head from 'next/head'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import LeadSection from '../components/LeadSection'
import NavbarComponent from '../components/NavBar'
import ServiceOffered from '../components/ServiceOffered'
import ServiceSection from '../components/ServiceSection'
import WelcomeSection from '../components/WelcomeSection'
import styles from '../styles/Home.module.scss'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deliver E - Home</title>
        <meta name="description" content="" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/images/cropped-DeliverE-2.94-192x192.png" />
      </Head>
      <NavbarComponent/>
      <WelcomeSection/>
      <AboutSection/>
      <ServiceSection/>
      <LeadSection/>
      <ServiceOffered/>
      <Footer/>
    </div>
  )
}
