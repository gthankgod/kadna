import React, { useState } from 'react'

const Clients = () => {
    const [state, setState] = useState([
        { id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579358489/kundi_qhndpn.jpg' },
        { id: 2, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579358489/Yorubarace_boouko.jpg' },
        { id: 3, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579358489/naki_as83sa.jpg' },
        { id: 4, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579358489/r2l_lb4daf.png' },
        { id: 5, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579358489/royalties_qjltv6.png' },
        { id: 6, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352922/images_22_noqykx.jpg' }

    ])
    return (
        <div className="container mt-4">
            <h3 className="display-4 mb-4 text-center">Our Clients</h3>
            <div className="row mt-3">
                {
                    state.map(image => {
                        return (
                            <div className="col-sm-3 mb-3 text-center" key={image.id}>
                                <img src={image.imgUrl} className="img-fluid" alt="" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Clients

