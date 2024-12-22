import icon_rooms from "../../../../assets/homePage/featuredProperties/Icon_rooms.png"
import icon_bathroom from "../../../../assets/homePage/featuredProperties/Icon_bathroom.png"
import icon_property from "../../../../assets/homePage/featuredProperties/Icon_property_type.png"

import "./cardProperties.css"
import { Link } from "react-router"


interface IDataCard {
    image: string,
    title: string,
    description : string,
    typeBed: string,
    typeBathroom: string,
    typeProperty: string,
    price: string,

}

export default function CardProperties( {image, title, description, typeBed, typeBathroom, typeProperty, price}:IDataCard ) {
    return (
        <div className="cardProperties">
            <div className="img-card">
                <img src={image} />
            </div>

            <div className="data-of-card">
                <div className="data">
                    <h1> {title} </h1>
                    <p> {description} ... <span>Read More</span></p>
                </div>

                <div className="description">
                    <div className="description-home">
                        <div className="img-icon"> 
                            <img src={icon_rooms} />
                        </div>
                        <p> {typeBed} </p>
                    </div>
                    <div className="description-home">
                        <div className="img-icon"> 
                            <img src={icon_bathroom} />
                        </div>
                        <p> {typeBathroom} </p>
                    </div>
                    <div className="description-home ">
                        <div className="img-icon"> 
                            <img src={icon_property} />
                        </div>
                        <p> {typeProperty} </p>
                    </div>
                </div>

                <div className="price-button">
                    <div className="price">
                        <p>Price</p>
                        <h3>$ {price} </h3>
                    </div>

                    <div className="button-card">
                        <Link to={"/Details"} className="btn-card" >View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
