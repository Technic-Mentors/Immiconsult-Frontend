import React from 'react'
import managerImg from "../img/manager.webp"
import founderImg from "../img/founder.webp"
import recipitentImg from "../img/receptionist.webp"

export default function Team() {
  return (
    <div>
      <div className="container py-4">
        <div className="col-md-7">
          <h1 className='styled-heading'>Our Team, Embracing<span> Dreams</span></h1>
          <p>We have a team of seasoned professionals and immigration experts, we pride ourselves on offering expert guidance and seamless support throughout your visa application process.</p>
        </div>
        <div
          className="row g-5"
        >
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={managerImg} loading="lazy" alt="" />
              <div
                className="team-text w-100 position-absolute top-50 text-center p-4"
                style={{ backgroundColor: "#EE1C24" }}
              >
                <h3 className="text-white">Mr Muhammad Nawaz</h3>
                <p className="text-white mb-0">Managing Director</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={founderImg} loading="lazy" alt="" />
              <div
                className="team-text w-100 position-absolute top-50 text-center p-4"
                style={{ backgroundColor: "#EE1C24" }}
              >
                <h3 className="text-white">James O'Neil</h3>
                <p className="text-white text-uppercase mb-0">Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={recipitentImg} loading="lazy" alt="" />
              <div
                className="team-text w-100 position-absolute top-50 text-center p-4"
                style={{ backgroundColor: "#EE1C24" }}
              >
                <h3 className="text-white">Nataliya Stepulev</h3>
                <p className="text-white mb-0">Receptionist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
