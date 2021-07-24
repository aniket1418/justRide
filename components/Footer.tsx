import React from 'react';
import style from '../styles/ComponentStyles/Footer.module.scss'
const Footer = () => {
    return(
        <>
        <section className={style.FooterBG}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                        <div className={style.mainDescription}>
                            <small className={style.smallTag}>Don't be Stranger</small>
                            <h3>Let's Connect to Deliver E</h3>
                            <p style={{width:"90%"}}>Electric Last – Mile delivery provider that focuses on cheap, reliable and convenient delivery while also caring about the environment. Our riders are dedicated to the service of the community and our clients in order to ensure a transparent and seamless experience.</p>
                            <button>Let's Chat with us</button>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                <div className={style.mainFooterDesc}>
                                    <h3 className={style.footerTitle}>Quick Links</h3>
                                        <li><a href="http://">Home</a></li>
                                        <li><a href="http://">About Us</a></li>
                                        <li><a href="http://">Join Us</a></li>
                                        <li><a href="http://">Contact Us</a></li>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                               <div className={style.mainFooterDesc}>
                                <h3 className={style.footerTitle}>Service Offered</h3>
                                    
                                    <li><a href="http://">Hyper Local Delivery</a></li>
                                    <li><a href="http://">Delivery Partners</a></li>
                                    <li><a href="http://">Parcels</a></li>
                               </div>
                                
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                <div className={style.mainFooterDesc}>
                                    <h3 className={style.footerTitle}>Contact Inof</h3>
                                    
                                    <li><a href="http://">Email - hello@delivere.com</a></li>
                                    <li><a href="http://">Ph. no. - +91-9920032168</a></li>
                                    <li><a href="http://">Location - Mumbai | India</a></li>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer