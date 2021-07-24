import Head from 'next/head';
import React from 'react';
import commonStyle from '../styles/ComponentStyles/WelcomeSection.module.scss'

interface Props{
    title: string,
    img: any,
    subtitle:string
}
const WelcomeInner = (Props) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6" style={{marginTop: "150px"}}>
                        <h3 className={commonStyle.pageTitleHeading}>{Props.title}</h3>
                        <p>{Props.subtitle}</p>
                    </div>
                    <div className="col-xl-6" style={{marginTop: "90px"}}>
                        <div className="imageSection">
                            <img src={Props.img} alt="About us Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeInner