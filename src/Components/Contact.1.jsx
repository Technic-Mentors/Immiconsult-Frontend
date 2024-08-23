import React from 'react';
import contactForm from "../img/contact-form.gif";


export default function Contact() {
    return (
        <div>
            <div className="all-header-bg">
                <div
                    className="all-header-overlay"
                >
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center py-6">
                            <div className="col-md-6 less-padding-Top">
                                <h1 className="head animate__animated animate__zoomIn text-white">
                                    Contact Us
                                </h1>
                                <p className="text-white">Contact us today to experience personalized support and expert guidance. Let’s connect and make your immigration journey a seamless success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact section start */}
            <div className="container py-3">
                <div className="row justify-content-between">
                    <div className="col-md-7">
                        <h1>Get in <span> Touch</span></h1>
                        <p>We’re here to answer your questions, address your concerns, and guide you towards your global aspirations. Our dedicated team is ready to assist you at every step of your immigration journey. Whether you’re seeking information about visa options, need clarification on our services, or are ready to embark on your visa application process, we’re just a message away.</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.873716321516!2d144.95968027505077!3d-37.81642683418879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bc09f530877ab57%3A0x4a035ae5d57c3c7f!2sImmiConsult!5e0!3m2!1sen!2s!4v1713863409225!5m2!1sen!2s" width="620" height="320" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='imiConsultant'></iframe>
                    </div>
                    <div className="col-md-4">
                        <div className="row contact-data py-4">
                            <div className="col-md-12 card d-flex">
                                <i className="fas me-5 roteteIcon fa-map-marker-alt"></i>
                                <p className='p-5 text-center'>ImmiConsult Pvt Ltd 360 Collins St, Melbourne VIC 3000</p>
                            </div>
                            <div className="col-md-12 card d-flex">
                                <i className="fas me-5 roteteIcon fa-phone"></i>
                                <p className='p-5 text-center'>+61 458987449</p>
                            </div>
                            <div className="col-md-12 card d-flex">
                                <i className="fas me-5 roteteIcon fa-envelope"></i>
                                <p className='p-5 text-center'>info@immiconsult.com.au
                                    nawaz_ajiz@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact section end */}
            {/* contact form */}
            <div className="container py-3">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <h1>Send Us A <span> Message</span></h1>
                        <p>We would love to hear from you!</p>
                        <form>
                            <input className='form-control' type="text" placeholder='Name' />
                            <input className='form-control mt-3' type="text" placeholder='Email' />
                            <input className='form-control mt-3' type="text" placeholder='Subject' />
                            <textarea className='form-control mt-3' name="message" id="message" rows="10" placeholder='Message'></textarea>
                            <div className="d-flex justify-content-center">
                                <button type='submit' className='btn btn-danger mt-3 px-5 py-2'>Send Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <img className='img-fluid' src={contactForm} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}
