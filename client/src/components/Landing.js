import React, { Fragment } from 'react'
import Carousel from './Landing/Carousel'
import About from './Landing/About'
import Clients from './Landing/Clients'

const Landing = () => {
    return (
        <Fragment>
            <Carousel />
            <About />
            <Clients />
        </Fragment>
    )
}

export default Landing
