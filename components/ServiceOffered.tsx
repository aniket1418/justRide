import React from 'react'
import commonStyle from '../styles/ComponentStyles/WelcomeSection.module.scss'
import style from '../styles/ComponentStyles/ServiceOffered.module.scss'
const ServiceOffered = () => {
    return(
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-xl-12 mt-4">
                    <h3 className={commonStyle.pageTitleHeading}>Service Offered by <span className={style.colorTag}> Deliver E</span> </h3>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-xl-5 mt-5" >
                    <small className={style.serviceTag}>We offer the best Service    </small>
                    <p className={style.mainTag}>We have our presence in all major cities </p>
                    <p className={style.mainDescription}>We’re a last mile solutions provider that’s a bit different from the rest
                    – we’re not franchised and our drivers are just regular people looking to earn 
                    a few extra dollars in their spare and under-utilised time. At deliverE, we pride
                    in honest, reliable and hard-working people who value good customer service, 
                    on-time delivery. Our electric fleet, battery swapping and advanced analytics 
                    ensures that we deliver on time. </p>
                </div>

                <div className="col-xl-7" >
                    <div className="row mt-5">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12" >
                            <div className={style.mainCard}>
                            <div className="card" style={{border:"0"}}>
                                {/* <div className="card-image">
                                    <img src="/images/Grocery-image-360x360.jpg" alt=""  className="img-fluid"/>
                                </div> */}
                                <div className="card-body">
                                    <p className={style.serviceCardTitle}>Hyper Local Delivery</p>
                                    <p className={style.serviceCardDescription}>We deliver foods, groceries and your cater to the necessities from the local store,
                                    be it the bakery or your favourite mithai shop </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12" >
                                <div className={style.mainCard}>  
                                    <div className="card"  style={{border:"0"}}>
                                            {/* <div className="card-image">
                                                <img src="/images/fooddeliveryimage-360x360.jpg" alt=""  className="img-fluid"/>
                                            </div> */}
                                            <div className="card-body">
                                                <p className={style.serviceCardTitle}>Delivery Partners</p>
                                                <p className={style.serviceCardDescription}>We take care of your delivery needs from the store to the doorstep, be it small 
                                                appliances or your months grocery </p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12" >
                            <div className={style.mainCard}>
                            <div className="card"  style={{border:"0"}}>
                                    {/* <div className="card-image">
                                        <img src="/images/parceldeliveryimage-360x360.jpg" alt=""  className="img-fluid"/>
                                    </div> */}
                                    <div className="card-body">
                                        <p className={style.serviceCardTitle}>Parcels</p>
                                        <p className={style.serviceCardDescription}>Using our technology, you can deliver, track and follow that gift you sent to your
                                        friend and ensure its arrival on time</p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-xl-12">
                    <h3 className={commonStyle.pageTitleHeading}>Why EV ?</h3>
                    <p className={style.whyEv}>We are motivated by the desire to serve the community sustainably and holistically. That’s why DeliverE exclusively uses e-fleets. </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 mt-5" >
                    <h3 className={style.titleHeading}>Lower pollution </h3>
                    <p className={style.titleTagPara}>Electric Vehicle helps lowering pollutions </p>
                    <p className={style.titleTagPara}>It is estimated that the last-mile delivery companies are going to be contributing to 32% more air pollution in the next 10 years using traditional 2 wheelers. </p>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="imageSection">
                        <img src="/images/delivereimage1-500x485.png" alt="lower polluation image" className="img-fluid"/>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="imageSection">
                        <img src="/images/risingfuelcost-1024x640.jpg" alt="lower polluation image" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mt-5" >
                    <h3 className={style.titleHeading}>Rising fuel costs </h3>
                    <p className={style.titleTagPara}>Rising fuel costs </p>
                    <p className={style.titleTagPara}>With petrol and diesel prices skyrocketing and oil reserves being depleted, we consciously want to participate in the clean energy transition. </p>
                </div>
            </div>

        </div>
        </>
    )
}

export default ServiceOffered