import React from 'react';
import commonStyle from '../styles/common.module.scss'
import style from '../styles/ComponentStyles/aboutPage.module.scss'
import CompanyCard from './companyCard';
import TeamSectionCard from './TeamSectionCard';
const AboutPageSection = () => {
    return(
        <>
            <div className="container" style={{marginTop:"100px"}}>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className={style.imageSection}>
                            <img src="/images/aboutHome.png" alt="aboutUs image title" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 offset-md-1" >
                        <div className={style.descriptionData}>
                            <h3 className={commonStyle.pageTitleHeading}>About <span className={commonStyle.brandName}> Deliver E</span></h3>
                            <p className={commonStyle.pageDescriptionTag}>DeliverE is the e-mobility driven last-mile logistics company that focuses on
                            Tier-2 cities in India, our B2B focus aims to generate greater value for (decentralized) 
                            brick-and-mortar establishments by being their reliable partner in doing deliveries. 
                            Through our service, we want to drive commerce for the local economy,  optimize the delivery
                            network, and save the environment. </p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <CompanyCard title="Vision" description="At DeliverE,we aim to revolutionalise the last mile delivery process by converting it into the most sustainable and environment friendly way possible" img="/images/vision.png"/>
                    </div>
                    <div className="col-xl-6">
                        <CompanyCard title="Mission" description="Build the best EV – (Electric Vehicle) aggregator to solve every delivery need in the most sustainable manner with cost effective solution" img="/images/mission.png"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xl-12 text-center" style={{marginTop:"100px", marginBottom: "80px"}}>
                        <h3 className={commonStyle.pageTitleHeading}>People Behind the <span className={commonStyle.brandName}> Success</span></h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Abhirat Shinde" designation="Co - Founder" about="Responsible for strategy, economics, buisness development" image="/images/team/abhirat.jpg" subtitle="SEAS/ Dec'21"/>
                    </div>

                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Sarvadnya Kulkarni" designation="Co - Founder" about="Responsible for Investor Relations, Business Development & Marketing" image="/images/team/sarnadnya.jpg" subtitle="SEAS/ Dec'21"/>
                    </div>

                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Ayush Sharma" designation="Head of Technology" about="Responsible for product development, and analytics" image="/images/team/ayush.jpeg" subtitle="SEAS/ Dec'21"/>
                    </div>

                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Soumya Agrawal" designation="Technology Team" about="Responsible for the cloud computing " image="/images/team/soumya.jpeg" subtitle="SEAS/ Dec'21"/>
                    </div>

                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Vani Jain" designation="Technology Team" about="Responsible for the cloud computing " image="/images/team/vani.jpeg"subtitle="SEAS/ Dec'21"/>
                    </div>


                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Gaurav Yadav" designation="Market Research Team" about="Responsible for identifying markets & researching GTM strategies" image="/images/team/gaurav.jpeg" subtitle="MNNIIT/ June'21"/>
                    </div>

                    <div className="col-xl-6">
                        <TeamSectionCard titleName="Akhil Ravella" designation="Policy and Regulatory Team" about="Responsible for government liaisoning for permissions & grants, & researching regulatory issues" image="/images/team/akhil.jpg" subtitle="TISS(India)/ June'21"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageSection;