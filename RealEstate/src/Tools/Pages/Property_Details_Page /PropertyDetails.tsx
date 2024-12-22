import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { ImPower } from "react-icons/im";
/* images Line import */
import lineImage1 from "../../../assets/peopertyDetails/line/Image.png"
import lineImage2 from "../../../assets/peopertyDetails/line/Image(1).png"
import lineImage3 from "../../../assets/peopertyDetails/line/Image(2).png"
import lineImage4 from "../../../assets/peopertyDetails/line/Image(3).png"
import lineImage5 from "../../../assets/peopertyDetails/line/Image(4).png"
import lineImage6 from "../../../assets/peopertyDetails/line/Image(5).png"
import lineImage7 from "../../../assets/peopertyDetails/line/Image(6).png"
import lineImage8 from "../../../assets/peopertyDetails/line/Image(7).png"
import lineImage9 from "../../../assets/peopertyDetails/line/Image(8).png"

/* images Main import */
import ImageMain1 from "../../../assets/peopertyDetails/main/Image(9).png"

import ImageMain2 from "../../../assets/peopertyDetails/main/Image(10).png"

import "./propertyDetails.css"
import FormInquire from "../../Components/forms/formInquire/FormInquire";
import CommonDesign from "../../Components/commonDesign/CommonDesign";
import PricingDetails from "../../Components/ PricingDetails/ PricingDetails";
export default function PropertyDetails() {
    return (
        <div className="details container mx-auto">
            <div className="details-property">

                <div className="name-property-price">
                    <div className="name-property">
                        <h1>Seaside Serenity Villa</h1>

                        <div className="location-price">
                            <div className="location-address">
                                <FaLocationDot className="location-icon" />
                                <p>Malibu, California</p>
                            </div>

                            <div className="price-in-location">
                                <p className="price-header">Price</p>
                                <p className="price-body"> $ 1,250,000 </p>
                            </div>
                        </div>
                    </div>

                    <div className="price">
                        <p className="price-header">Price</p>
                        <p className="price-body"> $ 1,250,000 </p>
                    </div>
                </div>

                <div className="images-property">

                    <div className="imagesLanding">
                        <div className="line-of-images">
                            <div className="img-in-line"> <img src={lineImage1} /> </div>
                            <div className="img-in-line"> <img src={lineImage2} /> </div>
                            <div className="img-in-line"> <img src={lineImage3} /> </div>
                            <div className="img-in-line"> <img src={lineImage4} /> </div>
                            <div className="img-in-line"> <img src={lineImage5} /> </div>
                            <div className="img-in-line"> <img src={lineImage6} /> </div>
                            <div className="img-in-line"> <img src={lineImage7} /> </div>
                            <div className="img-in-line"> <img src={lineImage8} /> </div>
                            <div className="img-in-line"> <img src={lineImage9} /> </div>
                        </div>

                        <div className="main-image">
                            <div className="sub-main-image"> <img src={ImageMain1} /> </div>
                            <div className="sub-main-image img-2"> <img src={ImageMain2} /> </div>
                        </div>
                    </div>


                    <div className="Buttons-change-image">
                        <div className="arrows">
                            <FaArrowLeft className="icon-arrow-image" />
                        </div>

                        <div className="arrows">
                            <FaArrowRight className="icon-arrow-image" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="info-property-description">
                <div className="description">
                    <div className="desc-info-property">
                        <h1>Description</h1>
                        <p>
                            Discover your own piece of paradise with the Seaside Serenity Villa. 
                            T With an open floor plan, breathtaking ocean views from every room, 
                            and direct access to a pristine sandy beach, 
                            this property is the epitome of coastal living.
                        </p>
                    </div>

                    <div className="line-x"></div>

                    <div className="area-space">

                        <div className="box-1">
                            <div className="bedrooms box-child-1">
                                <div className="detail-prop">
                                    <IoIosBed className="icon-detail-prop" />
                                    <p>Bedrooms</p>
                                </div>
                                <p>04</p>
                            </div>

                            <div className="line-y line-box-child-1"></div>

                            <div className="bathrooms box-child-1">
                                <div className="detail-prop">
                                    <FaBath className="icon-detail-prop" />
                                    <p>Bathrooms</p>
                                </div>
                                <p>03</p>
                            </div>
                        </div>
                        <div className="line-x line-between"></div>

                        <div className="area box">
                            <div className="line-y line-area-box"></div>
                            <div>
                                <div className="detail-prop" >
                                    <PiMapPinAreaFill className="icon-detail-prop" />
                                    <p>Area</p>
                                </div>
                                <p>2,500 Square Feet</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="feature-property">
                    <div className="title-feature-property">
                        <h1>Key Features and Amenities</h1>
                    </div>
                    <div className="row-feature">
                        <div className="col-feature">
                            <div className="icon-feature-prop">
                                <ImPower className="power-icon" />
                            </div>
                            <p>
                                Expansive oceanfront terrace for outdoor entertaining
                            </p>
                        </div>
                        <div className="col-feature">
                            <div className="icon-feature-prop">
                                <ImPower className="power-icon" />
                            </div>
                            <p>
                                Gourmet kitchen with top-of-the-line appliances
                            </p>
                        </div>
                        <div className="col-feature">
                            <div className="icon-feature-prop">
                                <ImPower className="power-icon" />
                            </div>
                            <p>
                                Private beach access for morning strolls and sunset views
                            </p>
                        </div>
                        <div className="col-feature">
                            <div className="icon-feature-prop">
                                <ImPower className="power-icon" />
                            </div>
                            <p>
                                Master suite with a spa-inspired bathroom and ocean-facing balcony
                            </p>
                        </div>
                        <div className="col-feature">
                            <div className="icon-feature-prop">
                                <ImPower className="power-icon" />
                            </div>
                            <p>
                            Private garage and ample storage space
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FormInquire />

            <div>
                <CommonDesign 
                    title="Comprehensive Pricing Details"
                    desc="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
                    hiddenBTN="hidden"
                    card={<PricingDetails />}
                />
            </div>

        </div>
    )
}
