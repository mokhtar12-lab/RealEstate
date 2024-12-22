import { Link } from "react-router"
import  abstract_design from "../../../assets/homePage/featuredProperties/abstract_design.png"

import  "./commonDesign.css"

interface IDataInComponent {
    title : string,
    desc: string,
    nameBTN ?: string,
    card?: React.ReactNode,
    hiddenBTN?: string,
    urlPage?: string,
}

export default function CommonDesign({title, desc, nameBTN, card, hiddenBTN, urlPage}: IDataInComponent) {

    return (
        <div className="feature container mx-auto mt-20">
            <div className="img-abstract_design">
                <img src={abstract_design} />
            </div>

            <div className="information-button ">
                <div className="information">
                    <h1> {title} </h1>
                    <p> {desc} </p>
                </div>

                <div className={`${hiddenBTN} button` } >
                    <Link to={urlPage} className="btn-feature"> {nameBTN} </Link>
                </div>
            </div>

            <div className="body-feature">
                {card}
            </div>
        </div>
    )
}
