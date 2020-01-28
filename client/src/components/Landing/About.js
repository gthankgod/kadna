import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Fragment>
            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col-sm-8">
                        <h3 className="display-4 mb-3">About Us</h3>
                        <p>
                            KADNA Ventures is an Incorporated Company with the Corporate Affairs Commission
                            (RC. 718619) with our Head Office at 8, Kasali Street Itire, Lagos
                            and Branches at KSK Hotel and Event Center Alakia Ibadan and Benin
                Republic .<br />
                            We are Nigeria owned company with over 15 (Fifteen) years of
                            operating experience in Hotel Management, Agricultural Farming,
                            Imports &amp; exports, supplies of general goods, construction/pools,
                            transporting, maintenance &amp; general merchants. Our experience also
                            covers business of Quarrying, Stone and Granite supplies, interior
                            and exterior decorations, Providing loaders for manufacturing
                company etc. <br /><Link to="/about" className="btn btn-link p-0">Read More...</Link>
                        </p>
                    </div>
                    <div className="col-sm-4 mt-4">
                        <h6 className="mb-3">Our Core Values</h6>
                        <ul>
                            <li>Customer focus</li>
                            <li>Innovation and creativity</li>
                            <li>Strength and Teamwork</li>
                            <li>Customer focus</li>
                            <li>Accountabilty</li>
                            <li>Professionalism</li>
                            <li>Reliability and Dependabilty</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-sm-6">
                        <h6 className="mb-3">Our Vision</h6>
                        <ul>
                            <li>To be a reference point in all our professional fields.</li>
                            <li>
                                To Be a First Class Nation Builder, effective interface between
                                the Government and relevant stake holders etc.
                </li>
                            <li>
                                Safety/disaster manager based on strategic thinking and planning
                                within a robust Research and Development Environment where safety
                                will be a culture.
                </li>
                            <li>
                                To coordinate secretarial support services that will accelerate
                                policy making, implementation and company development.
                </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <img src="https://res.cloudinary.com/dnmaekeqy/image/upload/v1579358489/Picture1_nrhbqc.png" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
