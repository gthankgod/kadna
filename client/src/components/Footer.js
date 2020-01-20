import React from 'react'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'green', color: 'white', padding: '1rem 0.7rem', display: 'flex', width: '100%' }}>
            <div className="footer-nav">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="./index.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="./about.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About Us
                  </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="!#">Profile</a>
                                <a className="dropdown-item" href="./organogram.html">Organization Chart</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="!#">Ownership</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="./services.html" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="!#" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="./ourteam.html" className="nav-link">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a href="./contact.html" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div> ©Copyright by KADNA VENTURES LIMITED 2019 </div>
        </footer>
    )
}

export default Footer
