import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
    const { state } = props.location;
    return (
        <div className="container mt-3">
            <div className="row mb-3">
                <div className="col-sm-6">
                    <h1>{state.title}</h1>
                    <p>{state.text}</p>
                </div>
                <div className="col-sm-6">
                    <img src={state.imgUrl} alt={state.imgAlt} className="img-fluid" />
                </div>
            </div>
            <div className="row mb-3">
                {
                    state.images.map(image => {
                        return (
                            <div className="col-sm 4 mb-3" key={image.id}>
                                <img src={image.imgUrl} alt={state.title} className="img-fluid" />
                            </div>
                        )
                    })
                }
            </div>
            <Link className="btn btn-success mb-3" to="/services">Back to Services Page</Link>
        </div>
    )
}

export default Service
