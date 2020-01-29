import React from 'react'
import './Careers/Careers.css'

const Careers = () => {
    return (
        <div className="mb-3">
            <div className="container-fluid mb-4 p-0">
                <header className="careers">
                    <form className="form row py-3 ">
                        <div className="col-md-4 col-lg-3">
                            <input type="text" placeholder="Search by Job name" className=" px-4 py-2 ml-3 mb-3" />
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <select className="px-4 py-2 ml-3 mb-3">
                                <option value="Ibadan" disabled>Choose a Location</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Ibadan">Ibadan</option>
                                <option value="Ghana">Ghana</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <input type="submit" className="btn btn-warning px-4 py-2 ml-3 mb-3" />
                        </div>
                    </form>
                </header>
            </div>
            <div className="container mb-3">
                <section>
                    <h1>Open Positions</h1>
                    <hr />
                    <p className="lead">No position available at the moment, please check back later</p>
                </section>
            </div>
        </div>
    )
}

export default Careers
