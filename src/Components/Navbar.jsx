import React, { useEffect, useRef, useState } from 'react'
import imiLogo from "../img/logo.png"
import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
    const location = useLocation()
    const navRef = useRef()
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true)
    const isLinkActive = (path) => {
        if (location.pathname === path) {
            return "active-navlink"
        }
    }
    const handleNavBar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed)
    }
    const closeNavBar = () => {
        if (window.innerWidth <= 768) {
            setIsNavbarCollapsed(true)
        }
    }
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsNavbarCollapsed(true)
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white" ref={navRef}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={imiLogo} alt="" style={{ height: "70px" }} onClick={closeNavBar} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavbarCollapsed} onClick={handleNavBar} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${isNavbarCollapsed ? "" : "show"}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${isLinkActive("/")}`} aria-current="page" to='/' onClick={closeNavBar}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isLinkActive("/about")}`} to="/about" onClick={closeNavBar}>About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coaching
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/ielts-coaching">IELTS Coaching</Link></li>
                                    <li><Link className="dropdown-item" to="/pte-coaching">PTE</Link></li>
                                    <li><Link className="dropdown-item" to="/language-cert">Language CERT</Link></li>
                                    <li><Link className="dropdown-item" to="/spoken-english">Spoken English</Link></li>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isLinkActive("/pricing-plans")}`} to="/pricing-plans" onClick={closeNavBar}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isLinkActive("/travel-tour")}`} to="/travel-tour" onClick={closeNavBar}>Travel & Tour</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isLinkActive("/visa-immigration")}`} to="/visa-immigration" onClick={closeNavBar}>Visa/Immigration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isLinkActive("/contact-us")}`} to="/contact-us" onClick={closeNavBar}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
