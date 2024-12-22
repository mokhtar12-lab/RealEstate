import about_image from "../../../assets/aboutPage/about_Image_landing.png"
import abstract_design from "../../../assets/homePage/featuredProperties/abstract_design.png"
import { PiStarFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

import "./about.css"
import CommonDesign from "../../Components/commonDesign/CommonDesign";
import LoopingOurAchievements from "../../Components/LoopsData/LoopingAbout/LoopingOurAchievements";
import NavigatingExperience from "../../Components/LoopsData/LoopingAbout/NavigatingExperience";

import LoopingTeamInfo from "../../Components/LoopsData/LoopingTeamInfo/LoopingTeamInfo";
import LoopingOurValuesClients from "../../Components/LoopsData/LoopingOurValuesCliens/LoopingOurValuesClients";


export default function AboutUs() {
    return (
        <div className="about container mx-auto">
            <div className="landing-about">
                <div className="info">
                    <div className="img-abstract_design">
                        <img src={abstract_design} />
                    </div>
                    <div className="title-p">
                        <h1>
                            Our Journey
                        </h1>
                        <p>
                            Our story is one of continuous growth and evolution. 
                            We started as a small team with big dreams, 
                            determined to create a real estate platform that transcended the ordinary.
                            Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                        </p>
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

                <div className="img-about">
                    <img src={about_image} />
                </div>
            </div>

            <div className="our-values">
                <div className="info-our-value">
                    <div className="img-abstract_design">
                        <img src={abstract_design} />
                    </div>

                    <div className="info">
                        <h1>Our Values</h1>
                        <p>
                            Our story is one of continuous growth and evolution.
                            We started as a small team with big dreams, 
                            determined to create a real estate platform that transcended the ordinary.
                        </p>
                    </div>
                </div>

                <div className="description-our-value">

                    <div className="row">
                        <div className="column">

                            <div className="title-icon">
                                <div className="icon">
                                    <PiStarFill size={30} className="icon-star" />
                                </div>
                                <p>Trust</p>
                            </div>

                            <p>
                                Trust is the cornerstone of every successful real estate transaction.
                            </p>

                        </div>

                        <span className="line-x-column"></span>
                        <span className="line-y"></span>

                        <div className="column">
                            <div className="title-icon">
                                <div className="icon">
                                    <FaGraduationCap size={30} className="icon-star" />
                                </div>
                                <p>Trust</p>
                            </div>

                            <p>
                            Trust is the cornerstone of every successful real estate transaction.
                            </p>
                        </div>
                    </div>

                    <span className="line-x"></span>

                    <div className="row">
                        <div className="column">
                            <div className="title-icon">
                                <div className="icon">
                                    <IoIosPeople size={30} className="icon-star" />
                                </div>
                                <p>Trust</p>
                            </div>

                            <p>
                            Trust is the cornerstone of every successful real estate transaction.
                            </p>
                        </div>

                        <span className="line-x-column"></span>
                        <span className="line-y"></span>

                        <div className="column">
                            <div className="title-icon">
                                <div className="icon">
                                    <PiStarFill size={30} className="icon-star" />
                                </div>
                                <p>Trust</p>
                            </div>

                            <p>
                            Trust is the cornerstone of every successful real estate transaction.
                            </p>
                        </div>
                    </div>

                </div> 
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="Our Achievements"
                    desc="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                    card={<LoopingOurAchievements />}
                    hiddenBTN="hidden"
                />
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="Navigating the Estatein Experience"
                    desc="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
                    card={<NavigatingExperience />}
                    hiddenBTN="hidden"
                />
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="Meet the Estatein Team"
                    desc="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                    card={<LoopingTeamInfo />}
                    hiddenBTN="hidden"
                />
            </div>

            <div className="mt-32">
                <CommonDesign 
                    title="Our Valued Clients"
                    desc="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
                    card={ <LoopingOurValuesClients /> }
                    hiddenBTN="hidden"
                />
            </div>

        </div>
    )
}
