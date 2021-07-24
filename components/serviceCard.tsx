import React from 'react';
// import style from '../styles/ComponentStyles/ServiceCard.module.scss'
import style from '../styles/ComponentStyles/ServiceCard.module.scss'

interface Props{
    title: string,
    about: string,
    img: any
}
const ServiceCard = (Props) => {
    return(
        <>
        <div className={style.mainCard}></div>
        <div className="card" style={{border:"0"}}>
            <div className="card-body">
                <div className={style.iconsection}>
                    <img src={Props.icon} alt="icon-image" className="img-fluid"/>
                </div>
                <div className="titleTag">
                    <h3 className={style.cardTitle}>{Props.title}</h3>
                    <p className={style.description}>{Props.about}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceCard