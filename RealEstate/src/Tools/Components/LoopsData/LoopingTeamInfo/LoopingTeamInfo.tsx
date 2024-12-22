import CardTeams from "../../Cards/CardTeams/CardTeams";
import data from "../../../../data/teanInfo.json"


import "./LoopingTeamInfo.css"
export default function LoopingTeamInfo() {
    return (
        <div className="loopTeam">
            {
                data.map( (item)=>{
                    return(
                        <>
                            <CardTeams 
                                key={item.id}
                                image={item.image} 
                                name={item.name} 
                                jobTitle={item.jobTitle} 
                            />
                        </>
                    )
                } )
            }
        </div>
    )
}
