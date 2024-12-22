
import CardAchievements from "../../Cards/CardAcievements/CardAcievements"


import "./Looping.css"
export default function LoopingOurAchievements() {


    return (
        <div className="loop">
            <CardAchievements
                title = {"3+ Years of Excellence"}
                para  = {"With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."}
            />
            <CardAchievements
                title = {"Happy Clients"}
                para  = {"Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."}
            />
            <CardAchievements
                title = {"Industry Recognition"}
                para  = {"We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."}
            />
        </div>
    )
}
