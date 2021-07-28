import React from 'react'

const NewSection =() => {
    return (
        <>
        <section style={{backgroundColor:"#5b5ca6"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h3 style={{color: "white", fontSize:"50px"}} className="text-center mt-4 mb-5">News And Insights</h3>
                    </div>
                    <div className="col-xl-4">
                        <img src="/images/ColumbiaBuildLabLogo1-768x288.png" alt="ColumbiaBuild Lab Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default NewSection;