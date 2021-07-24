import React from 'react'
import style from '../styles/ComponentStyles/Team.module.scss'

interface Props{
    titleName: string,
    image:any,
    designation: string,
    about: string,
    subtitle: string
}
const TeamSectionCard = (Props) => {
    return(
        <>
        <div className={style.dataCard}>
            <div className="card border-0">
                <div className="row pl-4">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                        <div className={style.authorImageSection}>
                            <img src={Props.image} alt="Team Member Image"  className="img-fluid" style={{borderRadius: "50%"}}/>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12" >
                        <div className="nameTitle">
                            <h3 className={style.titleName}>{Props.titleName}</h3>
                            <p>{Props.subtitle}</p>
                        </div>
                        <div className="roleDescription">
                            <h4 className={style.designationTitle}>{Props.designation}</h4>
                            <p className={style.describeTag}>{Props.about}</p>
                        </div>

                        <div className="contactus mb-5">
                            <button className={style.btnContact}> <span> <img src="/images/icons/linkedin.png" alt="" style={{width:"30px"}}/></span></button>
                            <button className={style.btnContact}> <span> <img src="/images/icons/facebook.png" alt="" style={{width:"30px"}}/></span></button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default TeamSectionCard