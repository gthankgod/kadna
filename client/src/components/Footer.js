import React from 'react'
import { Link } from 'react-router-dom'
import './Footer/Footer.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <ul className="list-unstyled quick-links">
                            <div className="row">
                                <div className="col-sm-8">
                                    <li><Link to="/"><i className="fa fa-angle-double-right" />Home</Link></li>
                                    <li><Link to="/about"><i className="fa fa-angle-double-right" />About</Link></li>
                                    <li><Link to="/services"><i className="fa fa-angle-double-right" />Services</Link></li>
                                </div>
                                <div className="col-sm-4">
                                    <li><Link to="/careers"><i className="fa fa-angle-double-right" />Careers</Link></li>
                                    <li><Link to="/contact"><i className="fa fa-angle-double-right" />Contact Us</Link></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 ">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a href="https://www.facebook.com/KADNA-VENTURES-LTD-114262436783801/"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/KadnaLtd?s=09"><i className="fa fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/invites/contact/?i=1fjzqrr2jm0w8&utm_content=dca9gtl"><i className="fa fa-instagram" /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/kadna-ventures-438730194"><i className="fa fa-linkedin" /></a></li>
                            <li className="list-inline-item"><a href="mailto:kadnaventuresltd@gmail.com"><i className="fa fa-envelope" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">© All right Reversed.<Link className="text-green ml-2" to="/">Kadna Ventures Ltd</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
