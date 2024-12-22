
import "./cardAchievements.css"



interface IData {
    title: string,
    para: string
}
export default function CardAchievements( {title, para}:IData ) {
    return (
        <div className="CardAchievements">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="para">
                <p> {para} </p>
            </div>
        </div>
    )
}
