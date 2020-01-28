import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../contexts/ServiceContext';

const Services = () => {
    const { services } = useContext(ServiceContext);

    return (
        <div className="container mt-3">
            <h3 className="mb-3 display-4">Our Services</h3>
            <div className="card-group">
                <div className="row">
                    {
                        services.map(service => {
                            let link = `/service/${service.title}`;
                            return (
                                <div className="col-sm-4 mb-3" key={service.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={service.imgUrl} alt={service.imgAlt} />
                                        <div className="card-body">
                                            <h6 className="card-title lead">{service.title}</h6>
                                            <Link to={{ pathname: link, state: service }} className="btn btn-link p-0">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
