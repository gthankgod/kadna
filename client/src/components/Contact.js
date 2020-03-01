import React from 'react'

const Contact = () => {
    return (
        <section className="container mb-4">
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <h1 className="display-4">Contact Details</h1>
                    <h5>Address 1</h5>
                    <address>67 Adeniyi Jones Ikeja, Lagos State</address>
                    <h5>Address 2</h5>
                    <address>8 Kasali St, Idi-Araba, Lagos</address>
                    <h5>Telephone :</h5>
                    <span className="mb-4">+2348039110667, +2348079453920, +2347065849957</span>
                    <h5>Email:</h5>
                    <span className="mb-4"> kadnaventureslts@gmail.com</span>
                    <p>Feel free to reach out on us via any of the above listed mediums</p>
                </div>
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d126839.90179867689!2d3.3456128!3d6.5536!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b8c27b0f245f9%3A0x78de82b751da8c79!2s8%20Kasali%20St%2C%20Idi-Araba%2C%20Lagos!3m2!1d6.5121854!2d3.3408727999999996!5e0!3m2!1sen!2sng!4v1580324451753!5m2!1sen!2sng" frameBorder="0" style={{ border: '0', width: '100%', height: '450px' }} title="Kadna Map" allowFullscreen=""></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact
