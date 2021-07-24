import React from 'react'
import style from '../styles/ComponentStyles/joinus.module.scss'

const JoinUsSectionForm = () => {
    return(
        <>
        <div className="container mt-5">
            <div className="row pt-5">
                <div className="col-xl-12 text-center">
                    <h3 className={style.formheading}>Please fill the form to understand Better</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className={style.cardData}>
                        <div className="card border-0">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                      <div className={style.description}>
                                          <h3 className={style.TagHead}>For Business</h3>
                                          <p>1. Boost your revenues</p>
                                          <p>2. Prioritise by outsourcing your delivery to us</p>
                                          <p>3. Reduce pollution and join the climate change movement.</p>
                                          <p>4. Safety and anti theft measure</p>
                                          <p>5. Faster delivery times</p>
                                          <p>6. Modernized processes with tracking and geofencing</p>
                                      </div>

                                      <div className={style.description}>
                                          <h3 className={style.TagHead}>For Riders </h3>
                                          <p>1. Flexible working hours</p>
                                          <p>2. You are not tied down to only one service</p>
                                          <p>3. Same day pay (Rs.799/- for 15+ orders, Rs.499/- for 10+ orders, Rs. 249/- for 5+ orders)</p>
                                          <p>4. Rider complaint service</p>
                                          <p>5. Free EV training</p>
                                      </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card mt-4 border-0">
                                        <form action="">

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <h3 className={style.formTagHeader}>Fill out some Basic information</h3>
                                                </div>
                                            </div>
                                            <div className="row pt-2 pl-5">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Name</label>
                                                </div>
                                                <div className="col-xl-12">
                                                    <input type="text" name="" id=""className={style.inputTag} style={{width:"80%"}}  placeholder="Enter your Name"/>
                                                </div>
                                            </div>


                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Surname</label>
                                                </div>
                                                <div className="col-xl-12">
                                                    <input type="text" name="" id=""className={style.inputTag} style={{width:"80%"}} placeholder="Enter your Surname"/>
                                                </div>
                                            </div>


                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Email</label>
                                                </div>
                                                <div className="col-xl-12 ">
                                                    <input type="text" name="" id="" className={style.inputTag}  style={{width:"80%"}}  placeholder="Enter your Email"/>
                                                </div>
                                            </div>


                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Phone Number</label>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className={style.tag}>
                                                    <input type="text" name="" id="" className={style.inputTag} style={{width:"80%"}}  placeholder="Enter your Phone Number"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Purpose</label>
                                                </div>
                                                <div className="col-xl-12">
                                                   
                                                    <select className={style.selectTag}>            
                                                        <option value="">Grocery Delivery</option>
                                                            <option value="">Lime</option>
                                                            <option value="">Coconut</option>
                                                            <option value="">Mango</option>
                                                    </select>
                                                   
                                                </div>
                                            </div>

                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <button className={style.submitBtn}>Submit </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default JoinUsSectionForm