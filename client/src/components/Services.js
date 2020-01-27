import React, { useState } from 'react'

const Services = () => {
    const [state, setState] = useState([
        {
            id: 1, title: 'Construction', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_18_mwrkzc.jpg', imgAlt: 'Construction', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580128457/construction2_qfgdqx.jpg' }], text: `Kadna Ventures spreads its tentacle into the Construction firm, Kadna is widely  known for its numerous completed projects in and outside the country.
        We are based on the Construction of public works based on general planning, instruction, and control. Including; repair, improvement, or demolition work, Construction of works by processing or applying wooden materials or application of wooden structures to work, Applying, spraying, or affixing plaster, mortar, stucco, cement, fibers, etc. to work, Assembly of scaffolding, transport and placement of heavy objects, such as mechanical apparatuses and construction materials, assembly of steel frames, and demolition etc. We aswell draw out plan for the construction of standard swimming pool for individual and commercial use
        `, show: false
        },
        { id: 2, title: 'Agricultural Farming', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352925/images_25_zcrv08.jpg', imgAlt: 'Agricultural Farming', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366915/images_24_fylpkh.jpg' }, { id: 2, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366913/images_26_ojiret.jpg' }], text: 'Kadna is into both Livestock farming and Agricultural farming. We plants, inspects and harvest crops by hand and with the use of modern machinery as the case may be, we irrigate farm soil and maintain ditches or pipes and pumps. As well operate and service farm machinery for best quality service delivery. We spray fertilizer or pesticide solutions to control insects, fungi and weeds, move shrubs, plants and trees with wheelbarrow or tractors.  In addition, Feeds livestock and clean and disinfect their pens, cages, yards and hutches our Team Administer vaccines to protect animals from diseases. ', show: false },
        { id: 3, title: 'Estate Management', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352922/images_21_n9uvmf.jpg', imgAlt: 'Estate Management', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_20_hltecu.jpg' }], text: `We are in charge of the upkeep and day-to-day running of a private estate. We oversee maintenance, supervise staff members, and manage budgets and events. Typically our work is focused outside of the primary home. This is because land management is a vital part of our role. If it’s an estate with animals and livestock, we will be responsible for overseeing agricultural activities, and liaising with external employees such as vets. We also that the land is being used to its full potential – whether for farming, commercial, or private purposes. An estates run as a business, we help with profitability. Whether the estate operates as a farm, a wedding venue, or a residential complex with private tenants, Kadna Ventures manages all its resources to the best and satisfaction of our client`, show: false },
        { id: 4, title: 'Import and Export', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images_23_plp3gr.jpg', imgAlt: 'Import and Export', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580128776/import_and_export_2_bazqps.jpg' }, { id: 2, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580128914/import_and_export_4_tcgaxd.jpg' }, { id: 3, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580128835/import_and_export_3_sxoivb.jpg' }], text: `We facilitate shipments and crossing of International borders. We ensure shipment adheres to customs regulations and categorize shipments according to a tariff coding system. We prepare goods for shipment, determines amount insurance to take on shipment, using the best most economical packaging. Transportation, warehousing and distribution of goods.  We as well consult with customs agents to ease passage of shipments through customs. Kadna in addition counsel our clients on how to reduce duties and taxes owed. `, show: false },
        { id: 5, title: 'Supply and General Goods (Stones and Granites)', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366914/images_31_wtyl17.jpg', imgAlt: 'Supply and General Goods', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580128997/supply_of_general_goods_nu4pay.jpg' }, { id: 2, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366913/images_30_q1etmn.jpg' }, { id: 3, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580129238/supply_of_general_goods_2_onntys.jpg' }], text: 'Kadna is an entity that supplies goods and services to another organization. This entity is part of the supply chain of our business. We distribute goods from multiple manufacturers and sells them to its customers. We ensure goods that are to be distributed by our firm are of high-quality and at the best affordable unbeatable market price. Other supplied Goods includes Stone and Granite to project site.', show: false },
        { id: 6, title: 'Hotel Management', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352924/images-26-1_rjpv0y.jpg', imgAlt: 'Hotel Management', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579352923/images_19_kt2wof.jpg' }], text: `Our field of involvement covers all aspects of managing a hotel business including hotel administration, marketing, housekeeping, accounts, maintenance, food management, catering, and beverage management.`, show: false },
        { id: 7, title: 'Interior and Exterior Decoration', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366913/images_33_pgbwkq.jpg', imgAlt: 'Interior and exterior decoration', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580129464/interior_and_exterior_decor_2_ax6nwd.jpg' }, { id: 2, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580129388/interior_and_exterior_decor_owvmmm.jpg' }], text: `Kadna also extends its arm of work into interior and exterior decorations. The best modern quality service delivery is ascertained `, show: false },
        { id: 8, title: 'Service Providers (Loaders for Company)', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579366916/images_35_fljibj.jpg', imgAlt: 'Service Providers (Loaders for company)', images: [{ id: 1, imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1580129719/service_providers_iaytya.jpg' }], text: `KADNA VENTURES LTD is an organization that is ready to lift burden off companies in ensuring we take over all your worries both at the depot level and at your cooperate office. Just as it is well known, most depot managers are over choked with their day to day activities; in lieu of this KADNA VENTURES LTD is ready to offer the services pertaining to loaders to enact more efficiency in quality service delivery.`, show: false },
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
                                <div className="col-sm-6 mb-3" key={service.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={service.imgUrl} alt={service.imgAlt} />
                                        <div className="card-body">
                                            <h6 className="card-title">{service.title}</h6>
                                            <button className="p-0 btn btn-link" onClick={e => showText(service.id)}>Read More...</button>
                                            {
                                                service.show ? (
                                                    <div>
                                                        <p className="card-text">{service.text}</p>
                                                        {service.images.map(img => {
                                                            return (
                                                                <img src={img.imgUrl} alt={service.imgAlt} className="img-fluid mb-3" key={img.id} />
                                                            )
                                                        })}
                                                    </div>
                                                ) : null
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
