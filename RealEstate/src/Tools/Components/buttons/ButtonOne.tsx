import { NavLink } from "react-router"
import "./buttonStyle.css"

type TBtn = {
    name: string
}


export default function ButtonOne({name}:TBtn) {
    return (
        <>
            <NavLink to={"/contact"} className="btn">{name}</NavLink>
        </>
    )
}
