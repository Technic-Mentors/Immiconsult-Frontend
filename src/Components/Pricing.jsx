import React, { useEffect, useState } from 'react'

export default function Pricing() {
  const [isResponsive, setIsResponsive] = useState("")
  const [activeTab, setActiveTab] = useState("cdr-pricing");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsResponsive("table-responsive")
    }
  }, [])
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
                  Pricing Plans of our Services
                </h1>
                <p className="text-white">Our pricing plans are designed to cater to diverse needs, ensuring you have the right resources at your disposal to navigate the immigration landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pricing sections start */}
      <section
        className="pills-tab-section py-4 "
        style={{ backgroundColor: "#FAFAFA" }}
      >

        <div className="container pt-5 pb-2">

          <div className="row">

            <div
              className="col-md-12 jutify-content-center align-items-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"

            >
              <ul
                className="nav nav-tabs industries nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab  mb-2 ${activeTab === "cdr-pricing" ? "active" : ""
                      }`}
                    id="cdr-pricing-tab"
                    data-mdb-toggle="pill"
                    href="#cdr-pricing"
                    role="tab"
                    onClick={() =>
                      handleTabChange("cdr-pricing")
                    }
                    aria-controls="cdr-pricing"
                    aria-selected={activeTab === "cdr-pricing"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "cdr-pricing" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "cdr-pricing" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "cdr-pricing" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    CDR Services{" "}
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab mb-2 ${activeTab === "rpl-pricing" ? "active" : ""
                      }`}
                    id="rpl-pricing-tab"
                    data-mdb-toggle="pill"
                    href="#rpl-pricing"
                    role="tab"
                    onClick={() =>
                      handleTabChange("rpl-pricing")
                    }
                    aria-controls="rpl-pricing"
                    aria-selected={activeTab === "rpl-pricing"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "rpl-pricing" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "rpl-pricing" ? "white" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "rpl-pricing" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    RPL Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-12 tab-detail"

            >
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${activeTab === "cdr-pricing" ? "active" : ""
                    }`}
                  id="cdr-pricing"
                  role="tabpanel"
                  aria-labelledby="cdr-pricing-tab"
                >
                  <div className="container pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered table-responsive">
                          <thead>
                            <tr>
                              <th scope="col">CDR Services</th>
                              <th scope="col">10 days plan (AUD)</th>
                              <th scope="col">7 days plan (AUD)</th>
                              <th scope="col">Combo Package (AUD)</th>
                              <th scope="col">Royal Package (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Complete CDR Writing 3 Career episodes, 1 summary statement, 1 CPD</th>
                              <td>$999 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td> $1299 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td> $1599 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td> $1999 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Career Episodes Writing (1 each)</th>
                              <td>$299 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$399 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>------</td>
                              <td>------</td>
                            </tr>
                            <tr>
                              <th scope="row">Summary Statement</th>
                              <td>$149 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>------</td>
                              <td>------</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table className={`table table-bordered table-danger ${isResponsive}`}>
                          <thead>
                            <tr>
                              <th scope="col">CDR Review</th>
                              <th scope="col">10 days plan (AUD)</th>
                              <th scope="col">7 days plan (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">CDR Proofreading</th>
                              <td>$399 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td> $599 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">CDR Editing & Proofreading</th>
                              <td>$599 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$799 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">CDR Plagiarism Check Removal *Depending upon plag %</th>
                              <td>$349 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$399 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Project plag Check & Removal *Depending upon plag %</th>
                              <td>$349 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$399 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">CDR Review</th>
                              <td className="d-flex justify-content-center"><button className="btn btn-danger"> Click For Free Discussion</button> </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Chartered Engineer Stage 2</th>
                              <th scope="col">10 days plan (AUD)</th>
                              <th scope="col">7 days plan (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Work Statement</th>
                              <td>$1999 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td> $2399 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Eng. Competency Claims</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$299 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered table-danger">
                          <thead>
                            <tr>
                              <th scope="col">Other Services</th>
                              <th scope="col">Price (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">CDR Plagiarism Check</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Project Plagiarism Check (All 3)</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Project Arrangement each</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Resume Writing</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Explanation Letter Writing</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Portal Upload</th>
                              <td>$199 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>


                <div
                  className={`tab-pane fade show ${activeTab === "rpl-pricing" ? "active" : ""
                    }`}
                  id="rpl-pricing"
                  role="tabpanel"
                  aria-labelledby="rpl-pricing-tab"
                >
                  <div className="container pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">RPL Services</th>
                              <th scope="col">10 days plan (AUD)</th>
                              <th scope="col">7 days plan (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Complete RPL Report</th>
                              <td>$800 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td> $1000 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Project Writing</th>
                              <td>$300 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$350 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Keys Area of Knowledge</th>
                              <td>$300 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$400 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered table-danger">
                          <thead>
                            <tr>
                              <th scope="col">RPL Review</th>
                              <th scope="col">10 days plan (AUD)</th>
                              <th scope="col">7 days plan (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">RPL Editing and Proofreading</th>
                              <td>$320 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$420 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">RPL Proofreading</th>
                              <td>$170 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$220 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">RPL Plagiarism Checker & Removal</th>
                              <td>$280 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$360 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">RPL Plagiarism Check</th>
                              <td>$80 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                              <td>$100 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Other Services</th>
                              <th scope="col">Price (AUD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">project Arrangement</th>
                              <td>$900 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                            <tr>
                              <th scope="row">Resume Writing</th>
                              <td>$100 <br /> <button className='btn btn-danger'>Buy Now</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* Tab content */}
            </div>
          </div>
        </div>
      </section>
      {/* pricing sections end */}
    </div>
  )
}
