import React from 'react'
import DeaneryImg from '../images/admission.jpg';
function Deanery() {
    return (
        <section id='Deanery'>
            <div className="Deanery__container container-fluid">
                <div className="row">
                    <div className="col-sm-10 col-md-12 col-lg-4">
                        <div className="DeaneryImgBack">
                            <img src={DeaneryImg} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <h3>{'Welcome to AASTMT Deanery of Admission & Registration'}</h3>
                        <p>The Deanery of Admission and Registration acts as one of the main channels of communication between the students and the AAST. This channel starts as soon as the student is admitted, and continues as long as s/he is studying at AAST, and even after graduation. The Deanery of Admission and Registration acts as one of the main channels of communication between the students and the AAST. This channel starts as soon as the student is admitted, and continues as long as s/he is studying at AAST, and even after graduation.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deanery
