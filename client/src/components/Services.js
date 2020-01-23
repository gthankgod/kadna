import React, { useState } from 'react'

const Services = () => {
    const [state, setState] = useState([
        {
            id: 1, title: 'Construction', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_18_mwrkzc.jpg', imgAlt: 'Construction', firsttext: `Kadna Ventures spreads its tentacle into the Construction firm, Kadna is widely  known for its numerous completed projects in and outside the country.`, secondtext: `
        We are based on the Construction of public works based on general planning, instruction, and control. Including; repair, improvement, or demolition work, Construction of works by processing or applying wooden materials or application of wooden structures to work, Applying, spraying, or affixing plaster, mortar, stucco, cement, fibers, etc. to work, Assembly of scaffolding, transport and placement of heavy objects, such as mechanical apparatuses and construction materials, assembly of steel frames, and demolition etc. We aswell draw out plan for the construction of standard swimming pool for individual and commercial use
        `, show: false
        },
        { id: 2, title: 'Agricultural Farming', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352925/images_25_zcrv08.jpg', imgAlt: 'Agricultural Farming', firsttext: 'Kadna is into both Livestock farming and Agricultural farming. We plants, inspects and harvest crops by hand and with the use of modern machinery as the case may be, we irrigate farm soil and maintain ditches or pipes and pumps.', secondtext: 'As well operate and service farm machinery for best quality service delivery. We spray fertilizer or pesticide solutions to control insects, fungi and weeds, move shrubs, plants and trees with wheelbarrow or tractors.  In addition, Feeds livestock and clean and disinfect their pens, cages, yards and hutches our Team Administer vaccines to protect animals from diseases. ', show: false },
        { id: 3, title: 'Estate Management', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352922/images_21_n9uvmf.jpg', imgAlt: 'Estate Management', firsttext: `We are in charge of the upkeep and day-to-day running of a private estate. We oversee maintenance, supervise staff members, and manage budgets and events. Typically our work is focused outside of the primary home.`, secondtext: `This is because land management is a vital part of our role. If it’s an estate with animals and livestock, we will be responsible for overseeing agricultural activities, and liaising with external employees such as vets. We also that the land is being used to its full potential – whether for farming, commercial, or private purposes. An estates run as a business, we help with profitability. Whether the estate operates as a farm, a wedding venue, or a residential complex with private tenants, Kadna Ventures manages all its resources to the best and satisfaction of our client`, show: false },
        { id: 4, title: 'Import and Export', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images_23_plp3gr.jpg', imgAlt: 'Import and Export', firsttext: `We facilitate shipments and crossing of International borders. We ensure shipment adheres to customs regulations and categorize shipments according to a tariff coding system.`, secondtext: `We prepare goods for shipment, determines amount insurance to take on shipment, using the best most economical packaging. Transportation, warehousing and distribution of goods.  We as well consult with customs agents to ease passage of shipments through customs. Kadna in addition counsel our clients on how to reduce duties and taxes owed. `, show: false },
        { id: 5, title: 'Supply and General Goods (Stones and Granites)', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_19_kt2wof.jpg', imgAlt: 'Supply and General Goods', firsttext: 'Kadna is an entity that supplies goods and services to another organization. This entity is part of the supply chain of our business.', secondtext: 'We distribute goods from multiple manufacturers and sells them to its customers. We ensure goods that are to be distributed by our firm are of high-quality and at the best affordable unbeatable market price. Other supplied Goods includes Stone and Granite to project site.', show: false },
        { id: 6, title: 'Hotel Management', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images-26-1_rjpv0y.jpg', imgAlt: 'Hotel Management', firsttext: `Our field of involvement covers all aspects of managing a hotel business including hotel administration, marketing, housekeeping,`, secondtext: `accounts, maintenance, food management, catering, and beverage management.`, show: false },
        { id: 7, title: 'Interior and Exterior Decoration', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366913/images_33_pgbwkq.jpg', imgAlt: 'Interior and exterior decoration', firsttext: `Kadna also extends its arm of work into interior and exterior decorations.`, secondtext: `The best modern quality service delivery is ascertained `, show: false },
        { id: 8, title: 'Service Providers (Loaders for Company)', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366916/images_35_fljibj.jpg', imgAlt: 'Service Providers (Loaders for company)', firsttext: `KADNA VENTURES LTD is an organization that is ready to lift burden off companies in ensuring we take over all your worries both at the depot level and at your cooperate office.`, secondtext: `Just as it is well known, most depot managers are over choked with their day to day activities; in lieu of this KADNA VENTURES LTD is ready to offer the services pertaining to loaders to enact more efficiency in quality service delivery.`, show: false },
    ]);

    const showText = (id) => {
        setState(state.map(item => item.id === id ? { ...item, show: !item.show } : { ...item }));
    }
    return (
        <div className="container mt-3">
            <h3 className="mb-3">Our Services</h3>
            <div className="card-group">
                <div className="row">
                    {
                        state.map(service => {
                            return (
                                <div className="col-sm-4 mb-3" key={service.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={service.imgUrl} alt={service.imgAlt} />
                                        <div className="card-body">
                                            <h5 className="card-title">{service.title}</h5>
                                            <p className="card-text">{service.firsttext}</p>
                                            <button className="p-0 btn btn-link" onClick={e => showText(service.id)}>Read More...</button>
                                            {
                                                service.show ? <p className="card-text">{service.secondtext}</p> : null
                                            }

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
