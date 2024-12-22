import { CiLocationOn } from "react-icons/ci";
import  abstract_design from "../../../../assets/homePage/featuredProperties/abstract_design.png"

import "./inquireStyle.css"
export default function FormInquire() {
    return (
        <div className="inquire-About">

            <div className="info-inquire-About">
                <div className="img-abstract_design">
                    <img src={abstract_design} />
                </div>

                <h1>Inquire About Seaside Serenity Villa</h1>
                <p>
                    Interested in this property? Fill out the form below, 
                    and our real estate experts will get back to you with more details, 
                    including scheduling a viewing and answering any questions you may have.
                </p>

            </div>

            <div className="form-inquire-About">

                <form>
                    <div className="userData">
                        <div className="field-inquire">
                            <p>First Name</p>
                            <input type="text" placeholder="Enter Last Name"  className="input-field" />
                        </div>

                        <div className="field-inquire">
                            <p>Last Name</p>
                            <input type="text" placeholder="Enter Last Name"  className="input-field" />
                        </div>
                    </div>

                    <div className="userData">
                        <div className="field-inquire">
                            <p>Email</p>
                            <input type="text" placeholder="Enter Your Email"  className="input-field" />
                        </div>

                        <div className="field-inquire">
                            <p>Phone</p>
                            <input type="text" placeholder="Enter Phone Number"  className="input-field" />
                        </div>
                    </div>

                    <div className="location">
                        <p className="title-location">
                            Selected Property
                        </p>
                        <div className="filter-inquire">
                            <div className="title-field">
                                <p>Seaside Serenity Villa, Malibu, California</p>

                                <div className="icon-field ">
                                    <CiLocationOn className="icon" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="message">
                        <div className="field-message">
                            <p>Message</p>
                            <textarea className="input-text-area" placeholder="Enter Your Message"/>
                        </div>

                    </div>  

                    <div className="confirm">

                        <div className="check-police">

                            <label className="checkbox-btn">
                                <label htmlFor="checkbox"></label>
                                <input id="checkbox" type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                            <p>
                                I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                            </p>
                        </div>
                        <div className="button-confirm">
                            <button className="btn-confirm">Send Your Message</button>
                        </div>

                    </div>
                </form>

            </div>

        </div>
    )
}
