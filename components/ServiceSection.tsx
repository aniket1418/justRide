import React from 'react'
import commonStyle from '../styles/ComponentStyles/WelcomeSection.module.scss'
import style from '../styles/ComponentStyles/Service.module.scss'
import ServiceCard from './serviceCard'

const ServiceSection = () => {
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 ">
                    <div className="headingSection text-center">
                        <h3 className={commonStyle.pageTitleHeading}>Why To Choose <span className={style.spanColor}>Deliver E</span> </h3>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ServiceCard icon="/images/flash.png" title="Efficent" about="At DeliverE, We achieve maximum productivity with minimum wasted efforts. "/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ServiceCard icon="/images/bike.png" title="Fast" about="We at DeliverE offer one of the fastest last-mile delivery services in all major cities. "/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ServiceCard icon="/images/money-bag.png" title="Cost Effective" about="DeliverE provides cheap and cost-effective delivery solutions in all major cities."/>
                </div>
            </div> 

            <div className="row mt-5">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ServiceCard icon="/images/eco.png" title="Enviornment Friendly" about="DeliverE offers environment-friendly delivery solutions with E-Bike or E-Scooter. "/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ServiceCard icon="/images/check.png" title="Focused On Quality" about="At DeliverE our one of the most important usp is, we focus on delivering quality services for you. "/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <ServiceCard icon="/images/lung.png" title="Zero CO2 Emission" about="DeliverE Contributing Zero CO2 Emissions with its environment-friendly delivery services. "/>
                </div>
            </div>  
            </div>
        </>
    )
}

export default ServiceSection