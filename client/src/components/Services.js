import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../contexts/ServiceContext';

const Services = () => {
    const { services } = useContext(ServiceContext);

    return (
        <div className="container mt-3">
            <h3 className="mb-3">Our Services</h3>
            <div className="card-group">
                <div className="row">
                    {
                        services.map(service => {
                            let link = `/service/${service.title}`;
                            return (
                                <div className="col-sm-6 mb-3" key={service.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={service.imgUrl} alt={service.imgAlt} />
                                        <div className="card-body">
                                            <h6 className="card-title">{service.title}</h6>
                                            <Link to={{ pathname: link, state: service }} className="btn btn-link">Read more</Link>
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
