import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
    const { state } = props.location;
    return (
        <div className="container mt-3 pt-3">
            <div className="row mb-3">
                <div className="col-sm-6">
                    <h1 className="display-4">{state.title}</h1>
                    <p>{state.text}</p>
                </div>
                <div className="col-sm-6 pt-3">
                    <img src={state.imgUrl} alt={state.imgAlt} className="img-fluid" />
                </div>
            </div>
            <div className="row mb-3">
                {
                    state.images.map(image => {
                        return (
                            <div className="col-sm-4 mb-3" key={image.id}>
                                <img src={image.imgUrl} alt={state.title} className="img-fluid" />
                            </div>
                        )
                    })
                }
            </div>

            <div className="col-sm-6 mb-3 p-0">
                <div className="bg-white text-dark rounded shadow-lg py-5 px-4">
                    <h3>Manager in Charge</h3>
                    <h5 className="mb-3">{state.manager.name}</h5>
                    <div className="small text-uppercase mb-3">{state.manager.title}</div>
                    <div className="small text-uppercase mb-3">{state.manager.tel}</div>
                </div>
            </div>
            <div className="col-sm-5 mb-3">
                <Link className="btn btn-success mb-3" to="/services">Back to Services Page</Link>
            </div>
        </div>
    )
}

export default Service
