import React from 'react'
import spokenImg from "../img/spoken-english.webp"
export default function SpokenEnglish() {
    return (
        <div>
            {/* header start */}
            <div className='ieltsHead-bg'>
                <div className="ieltsHead-overlay">
                    <div className="container">
                        <div className="row py-6">
                            <div className="col-md-12">
                                <h1 className='text-white text-center'>Spoken English Course</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
            <div className="container">
                <div className="row pt-3 align-items-center">
                    <div className="col-md-6">
                        <h1 className='styled-heading'>Elevate Your English With <span> Immiconsult</span></h1>
                        <p>Step into a world of language proficiency with Immiconsult unparalleled IELTS course. Our meticulously crafted program is tailored to equip you with the skills and strategies needed to conquer the IELTS exam. Through personalized guidance and practical exercises, our experienced instructors ensure that you’re fully prepared to achieve your desired score. Whether you’re aiming for academic pursuits, career advancement, or migration goals, our comprehensive approach guarantees your success. Join us at Immiconsult and embark on your journey towards IELTS mastery.</p>
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h4>English <span> Pronunciation</span></h4>
                                <li> <i className='fas fa-gem me-2'></i> Accent Reduction</li>
                                <li> <i className='fas fa-gem me-2'></i>British And American Dialects</li>
                                <li> <i className='fas fa-gem me-2'></i>BBC And CNN</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <img src={spokenImg} className='img-fluid' alt="ielts-img" />
                    </div>
                </div>
            </div>

            {/* medules section start */}
            <div className="container py-3">
                <div className="row pt-3 coaching-module">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body spoken-basic">
                                <h4>Basic <span> Session</span></h4>
                                <li> <i className='fas fa-gem me-2'></i>Spoken English From Zero Level</li>
                                <li> <i className='fas fa-gem me-2'></i>Personalized Learning Plan For Slow Learners</li>
                                <li> <i className='fas fa-gem me-2'></i>Tips For Improving English</li>
                                <li> <i className='fas fa-gem me-2'></i>Basic Speaking</li>
                                <li> <i className='fas fa-gem me-2'></i>Basic Listening</li>
                                <li> <i className='fas fa-gem me-2'></i>Basic Conversation</li>
                                <li> <i className='fas fa-gem me-2'></i>Class Instruction</li>
                                <li> <i className='fas fa-gem me-2'></i>Class Audio Practices</li>
                                <li> <i className='fas fa-gem me-2'></i>Audio-Visual Aids</li>
                                <li> <i className='fas fa-gem me-2'></i>English Vocabulary With Pronunciation</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>Spoken English <span> Advanced Session</span></h4>
                                <li> <i className='fas fa-gem me-2'></i>Complete English Environment</li>
                                <li> <i className='fas fa-gem me-2'></i>Advanced And Creative Speaking</li>
                                <li> <i className='fas fa-gem me-2'></i>Writing Vocabulary</li>
                                <li> <i className='fas fa-gem me-2'></i>Tips For Fluent English</li>
                                <li> <i className='fas fa-gem me-2'></i>Advanced Listening Practices</li>
                                <li> <i className='fas fa-gem me-2'></i>Accent And Pronunciation Preparation</li>
                                <li> <i className='fas fa-gem me-2'></i>Group Communication</li>
                                <li> <i className='fas fa-gem me-2'></i>Interactive Spoken English Activities</li>
                                <li> <i className='fas fa-gem me-2'></i>Expand Your Vocabulary</li>
                                <li> <i className='fas fa-gem me-2'></i>Formal And Informal Contractions</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
