import React from 'react'
import languageCert from "../img/language-cert.webp"

export default function LanguageCERT() {
    return (
        <div>
            {/* header start */}
            <div className='ieltsHead-bg'>
                <div className="ieltsHead-overlay">
                    <div className="container">
                        <div className="row py-6">
                            <div className="col-md-12">
                                <h1 className='text-white text-center'>Language CERT Examination Preparation</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header end */}
            <div className="container">
                <div className="row pt-3 align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h1 className='styled-heading'>Imiconsult Language CERT <span> Success Blueprint</span></h1>
                        <p>At Imiconsult, we understand the importance of thorough preparation for Language CERT examinations. Our dedicated instructors employ tailored strategies to equip students with the skills and knowledge needed to excel in these assessments. Through comprehensive study materials, mock tests, and personalized guidance, we ensure that our students are fully prepared to achieve their desired scores in Language CERT examinations. Join us and embark on a journey towards success in Language CERT certification.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={languageCert} className='img-fluid' alt="language-cert-img" />
                    </div>
                </div>
            </div>

            {/* best pte course */}

            {/* pte acc. & coa. section start */}
            <div className='ptesections-bg my-3'>
                <div className='ptesections-overlay'>
                    <div className="container pt-3">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-12">
                                <h1 className='styled-heading'>What Is <span> Language CERT?</span></h1>
                                <p>As a member of the PeopleCert Group, LanguageCert provides internationally recognized language skills assessment and certification. LanguageCert International ESOL (English for Speakers of Other Languages) comprises a range of English language qualifications tailored for individuals aiming to pursue studies, employment, or travel opportunities worldwide.</p>
                                <p>Imiconsult serves as the authorized LanguageCert Online Examination Partner and LanguageCert Test Center Regulated Partner for administering LanguageCert International ESOL Online and Test Center Examinations.</p>
                                <p>LanguageCert provides the option to take its written and spoken components either as a combined assessment or separately. The written examination encompasses reading, writing, and listening, while the spoken examination focuses on speaking skills. Candidates have the flexibility to undertake the four skills exam either in a single session or in two parts, with Reading/Writing/Listening combined and Speaking taken independently. Additionally, individuals are not obligated to attempt all parts together, and if necessary, they may retake specific sections independently.</p>
                                <p>LanguageCert Online examinations offer a secure and dependable method for candidates of any age to undertake high-stakes, globally acknowledged exams from their chosen setting, eliminating the need to visit a Test Centre. Candidates can opt for LanguageCert Online exams with remote, live invigilation facilitated by ML Global.</p>
                            </div>
                            <div className="col-md-12">
                                <h1>Recogn<span>ition</span></h1>
                                <p>LanguageCert provides examinations that are increasingly acknowledged by numerous Higher Education Institutions, corporations, and governmental entities both within the UK and globally. LanguageCert International ESOL Written qualifications (Listening, Reading, and Writing) and LanguageCert International ESOL Spoken qualifications (Speaking) are officially recognized by various organizations in different countries.</p>
                            </div>
                            <div className="col-md-12">
                                <h1>Who Is This <span>Course For?</span></h1>
                                <p>LangaugeCert International qualifications are intended for:</p>
                                <li style={{ listStyle: "initial" }}>Non-native speakers of English wanting to provide documented evidence of their knowledge of English, for study or employment.</li>
                                <li style={{ listStyle: "initial" }}>
                                    Students aspiring to enter or exit institutions of higher education in the UK or overseas, where proof of knowledge of English is a requirement
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
