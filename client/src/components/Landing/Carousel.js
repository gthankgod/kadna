import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mb-3" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_18_mwrkzc.jpg" alt="Construction" style={{ width: '100%', height: '100%' }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Construction</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iste?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images_27_ep68md.jpg" alt="Swimming Pool" style={{ width: '100%', height: '100%' }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Swimming Pool Construction</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352925/images_25_zcrv08.jpg" alt="Loaders" style={{ width: '100%', height: '100%' }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Loading Company</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique.</p>
                    </div>
                </div>
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
