import { IoIosArrowDown } from "react-icons/io";

import { CiSearch } from "react-icons/ci";

import { TiLocation } from "react-icons/ti";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuBox } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";

import "./properties.css"
import CommonDesign from "../../Components/commonDesign/CommonDesign";
import LoopingData from "../../Components/LoopsData/LoopingHome/LoopingData";
import FormRegisterProperty from "../../Components/forms/formsRegester/FormRegisterProperty";

export default function Properties() {
    return (
        <>
            <div className="properties">

                <div className="landing-properties">
                    <div className="info-landing-property container mx-auto">
                        <h1>Find Your Dream Property</h1>
                        <p>
                            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. 
                            Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
                            With categories to suit every dreamer, your journey 
                        </p>
                    </div>
                </div>

                <div className="search-properties container mx-auto">
                    <div className="search-input">
                        <input type="text" className="input" placeholder="Search For A Property"/>
                        <div className="button-search-property">
                            <CiSearch size={24} className="icon-search"/> 
                            <button className="btn-property"> Find Property</button>
                        </div>
                    </div>

                    <div className="filtering-search">

                        <div className="filter">

                            <div className="title-field">
                                <TiLocation size={24} className="icon-field"/>
                                <p>
                                    Location
                                </p>
                            </div>

                            <div className="arrowDown">
                                <IoIosArrowDown size={24} className="arrow-icon"/>
                            </div>

                        </div>

                        <div className="filter">

                            <div className="title-field">
                                <MdOutlineMapsHomeWork size={24} className="icon-field"/>
                                <p>
                                    Property Type
                                </p>
                            </div>

                            <div className="arrowDown">
                                <IoIosArrowDown size={24} className="arrow-icon"/>
                            </div>

                        </div>

                        <div className="filter">

                            <div className="title-field">
                                <MdOutlinePriceChange size={24} className="icon-field"/>
                                <p>
                                    Pricing Range
                                </p>
                            </div>

                            <div className="arrowDown">
                                <IoIosArrowDown size={24} className="arrow-icon"/>
                            </div>

                        </div>

                        <div className="filter">

                            <div className="title-field">
                                <LuBox size={24} className="icon-field"/>
                                <p>
                                    Property Size
                                </p>
                            </div>

                            <div className="arrowDown">
                                <IoIosArrowDown size={24} className="arrow-icon"/>
                            </div>

                        </div>

                        <div className="filter">

                            <div className="title-field">
                                <BsCalendar2Date size={24} className="icon-field"/>
                                <p>
                                    Build Year
                                </p>
                            </div>

                            <div className="arrowDown">
                                <IoIosArrowDown size={24} className="arrow-icon"/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-32">
                <CommonDesign 
                title="Discover a World of Possibilities" 
                desc="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"  
                hiddenBTN="hidden"
                card={ <LoopingData nameBTN="View All Properties" hiddenBTN="hidden"/> }
                />
            </div>

            <div className="mt-32">
                <CommonDesign 
                title="Let's Make it Happen" 
                desc="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
                hiddenBTN="hidden"
                card={<FormRegisterProperty />}
                />
            </div>
        </>
    )
}