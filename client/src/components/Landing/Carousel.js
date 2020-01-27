import React, { useState } from 'react'

const Carousel = () => {
    const [state, setState] = useState([
        { id: 0, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_18_mwrkzc.jpg', title: 'Construction', className: 'carousel-item active' },
        { id: 1, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images_27_ep68md.jpg', title: 'Swimming Pool Construction', className: 'carousel-item' },
        { id: 2, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366916/images_35_fljibj.jpg', title: 'Loading Company', className: 'carousel-item' },
        { id: 3, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352925/images_25_zcrv08.jpg', title: 'Agricultural Farming', className: 'carousel-item' },
        { id: 4, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352922/images_21_n9uvmf.jpg', title: 'Estate Management', className: 'carousel-item' },
        { id: 5, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images_23_plp3gr.jpg', title: 'Import and Export', className: 'carousel-item' },
        { id: 6, image: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images-26-1_rjpv0y.jpg', title: 'Hotel Management', className: 'carousel-item' },
    ]);
    return (
        <div id="carouselExampleIndicators" className="carousel slide mb-3" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    state.map(service => {
                        let val = service.id;
                        return (
                            <li data-target="#carouselExampleIndicators" data-slide-to={val} className={service.id === 0 ? "active" : ""} />
                        )
                    })
                }
            </ol>
            <div className="carousel-inner">
                {
                    state.map(service => {
                        return (
                            <div className={service.className} key={service.id}>
                                <img src={service.image} alt="Construction" style={{ width: '100%' }} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{service.title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}

export default Carousel
