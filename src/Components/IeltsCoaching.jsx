import React from 'react'
import ieltsImg from "../img/ielts-img.webp"
export default function IeltsCoaching() {
    return (
        <div>
            {/* header start */}
            <div className='ieltsHead-bg'>
                <div className="ieltsHead-overlay">
                    <div className="container">
                        <div className="row py-6">
                            <div className="col-md-12">
                                <h1 className='text-white text-center'>IELTS Coaching</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
            <div className="container">
                <div className="row pt-3 align-items-center">
                    <div className="col-md-6">
                        <h1 className='styled-heading'>Mastering The IELTS With <span> Immiconsult</span></h1>
                        <p>Step into a world of language proficiency with Immiconsult unparalleled IELTS course. Our meticulously crafted program is tailored to equip you with the skills and strategies needed to conquer the IELTS exam. Through personalized guidance and practical exercises, our experienced instructors ensure that you’re fully prepared to achieve your desired score. Whether you’re aiming for academic pursuits, career advancement, or migration goals, our comprehensive approach guarantees your success. Join us at Immiconsult and embark on your journey towards IELTS mastery.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ieltsImg} className='img-fluid' alt="ielts-img" />
                    </div>
                </div>
            </div>
            {/* medules section start */}
            <div className="container py-3">
                <div className="row coaching-module">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Listening <span> Module</span></h4>
                                <li> <i className='fas fa-gem me-2'></i> Listening Test Description</li>
                                <li> <i className='fas fa-gem me-2'></i>Tips And Secrets Of IELTS Listening</li>
                                <li> <i className='fas fa-gem me-2'></i>Listening Skill Building</li>
                                <li> <i className='fas fa-gem me-2'></i>Listening Section 1, 2 & 3</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Reading <span> Module</span></h4>
                                <li> <i className='fas fa-gem me-2'></i>Reading Test Description</li>
                                <li> <i className='fas fa-gem me-2'></i>Tips And Secrets Of IELTS Reading</li>
                                <li> <i className='fas fa-gem me-2'></i>Reading Skill Building</li>
                                <li> <i className='fas fa-gem me-2'></i>Reading Passage 1, 2 & 3</li>
                                {/* <li> <i className='fas fa-gem me-2'></i>Full Length Reading Test</li> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Writing <span> Module</span></h4>
                                <li> <i className='fas fa-gem me-2'></i>Writing Test Description</li>
                                <li> <i className='fas fa-gem me-2'></i>Tips And Secrets Of IELTS Writing</li>
                                <li> <i className='fas fa-gem me-2'></i>Writing Vocabulary</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Speaking <span> Module</span></h4>
                                <li> <i className='fas fa-gem me-2'></i>Speaking Test Description</li>
                                <li> <i className='fas fa-gem me-2'></i>Tips And Secrets And Don'ts Of Speaking</li>
                                <li> <i className='fas fa-gem me-2'></i>Speaking Part 1, 2 And 3</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
