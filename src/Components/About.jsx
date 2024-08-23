import React, { useEffect, useState } from "react";
import navigatingVisa from "../img/navigating-visa.gif"
import missionImg from "../img/mission-img.gif"
import visionImg from "../img/vision-img.gif"
import coreImg from "../img/core-img.gif";
import CalToAction from "./CalToAction";
import Team from "./Team";

export default function About() {
  const [hoverImg, setHoverImg] = useState("")
  const [img, setImg] = useState(missionImg)
  const [textColor, setTextColor] = useState("")
  const [textColor1, setTextColor1] = useState("")
  const [textColor2, setTextColor2] = useState("")
  useEffect(() => {
    if (hoverImg === "mission-img") {
      setImg(missionImg)
    } else if (hoverImg === "vision-img") {
      setImg(visionImg)
    } else if (hoverImg === "core-img") {
      setImg(coreImg)
    }

    if (hoverImg === "mission-img") {
      setTextColor("")
    }
    if (hoverImg === "vision-img") {
      setTextColor1("")
      setTextColor("textMuted")
    } else {
      setTextColor1("textMuted")
    }
    if (hoverImg === "core-img") {
      setTextColor2("")
      setTextColor("textMuted")
    } else {
      setTextColor2("textMuted")
    }
  }, [hoverImg])
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
                  About Us
                </h1>
                <p className="text-white">Welcome to Immiconsult Pvt Ltd, your trusted partner in navigating the complex world of visa immigration with precision, expertise, and care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-Top pt-3">
          <div style={{ border: "none" }}>
            <div className="row align-items-center g-0">

              <div className="col-md-6">
                <h1 className='styled-heading'>About Our Empowering World <span> Navigating Visas</span></h1>
                <div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    What sets us apart is our commitment to excellence, transparency, and integrity. We prioritize your needs and aspirations, ensuring that every step you take is backed by accurate information and meticulous guidance. Our success is not just measured by the number of visas we secure, but by the countless stories of dreams fulfilled, careers advanced, and families united under our guidance.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={navigatingVisa}
                  className="img-fluid rounded-start"
                  alt="school management software"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mission section start */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img className="img-fluid mission-img" src={img} alt="" />
          </div>
          <div className="col-md-7">
            <div className={`mission-hover ${textColor}`} onMouseEnter={() => setHoverImg("mission-img")}>
              <h1 >Our <span>Mission</span></h1>
              <p>At Immiconsult, our mission is clear: to provide unparalleled support and guidance to individuals seeking visa consultation and language proficiency courses. We are dedicated to empowering our clients with the knowledge, resources.</p>
            </div>
            <div className={`vision-hover ${textColor1}`} onMouseEnter={() => setHoverImg("vision-img")}>
              <h1 className=''>Our <span>Vision</span></h1>
              <p>At Immiconsult, our vision extends far beyond the present. We envision a future where borders are no longer barriers and opportunities are accessible to all. We see a world where individuals can pursue their aspirations of studying, working, and living abroad with ease and confidence.</p>
            </div>
            <div className={`core-hover ${textColor2}`} onMouseEnter={() => setHoverImg("core-img")}>
              <h1 >Our <span>Core</span> Values</h1>
              <ul>
                <div className="row">
                  <div className="col-md-5">
                    <li>Integrity</li>
                  </div>
                  <div className="col-md-5">
                    <li>Excellence</li>
                  </div>
                  <div className="col-md-5">
                    <li>Empowerment</li>
                  </div>
                  <div className="col-md-5">
                    <li>Customer-Centric</li>
                  </div>
                  <div className="col-md-5">
                    <li>Innovation</li>
                  </div>
                  <div className="col-md-5">
                    <li>Collaboration</li>
                  </div>
                  <div className="col-md-5">
                    <li>Accountability</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* mission section end */}
      <CalToAction />
      <Team />
    </div >
  );
}
