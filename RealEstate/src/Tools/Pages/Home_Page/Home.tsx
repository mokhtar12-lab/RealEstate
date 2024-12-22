import imLanding from "../../../assets/homePage/Container.png"



import CommonDesign from "../../Components/commonDesign/CommonDesign"
import LoopingData from "../../Components/LoopsData/LoopingHome/LoopingData"
import LoopingReview from "../../Components/LoopsData/LoopingHome/LoopingReview"

import LoopingQusetion from "../../Components/LoopsData/LoopingHome/LoopingQusetion"
import CardSubContainer from "../../Components/Cards/CardSubContainer/CardSubContainer"

import icon_home from "../../../assets/homePage/Icon_container_home.png"
import icon_camera from "../../../assets/homePage/Icon_container_camera.png"
import icon_property from "../../../assets/homePage/Icon_container_property.png"
import icon_sun from "../../../assets/homePage/Icon_container_sun.png"

import "./HomeStyle.css"
import { Link } from "react-router"
export default function Home() {
    return (
        <div className="home">
            <div className="landing">

                <div className="info">
                    <div className="title-info">
                        <h1>Discover Your Dream Property with Estatein</h1>
                        <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </div>

                    <div className="Buttons">
                        <div className="btn-learn-more">
                            <Link to={"/about"}>Learn More</Link>
                        </div>
                        <div className="btn-browse">
                            <Link to={"/properties"} >Browse Properties</Link>
                        </div>
                    </div>

                    <div className="sub-container">
                        
                        <div className="child-sub">
                            <div className="child-child-sub" >
                                <h2>200+</h2>
                                <p>Happy Customers</p>
                            </div>
                            
                            <div className="child-child-sub">
                                <h2>10K+</h2>
                                <p>Properties For Clients</p>
                            </div>
                        </div>

                        <div className="sub">
                            <h2>16+</h2>
                            <p>Years of Experience</p>
                        </div>

                    </div>
                </div>

                <div className="img-landing">
                    <img src={imLanding} />
                </div>
            </div>

            <div>
                <CardSubContainer 
                    hidden="hidden"

                    iconBoxOne={icon_home}
                    paragraphBoxOne="Find Your Dream Home"

                    iconBoxTwo={icon_camera}
                    paragraphBoxTwo="Unlock Property Value"

                    iconBoxThree={icon_property}
                    paragraphBoxThree="Effortless Property Management"

                    iconBoxFour={icon_sun}
                    paragraphBoxFour="Smart Investments, Informed Decisions"
                    />
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="Featured Properties" 
                    desc="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."  
                    nameBTN="View All Properties" 
                    card={ <LoopingData nameBTN="View All Properties" urlPage="/properties" /> }
                    urlPage="/properties"
                />
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="What Our Clients Say" 
                    desc="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."  
                    nameBTN="View All Testimonials" 
                    card={ <LoopingReview nameBTN="View All Testimonials"  /> } 
                    urlPage=""
                />
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="Frequently Asked Questions" 
                    desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."  
                    nameBTN="View All FAQ’s" 
                    card={ <LoopingQusetion nameBTN="View All FAQ’s" /> } 
                    urlPage=""
                />
            </div>

        </div>
    )
}
