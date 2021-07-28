import React from 'react'
import style from '../styles/ComponentStyles/joinus.module.scss'

const ContactusForm = () => {
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
                                          <h3 className={style.TagHead}>We Located At</h3>
                                          <p>DeliverE Last Mile Delivery Solution Provider In Mumbai, India</p>
                                          <p>Location - Mumbai, India</p>
                                          <p>Mail us at - <span> <a href="mailto:office@delivere.com">office@delivere.com</a></span> </p>
                                          <p>Contact Number - <span><a href="tel:+91-9920032168">+91-9920032168</a></span></p>
                                          
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
                                                    <label htmlFor="name" className={style.label}>Email</label>
                                                </div>
                                                <div className="col-xl-12">
                                                    <input type="text" name="" id=""className={style.inputTag} style={{width:"80%"}} placeholder="Enter your Email"/>
                                                </div>
                                            </div>


                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Phone Number</label>
                                                </div>
                                                <div className="col-xl-12 ">
                                                    <input type="text" name="" id="" className={style.inputTag}  style={{width:"80%"}}  placeholder="Enter your Phone Number"/>
                                                </div>
                                            </div>


                                            <div className="row pl-5 pt-3">
                                                <div className="col-xl-12">
                                                    <label htmlFor="name" className={style.label}>Message</label>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className={style.tag}>
                                                    {/* <input type="text" name="" id="" className={style.inputTag} style={{width:"80%"}}  placeholder="Enter your Phone Number"/> */}
                                                    <textarea className={style.inputTag} style={{width:"80%"}}  ></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                           

                                            <div className="row pl-5 pt-3 pb-3">
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

export default ContactusForm