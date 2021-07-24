import React from 'react'
import style from '../styles/ComponentStyles/companyCard.module.scss'

interface Props {
    title : string,
    description: string,
    img: any
}
const CompanyCard = (Props) => {
    return(
        <>
            <div className={style.companyDataCard}>
                <div className="card border-0" style={{background:"none"}}>
                    <div className={style.iconSection}>
                        <img src={Props.img} alt="icon" className="img-fluid"/>
                    </div>
                    <div className="card-body">
                        <h3 className={style.cardTitle}>{Props.title}</h3>
                        <p>{Props.description}</p>         
                    </div>
                </div>
            </div>
        </>
    )
}


export default CompanyCard