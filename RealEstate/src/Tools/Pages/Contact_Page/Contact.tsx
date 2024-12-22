import CardSubContainer from "../../Components/Cards/CardSubContainer/CardSubContainer"

import iconOne from "../../../assets/contactPage/IconContainer.png"
import iconTwo from "../../../assets/contactPage/IconContainer(1).png"
import iconThree from "../../../assets/contactPage/IconContainer(2).png"
import iconFour from "../../../assets/contactPage/IconContainer(3).png"


import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import CommonDesign from "../../Components/commonDesign/CommonDesign"
import FormContact from "../../Components/forms/FormContact/FormContact"
import galleryAbstract from "../../../assets/contactPage/AbstractDesign.png"
import  abstract_design from "../../../assets/homePage/featuredProperties/abstract_design.png"


import GalleryImgOne from "../../../assets/contactPage/gallery/Image.png"
import GalleryImgTwo from "../../../assets/contactPage/gallery/Image(1).png"
import GalleryImgThree from "../../../assets/contactPage/gallery/Image(2).png"
import GalleryImgFour from "../../../assets/contactPage/gallery/Image(3).png"
import GalleryImgFive from "../../../assets/contactPage/gallery/Image(4).png"
import GalleryImgSix from "../../../assets/contactPage/gallery/Image(5).png"


import "./contactStyle.css"
export default function Contact() {
    return (
        <div className="contactUs">
            <div className="contact-landing">
                <CardSubContainer
                    TitleLanding="Get in Touch with Estatein"
                    ParagraphLanding="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."

                    iconBoxOne={iconOne}
                    paragraphBoxOne="info@estatein.com"

                    iconBoxTwo={iconTwo}
                    paragraphBoxTwo="+1 (123) 456-7890"

                    iconBoxThree={iconThree}
                    paragraphBoxThree="Main Headquarters"

                    iconBoxFour={iconFour}
                    paragraphBoxFour="Instagram / LinkedIn / Facebook"
                />
            </div>

            <div className="mt-32">
                <CommonDesign
                    title="Let's Connect"
                    desc="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
                    hiddenBTN="hidden"
                    card={<FormContact />}
                />
            </div>

            <div className="mt-32">
                <CommonDesign
                    title="Discover Our Office Locations"
                    desc="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
                    hiddenBTN="hidden"
                    card={
                        <div className="card-contact">
                            <div className="tabs-contact">
                                <div className="childe-tab active">
                                    <p>All</p>
                                </div>
                                <div className="childe-tab">
                                    <p>Regional</p>
                                </div>
                                <div className="childe-tab">
                                    <p>International</p>
                                </div>
                            </div>

                            <div className="subContact">
                                <div className="cardContact">

                                    <div className="address">
                                        <p className="city">
                                            Main Headquarters
                                        </p>
                                        <h1 className="addressTitle">
                                            123 Estatein Plaza, City Center, Metropolis
                                        </h1>
                                        <p className="description">
                                            Our main headquarters serve as the heart of Estatein. 
                                            Located in the bustling city center, 
                                            this is where our core team of experts operates,
                                            driving the excellence and innovation that define us.
                                        </p>
                                    </div>

                                    <div className="info-social">
                                        <div className="sub-info-social">
                                            <FiMail className="icon-contact" />
                                            <p>info@estatein.com</p>
                                        </div>
                                        <div className="sub-info-social">
                                            <FaPhoneAlt className="icon-contact" />
                                            <p>+1 (123) 456-7890</p>
                                        </div>
                                        <div className="sub-info-social">
                                            <IoLocationOutline className="icon-contact" />
                                            <p>Metropolis</p>
                                        </div>
                                    </div>

                                    <div className="button-contact">
                                        <button className="btnContact">Get Direction</button>
                                    </div>

                                </div>

                                <div className="cardContact">

                                    <div className="address">
                                        <p className="city">
                                            Regional Offices
                                        </p>
                                        <h1 className="addressTitle">
                                            456 Urban Avenue, Downtown District, Metropolis
                                        </h1>
                                        <p className="description">
                                            Estatein's presence extends to multiple regions, 
                                            each with its own dynamic real estate landscape.
                                            Discover our regional offices,
                                            staffed by local experts who understand the nuances of their respective markets.
                                        </p>
                                    </div>

                                    <div className="info-social">
                                        <div className="sub-info-social">
                                            <FiMail className="icon-contact" />
                                            <p>info@estatein.com</p>
                                        </div>
                                        <div className="sub-info-social">
                                            <FaPhoneAlt className="icon-contact" />
                                            <p>+1 (123) 628-7890</p>
                                        </div>
                                        <div className="sub-info-social">
                                            <IoLocationOutline className="icon-contact" />
                                            <p>Metropolis</p>
                                        </div>
                                    </div>

                                    <div className="button-contact">
                                        <button className="btnContact">Get Direction</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                />
            </div>

            <div className="gallery container mx-auto">
                <img src={galleryAbstract} className="galleryAbstractImg"/>
                <div className="gallery-parent">
                    <div className="row-child-gallery">
                        <div className="img"> <img src={GalleryImgOne} /> </div>
                        <div className="img"> <img src={GalleryImgTwo} /> </div>
                    </div>
                    <div className="row-child-gallery">
                        <div className="img"> <img src={GalleryImgThree} /> </div>
                        <div className="child-col"> 
                            <div className="img"> <img src={GalleryImgFour} /> </div>
                            <div className="img"> <img src={GalleryImgFive} /> </div>
                        </div>
                    </div>

                    <div className="row-child-gallery threeCard">
                        <div className="img-card"> 
                            <div className="img-abstract_design">
                                <img src={abstract_design} />
                            </div>
                            <div className="information">
                                <h1>Explore Estatein's World</h1>
                                <p>
                                    Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
                                </p>
                            </div>
                        
                        </div>
                        <div className="img"> <img src={GalleryImgSix} /> </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
