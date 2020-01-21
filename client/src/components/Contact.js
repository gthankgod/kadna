import React from 'react'

const Contact = () => {
    return (
        <section className="container mb-4" style={{ minHeight: '80vh' }}>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will respond back to you within the shortest time possible to help you.</p>
            <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="name" className>Your name</label>
                                    <input type="text" id="name" name="name" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="email" className>Your email</label>
                                    <input type="text" id="email" name="email" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <label htmlFor="subject" className>Subject</label>
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <label htmlFor="message">Your message</label>
                                    <textarea type="text" id="message" name="message" rows={5} className="mb-2 form-control md-textarea" defaultValue={""} />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center text-md-left">
                        <button className="btn btn-success btn-block">Send</button>
                    </div>
                    <div className="status" />
                </div>
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x" />
                            <p>San Francisco, CA 94126, USA</p>
                        </li>
                        <li><i className="fas fa-phone mt-4 fa-2x" />
                            <p>+ 01 234 567 89</p>
                        </li>
                        <li><i className="fas fa-envelope mt-4 fa-2x" />
                            <p>contact@kadna.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact
