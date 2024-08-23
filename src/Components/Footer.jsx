import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import imiLogo from "../img/logo.png"

export default function Footer() {
    const location = useLocation()

    const pageTop = (path) => {
        if (path === location.pathname) {
            window.scrollTo(0, 0)
        }
    }

    if (location.pathname === "/adminpanel/Addnews" || location.pathname === "/adminpanel/addnews" || location.pathname === "/adminpanel/allnews") {
        return null;
    }
    return (
        <div>
            {/* <!-- Start Footer 2 Background Image  --> */}
            <div className="footer-bg white-color bg-rules">
                <div className='fables-after-overly'>
                    <div className="container footer-icon">
                        <div className="row justify-content-between pt-5">
                            <div className="col-md-3 mb-4">
                                <img className="pb-3 img-fluid" src={imiLogo} alt="" />
                                <p >
                                    Choose Immiconsult Pvt Ltd as your partner on this exciting journey towards new horizons. Let us be the bridge that connects you to opportunities beyond borders.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <h2 className="pb-1">Eplore <span> Site</span> </h2>
                                <ul className="nav fables-footer-links">
                                    <li><i className="fas fa-angle-double-right"></i>  <Link className="footer-link" to="/" onClick={() => pageTop('/')}>Home</Link></li>
                                    <li><i className="fas fa-angle-double-right"></i>  <Link className="footer-link" to="/about" onClick={() => pageTop('/about')}>About</Link></li>
                                    <li><i className="fas fa-angle-double-right"></i>  <Link className="footer-link" to="/pricing-plans" onClick={() => pageTop('/pricing-plans')}>Pricing</Link></li>
                                    <li><i className="fas fa-angle-double-right"></i>  <Link className="footer-link" to="/contact-us" onClick={() => pageTop('/contact-us')}>Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 contact-info">
                                <h2 className="">Contact <span> Us</span></h2>
                                <div className=" d-flex align-items-center">
                                    <i className="fas fa-phone"></i>
                                    <p className="mt-3 ml-2">+61 458987449</p>
                                </div>
                                <div className="mt-2 d-flex align-items-start">
                                    <i className="fas fa-envelope"></i>
                                    <p className="ml-2">info@immiconsult.com.au
                                        nawaz_ajiz@yahoo.com</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h2 className="pb-2">Social <span> Links</span></h2>
                                <p>Connect with Opportunities, build your Dreams, make great Futures.</p>
                                <div className="social-links d-flex">
                                    <li><a href="https://www.youtube.com/bcdserve" target="blank"><i className="fab fa-youtube me-3"></i></a></li>
                                    <li><a href="https://www.facebook.com/McKinsey/" target="blank"><i className="fab fa-facebook me-3"></i></a></li>
                                    <li><a href="https://www.instagram.com/bcdserve/" target="blank"><i className="fab fa-instagram me-3"></i></a></li>
                                    <li><a href="https://twitter.com/BCDserve" target="blank"><i className="fab fa-twitter-square me-3"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/bcdserve/" target="blank"><i className="fab fa-linkedin me-3"></i></a></li>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="copyright fables-main-background-color mt-0 border-0 white-color">

                    <p className="mb-0 py-3 footer-end-bg text-center">Copyright © All rights reserved. Developed with love by <a href="https://technicmentors.com" target='blank'>Technic Mentors</a></p>
                </div>
            </div>

            {/* <!-- /End Footer 2 Background Image --> */}
        </div>
    )
}
