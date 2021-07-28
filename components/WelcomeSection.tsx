import React from 'react'
import style from '../styles/ComponentStyles/WelcomeSection.module.scss'
import Image from 'next/image'
const WelcomeSection = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-6 col-sm-12 col-12 ">
                    <div className={style.mainDescriptiveHeading}>
                        <h3>Send goods more <span className={style.brandName}></span></h3>
                        <h3>Easily and Fast with <span className={style.brandName}>Deliver E</span></h3>
                        <div className={style.brandSubTitle}>
                            <p>In <span className={style.brandSubTitleTag}>a publishing </span> and graphic design, Lorem ipsum is a 
                            placeholder text commonly used to <span className={style.brandSubTitleTag}> demonstrate.</span> </p>
                        </div>
                        <button className={style.brandButton}>Let's Connect</button>
                        <span className="ml-5">Or Contact Us for further Detailsw</span>
                        
                    </div>
                </div>

                <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12 mt-5">
                    <img src="./images/welcome.png" alt="welcome-section-image" className="img-fluid"/>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="imageSection">
                        <img src="/images/image-delivery.png" alt="delivery E image" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className={style.descriptionTag}>
                        <small className={style.smallTag}>The Power Of we</small>
                        <h3 className={style.pageTitleHeading}>Growth, Revenue <br></br> and Success</h3>
                        <p className={style.boldertitleTag}>It's All possible to increase your buisness with Deliver E</p>
                        <p className={style.subtitleTag}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                            the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may
                            be used as a placeholder before final copy is available.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default WelcomeSection;