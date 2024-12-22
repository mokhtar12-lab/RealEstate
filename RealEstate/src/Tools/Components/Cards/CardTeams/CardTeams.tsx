import { RiSendPlaneFill } from "react-icons/ri";
import "./cardTeams.css"


interface IDataTeam {
    image : string,
    name: string,
    jobTitle: string
}

export default function CardTeams( { image, name, jobTitle }:IDataTeam ) {
    return (
        <div className="cardTeams">
            <div className="img-card">
                <img src={image} />
            </div>

            <div className="data-of-employee">
                <h1> {name} </h1>
                <p>
                    {jobTitle}
                </p>
            </div>

            <div className="sent-message-to-team">
                <input  type="text" className="input" placeholder="Say Hello"/>
                <div className="send-icon">
                    <RiSendPlaneFill className="icon-send" />
                </div>
            </div>
        </div>
    )
}
