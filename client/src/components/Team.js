import React, { useContext } from 'react'
import { TeamContext } from '../contexts/TeamContext'

const Team = () => {
    const { team, showText } = useContext(TeamContext);

    return (
        <div className="container p-4">
            <div className="text-center mb-4">
                <h1 className="display-4">Board of Directors</h1>
                <p className="lead mb-0">Meet our Awesome team</p>
            </div>
            <div className="row text-center">
                {
                    team.map(member => {
                        return (
                            <div className="col-sm-4 mb-3" key={member.id}>
                                <div className="bg-white rounded shadow-lg py-5 px-4"><img src={member.imgUrl} alt="" style={{ width: '200px', height: '200px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    <h5 className="mb-3">{member.name}</h5><div className="small text-uppercase text-muted mb-3">{member.title}</div>
                                    <button className="btn btn-outline-secondary mb-3" onClick={e => showText(member.id)}>View Profile</button>
                                    {
                                        member.show ? <p>{member.profile}</p> : null
                                    }

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Team
