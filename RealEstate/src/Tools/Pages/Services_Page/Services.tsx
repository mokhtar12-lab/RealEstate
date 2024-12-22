import img1 from "../../../assets/servicePage/card/Container.png"
import img2 from "../../../assets/servicePage/card/Container(1).png"
import img3 from "../../../assets/servicePage/card/Container(2).png"
import img4 from "../../../assets/servicePage/card/Container(3).png"

import img5 from "../../../assets/servicePage/card/carTwo/Container.png"
import img6 from "../../../assets/servicePage/card/carTwo/Container(1).png"
import img7 from "../../../assets/servicePage/card/carTwo/Container(2).png"
import img8 from "../../../assets/servicePage/card/carTwo/Container(3).png"


import img9 from "../../../assets/servicePage/cardSmart/Container.png"
import img10 from "../../../assets/servicePage/cardSmart/Container(1).png"
import img11 from "../../../assets/servicePage/cardSmart/Container(2).png"
import img12 from "../../../assets/servicePage/cardSmart/Container(3).png"


import groupImage from "../../../assets/servicePage/Abstract Design.png"
import  abstract_design from "../../../assets/homePage/featuredProperties/abstract_design.png"
import CardSubContainer from "../../Components/Cards/CardSubContainer/CardSubContainer"
import CardSubContainerServices from "../../Components/Cards/CardSubContainerServices/CardSubContainerServices"
import CommonDesign from "../../Components/commonDesign/CommonDesign"

import icon_home from "../../../assets/homePage/Icon_container_home.png"
import icon_camera from "../../../assets/homePage/Icon_container_camera.png"
import icon_property from "../../../assets/homePage/Icon_container_property.png"
import icon_sun from "../../../assets/homePage/Icon_container_sun.png"



import "./serviceStyle.css"

export default function Services() {
    return (
        <div className="services">
            <div className="landing-info-services">
                <CardSubContainer
                    TitleLanding="Elevate Your Real Estate Experience"
                    ParagraphLanding="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."

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
                    title="Unlock Property Value"
                    desc="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
                    hiddenBTN="hidden"
                    card={<CardSubContainerServices 
                        imgCardOne={img1}
                        titCardOne="Valuation Mastery"
                        descCardOne="Discover the true worth of your property with our expert valuation services."

                        imgCardTwo={img2}
                        titCardTwo="Strategic Marketing"
                        descCardTwo="Selling a property requires more than just a listing; it demands a strategic marketing approach."

                        imgCardThree={img3}
                        titCardThree="Negotiation Wizardry"
                        descCardThree="Negotiating the best deal is an art, and our negotiation experts are masters of it."

                        imgCardFour={img4}
                        titCardFour="Closing Success"
                        descCardFour="A successful sale is not complete until the closing. We guide you through the intricate closing process."
                        
                        titCardFive="Unlock the Value of Your Property Today"
                        descCardFive="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
                    />}
                />
            </div>

            <div className="mt-56">
                <CommonDesign 
                    title="Effortless Property Management"
                    desc="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
                    hiddenBTN="hidden"
                    card={<CardSubContainerServices 
                        imgCardOne={img5}
                        titCardOne="Tenant Harmony"
                        descCardOne="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."

                        imgCardTwo={img6}
                        titCardTwo="Maintenance Ease"
                        descCardTwo="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."

                        imgCardThree={img7}
                        titCardThree="Financial Peace of Mind"
                        descCardThree="Managing property finances can be complex. Our financial experts take care of rent collection"

                        imgCardFour={img8}
                        titCardFour="Legal Guardian"
                        descCardFour="Stay compliant with property laws and regulations effortlessly."
                        
                        titCardFive="Experience Effortless Property Management"
                        descCardFive="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
                    />}
                />
            </div>

            <div className="smart container mx-auto mt-56">
                <div className="img-abstract_design">
                    <img src={abstract_design} />
                </div>
                <div className="smart-child">
                    <div className="left-smart-child">
                        <div className="info-smart">
                            <h1>
                                Smart Investments, Informed Decisions
                            </h1>
                            <p>
                                Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.
                            </p>
                        </div>

                        <div className="col-in-row-two">
                            <img src={groupImage} />
                            <div className="some-info">
                                <h1>Unlock Your Investment Potential</h1>
                                <div className="descriptions-some-info">
                                    <p>
                                    Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                                    </p>
                                    <div className="button-some-info">
                                        <button className="btn-some-info">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-smart-child">

                        <div className="col-in-row">
                            <div className="header-card">
                                <div className="img-header-card">
                                    <img src={img9} />
                                </div>
                                <h1>
                                    Market Insight
                                </h1>
                            </div>

                            <div className="info-card">
                                <p>
                                Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions
                                </p>
                            </div>
                        </div>

                        <div className="col-in-row">
                            <div className="header-card">
                                <div className="img-header-card">
                                    <img src={img10} />
                                </div>
                                <h1> 
                                    ROI Assessment
                                </h1>
                            </div>

                            <div className="info-card">
                                <p>
                                Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments
                                </p>
                            </div>
                        </div>

                        <div className="col-in-row">
                            <div className="header-card">
                                <div className="img-header-card">
                                    <img src={img11} />
                                </div>
                                <h1>
                                    Customized Strategies
                                </h1>
                            </div>

                            <div className="info-card">
                                <p>
                                    Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs
                                </p>
                            </div>
                        </div>

                        <div className="col-in-row">
                            <div className="header-card">
                                <div className="img-header-card">
                                    <img src={img12} />
                                </div>
                                <h1>
                                    Diversification Mastery
                                </h1>
                            </div>

                            <div className="info-card">
                                <p>
                                    Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
