import React from 'react';
import style from '../styles/ComponentStyles/WelcomeSection.module.scss'
import aboutStyle from '../styles/ComponentStyles/About.module.scss'
const AboutSection = () => {
     return (
         <>
         <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-12">
                        <div className={aboutStyle.headingTitle}>
                            <h3 className={style.pageTitleHeading}>Last Mile Delivery Solution Provider </h3>
                                <p>Electric Last – Mile delivery provider that focuses on cheap, 
                                    reliable and convenient delivery while also caring about the environment.
                                    Our riders are dedicated to the service of the community and our clients
                                    in order to ensure a transparent and seamless experience. 
                                </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className={aboutStyle.box}>
                                    <div className={aboutStyle.imageIconSection}>
                                        <img src="/images/fast-delivery-150x150.jpg" alt="fast-delivery-icon" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className={aboutStyle.text}>
                                    <h5 className={aboutStyle.headingTag}>Fast Delivery</h5>
                                    <p>The moment we receive our order, we ensure that the customer receives it within the stipulated time. </p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-4">
                                <div className={aboutStyle.box}>
                                    <div className={aboutStyle.imageIconSection}>
                                        <img src="/images/secured-150x150.jpg" alt="fast-delivery-icon" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className={aboutStyle.text}>
                                    <h5 className={aboutStyle.headingTag}>Secured Delivery</h5>
                                    <p>We ensure that the goods, groceries, foods are delivered and tracked, Safe and sound.  </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-4">
                                <div className={aboutStyle.box}>
                                    <div className="imageIconSection">
                                        <img src="/images/low-cost-150x150.jpg" alt="fast-delivery-icon" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className={aboutStyle.text}>
                                    <h5 className={aboutStyle.headingTag}>Low Cost Delivery </h5>
                                    <p>Our technology at DeliverE ensures that we deliver goods, groceries and foods at a low cost.  </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className={aboutStyle.imageSection}>
                            <img src="/images/aboutdeliverE.jpg" alt="about-Deliver-imaage" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
         </section>
         </>
     )
}


export default AboutSection;