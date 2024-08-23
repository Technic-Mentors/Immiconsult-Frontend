import React, { useEffect, useState } from 'react';
import aboutImg from "../img/about.gif";
import servicesImg from "../img/services-img.gif";
import collaborationImg from "../img/collaboration-img.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../img/acs-logo.webp";
import logo2 from "../img/ANMAC.webp";
import logo3 from "../img/Vetassess.webp";
import logo4 from "../img/EA_logo.webp";
import { Link } from 'react-router-dom';
import airoplaneWindow from "../img/airoplane-window1.png";
import choseImg from "../img/chose-us.gif";
import courseImg from "../img/courses-img.gif";
import laptopImg from "../img/laptop-img.gif";
import bookImg from "../img/book-img.gif";
import Team from './Team';

export default function Home() {
    const [items, setItems] = useState(1);
    const [dots, setDots] = useState(true);
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: items,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    };
    useEffect(() => {
        if (window.innerWidth > 768) {
            setItems(2);
        }
        if (window.innerWidth < 768) {
            setItems(1);
            setDots(false);
        }
    }, []);
    return (
        <div style={{ overflowX: "hidden" }}>
            <div>
                <div>
                    <div className="container py-3">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6">
                                <h1 className='bold-h1 styled-heading'> Your Visa Our <br /> <span> Expertise</span> </h1>
                                <p>Welcome to IMMICONSULT PVT LTD, your trusted partner in navigating the complex world of visa immigration and migration skill assessment with precision, expertise, and care. At ImmiConsult, we understand that embarking on an international journey, whether for study, work, or settlement, is a significant milestone in your life.</p>
                            </div>
                            <div className="col-md-5 col-9 head-airloplane">
                                <img className='img-fluid laptop-img' src={laptopImg} alt="" />
                                <img className='img-fluid book-img' src={bookImg} alt="" />
                                <img className='img-fluid airoplane-image' src={airoplaneWindow} alt="" />
                                <div className='airoplane-bg'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section start */}
            <div className="container">
                <div className="row reverse-order justify-content-between align-items-center">
                    <div className="col-md-5">
                        <img className='img-fluid' src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='bold-h1 styled-heading'>About US</h1>
                        <h2>Migration Serviecs TO Make The <span> Greatest Impact</span></h2>
                        <p>
                            Welcome to a world of possibilities with ImmiConsult. Choose Immiconsult Pvt Ltd as your partner on this exciting journey towards new horizons.
                        </p>
                        <Link to="/about"> <button className='btn btn-outline-danger'>Read More</button></Link>
                    </div>
                </div>
            </div>
            {/* about us section end */}

            {/* migration section start*/}
            <div className='visa-bg'>
                <div className='fables-after-overlyy'>
                    <div className="container py-3">
                        <h1 className='text-center'>Navigate Visa & <span> Migration</span> Skill Assessment</h1>
                        <p>Welcome to Immiconsult Pvt Ltd with a team of seasoned professionals and immigration experts, we pride ourselves on offering expert guidance and seamless support throughout your visa application process. Our mission is to transform your aspirations into tangible realities by providing comprehensive immigration solutions tailored to your unique needs.</p>
                        <div className="row g-4 justify-content-between">
                            {/* new addition start */}
                            <div className="col-md-5 visa-mig-col">
                                <h3>Engineering Australia</h3>
                                <p>This is a short description elaborating the Engineering Australia mentioned below:</p>
                                <h6><i className="fas fa-tasks me-1"></i> CDR services- Click to check pricing</h6>
                                <h6><i className="fas fa-tasks me-1"></i> RPL services- Click to check pricing</h6>
                                <a href="https://api.whatsapp.com/send/?phone=61458987449&text&fbclid" target='blank'> <button className='btn btn-danger mt-2 px-4'>Click To Discuss</button></a>
                            </div>
                            <div className="col-md-5">
                                <h3>Vetassess</h3>
                                <p>This is a short description elaborating Vetassess skill assessment mentioned below:</p>
                                <h6><i className="fas fa-tasks me-1"></i> Vetassess Assessment: $1500</h6>
                                <h6><i className="fas fa-tasks me-1"></i> Vetassess Assessment Review: $800</h6>
                                <a href="https://api.whatsapp.com/send/?phone=61458987449&text&fbclid" target='blank'> <button className='btn btn-danger mt-2 px-4'>Click To Discuss</button></a>
                            </div>
                            <div className="col-md-5 visa-mig-col">
                                <h3>CPA/CA-ANZ</h3>
                                <p>This is a short description elaborating the CAANZ service you have mentioned below:</p>
                                <h6><i className="fas fa-tasks me-1"></i> CAANZ Assessment: $1500</h6>
                                <h6><i className="fas fa-tasks me-1"></i> CAANZ Assessment Review: $800</h6>
                                <a href="https://api.whatsapp.com/send/?phone=61458987449&text&fbclid" target='blank'> <button className='btn btn-danger mt-2 px-4'>Click To Discuss</button></a>
                            </div>
                            <div className="col-md-5">
                                <h3>Trade Recognition Australia (TRA)</h3>
                                <p>This is a short description elaborating on the TRA mentioned above:</p>
                                <h6><i className="fas fa-tasks me-1"></i> TR Australia Assessment: $800</h6>
                                <h6><i className="fas fa-tasks me-1"></i> TRA Assessment Review: $600</h6>
                                <a href="https://api.whatsapp.com/send/?phone=61458987449&text&fbclid" target='blank'> <button className='btn btn-danger mt-2 px-4'>Click To Discuss</button></a>
                            </div>
                            <div className="col-md-5 visa-mig-col">
                                <h3>Australia Computer Society (ACS)</h3>
                                <p>This is a short description elaborating on the ACS mentioned above:</p>
                                <h6><i className="fas fa-tasks me-1"></i> AC Society Assessment: $800</h6>
                                <h6><i className="fas fa-tasks me-1"></i> ACS Assessment Review: $400</h6>
                                <a href="https://api.whatsapp.com/send/?phone=61458987449&text&fbclid" target='blank'> <button className='btn btn-danger mt-2 px-4'>Click To Discuss</button></a>
                            </div>
                            <div className="col-md-5">
                                <h3>Australian Nursing and Midwifery (ANMAC)</h3>
                                <p>This is a short description elaborating on the ANMAC mentioned above:</p>
                                <h6><i className="fas fa-tasks me-1"></i> ANMAC Assessment: $1500</h6>
                                <h6><i className="fas fa-tasks me-1"></i> ANMAC Assessment Review: $800</h6>
                                <a href="https://api.whatsapp.com/send/?phone=61458987449&text&fbclid" target='blank'> <button className='btn btn-danger mt-2 px-4'>Click To Discuss</button></a>
                            </div>
                            {/* new addition end */}

                            {/* <div className="col-md-4 pt-3">
            <div className="card visa-card">
                <div className="card-body">
                    <div className="icon-bg">
                        <i className='fas fa-2x roteteIcon fa-cogs'></i>
                    </div>
                    <h3 className="text-center">Engineering Australia</h3>
                    <p>This is a short description elaborating the Engineering Australia mentioned below.</p>
                    <h5>CDR services- Click to check pricing</h5>
                    <h5>RPL services- Click to check pricing</h5>
                    <div className="d-flex justify-content-center">
                        <button className='btn'>Click To Discuss</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 pt-3">
            <div className="card visa-card">
                <div className="card-body">
                    <div className="icon-bg">
                        <i className='fas fa-2x roteteIcon fa-passport'></i>
                    </div>
                    <h3 className="text-center">Vetassess</h3>
                    <p>This is a short description elaborating Vetassess skill assessment mentioned below.​</p>
                    <h5>Vetassess Assessment: $1500</h5>
                    <h5>Vetassess Assessment Review: $800</h5>
                    <div className="d-flex justify-content-center">
                        <button className='btn'>Click To Discuss</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 pt-3">
            <div className="card visa-card">
                <div className="card-body">
                    <div className="icon-bg">
                        <i className="fas fa-2x roteteIcon fa-money-bill-wave"></i>
                    </div>
                    <h3 className="text-center">CPA/CA-ANZ</h3>
                    <p>This is a short description elaborating the CAANZ service you have mentioned below.​​</p>
                    <h5>CAANZ Assessment: $1500</h5>
                    <h5>CAANZ Assessment Review: $800</h5>
                    <div className="d-flex justify-content-center">
                        <button className='btn'>Click To Discuss</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 pt-3">
            <div className="card visa-card">
                <div className="card-body">
                    <div className="icon-bg">
                        <i className="fas fa-2x roteteIcon fa-star"></i>
                    </div>
                    <h3 className="text-center">Trade Recognition Australia (TRA)</h3>
                    <p>This is a short description elaborating on the TRA mentioned above.​​​</p>
                    <h5>TRA Assessment: $800</h5>
                    <h5>TRA Assessment Review: $600</h5>
                    <div className="d-flex justify-content-center">
                        <button className='btn'>Click To Discuss</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 pt-3">
            <div className="card visa-card">
                <div className="card-body">
                    <div className="icon-bg">
                        <i className="fas fa-2x roteteIcon fa-desktop"></i>
                    </div>
                    <h3 className="text-center">Australia Computer Society (ACS)</h3>
                    <p>This is a short description elaborating on the ACS mentioned above.​​</p>
                    <h5>ACS Assessment: $800</h5>
                    <h5>ACS Assessment Review: $400</h5>
                    <div className="d-flex justify-content-center">
                        <button className='btn'>Click To Discuss</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 pt-3">
            <div className="card visa-card">
                <div className="card-body">
                    <div className="icon-bg">
                        <i className="fas fa-2x roteteIcon fa-hospital"></i>
                    </div>
                    <h3 className="text-center">Australian Nursing and Midwifery (ANMAC)</h3>
                    <p>This is a short description elaborating on the ANMAC mentioned above.​​​</p>
                    <h5>ANMAC Assessment: $1500</h5>
                    <h5>ANMAC Assessment Review: $800</h5>
                    <div className="d-flex justify-content-center">
                        <button className='btn'>Click To Discuss</button>
                    </div>
                </div>
            </div>
        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* services section end*/}

            {/* chose section start */}
            <div className="container padding-Top py-3">
                <div className="row justify-content-between bg-danger">
                    <div className="col-md-6">
                        <div className="card chose-course-card">
                            <div className="card-body">
                                <div className="col-md-12">
                                    <h1>Why <span> Choose</span> Us? </h1>
                                    <p>At Immiconsultant, we understand that navigating the complexities of visa applications and studying abroad can be overwhelming. That's why we're dedicated to providing unparalleled support and guidance to students like you who aspire to pursue their dreams of studying overseas. Here's why you should choose us:</p>
                                    <p className='chose-us-point'>Expertise in Visa Consultation</p>
                                    <p className='chose-us-point1'>Proven Track Record</p>
                                    <p className='chose-us-point'>Comprehensive Education Counseling</p>
                                    <p className='chose-us-point1'>Tailored Solutions</p>
                                    <p className='chose-us-point'>Exceptional Customer Service</p>
                                    <p className='chose-us-point1'>Start Your Journey With Us</p>
                                </div>
                                <div className="col-md-9">
                                    <img className='img-fluid chose-img' src={choseImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card chose-course-card">
                            <div className="card-body">
                                <div className="col-md-12">
                                    <h1>Our <span> Courses</span> </h1>
                                    <p>Explore a world of opportunities with our comprehensive range of courses designed to elevate your skills and open doors to new horizons. From visa consultation services tailored to your specific needs to intensive language courses like IELTS preparation, we're here to guide you every step of the way. Our expert instructors and personalized approach ensure that you receive the support you need to achieve your goals. Whether you're aspiring to study abroad, seeking employment opportunities overseas, or simply aiming to enhance your language proficiency, our diverse array of courses caters to all levels and ambitions.</p>
                                    <p className='chose-us-point'>IELTS Course</p>
                                    <p className='chose-us-point1'>PTE Course</p>
                                    <p className='chose-us-point1'>Spoken English</p>
                                    <p className='chose-us-point'>Language CERT</p>
                                </div>
                                <div className="col-md-10">
                                    <img className='img-fluid' src={courseImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* chose section end */}

            {/* coaching section start */}
            {/* <div className="container padding-Top py-3">
                <div className="row justify-content-between reverse-order align-items-center">
                    <div className="col-md-5">
                        <img className='img-fluid' src={courseImg} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h1 className='styled-heading'>Our <span> Courses</span> </h1>
                        <p>Explore a world of opportunities with our comprehensive range of courses designed to elevate your skills and open doors to new horizons. From visa consultation services tailored to your specific needs to intensive language courses like IELTS preparation, we're here to guide you every step of the way. Our expert instructors and personalized approach ensure that you receive the support you need to achieve your goals. Whether you're aspiring to study abroad, seeking employment opportunities overseas, or simply aiming to enhance your language proficiency, our diverse array of courses caters to all levels and ambitions.</p>
                        <p className='chose-us-point'>IELTS Course</p>
                        <p className='chose-us-point1'>PTE Course</p>
                        <p className='chose-us-point1'>Spoken English</p>
                        <p className='chose-us-point1'>Language CERT</p>
                    </div>
                </div>
            </div> */}
            {/* coaching section end */}

            {/* services section start */}
            <div className='skill-assessment-bg'>
                <div className='skill-assessment-overlay'>
                    <div className="container padding-Top">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className='styled-heading'>We Provides All Services For all <span> Visas and Skill Assessment</span></h1>
                                <p>Our services encompass a wide spectrum of immigration pathways, including student visas, work permits, family sponsorships, skilled migration, and more. We stay up-to-date with the ever-evolving immigration regulations and policies across various countries, ensuring that you receive accurate and timely advice.</p>

                                <li><i className="fas fa-cogs"></i> Easy On-call and In-Person Consulation</li>

                                <li><i className="fas fa-cogs"></i> Fully Fledged Visa Services</li>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src={servicesImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services section end */}

            {/* agencies section start */}
            <div className="container py-5">
                <div className="row reverse-order">
                    <div className="col-md-5">
                        <img className='img-fluid' src={collaborationImg} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h1 className='styled-heading'>Agencies We are <span> Collaborated</span> With</h1>
                        <p className='paragraph-width'>We proudly collaborate with reputable skill assessment agencies to ensure the authenticity and credibility of your qualifications. Our partnerships include organizations such as:</p>

                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className='slider-img d-flex align-items-center justify-content-center'>
                                    <img className='img-fluid' src={logo1} alt="" />
                                </div>
                                <div className='slider-img d-flex align-items-center justify-content-center'>
                                    <img className='img-fluid' src={logo2} alt="" />
                                </div>
                                <div className='slider-img d-flex align-items-center justify-content-center'>
                                    <img className='img-fluid' src={logo3} alt="" />
                                </div>
                                <div className='slider-img d-flex align-items-center justify-content-center'>
                                    <img className='img' src={logo4} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* agencies section end */}
            <Team />
        </div>
    );
}
