import img_footer_right from "../../../../assets/homePage/footer/Design-right.png"
import img_footer_left from "../../../../assets/homePage/footer/Design-left.png"
import logo from "../../../../assets/homePage/Symbol.png"
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./footerStyle.css"


export default function Footer() {
  return (
    <div className="main-footer">
      <div className="parent-footer">
        <div className="part-one">
          <div className="info container mx-auto">
            <div className="title-info-footer">
              <h1>Start Your Real Estate Journey Today</h1>
              <p>
                Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
              </p>
            </div>
            <div className="button-footer">
              <button className="btn-footer">Explore Properties</button>
            </div>
          </div>

          <div className="img-right">
            <img src={img_footer_right} />
          </div>
          <div className="img-left">
            <img src={img_footer_left} />
          </div>

        </div>

        <div className="part-tow ">
          <div className="content container mx-auto pt-20">
            <div className="title-message">
              <div className="title-footer">
                  <div className="img">
                      <img src={logo} />
                  </div>
                  <p>Estatein</p>
              </div>
              <div className="message">
                <input type="email" className="input" placeholder="Enter Your Email"/>
                <RiSendPlaneFill size={24} className="icon-send"/>
              </div>
            </div>

            <div className="links-website">
              <div className="links">
                <p>Home</p>
                <ul>
                  <li>Hero Section</li>
                  <li>Features</li>
                  <li>Properties</li>
                  <li>Testimonials</li>
                  <li>FAQ's</li>
                </ul>

              </div>

              <div className="links">
                <p>About Us</p>
                <ul>
                  <li>Our Story</li>
                  <li>Our Works</li>
                  <li>Hot it Works</li>
                  <li>Our Team</li>
                  <li>Our Clients</li>
                </ul>

              </div>

              <div className="links">
                <p>Properties</p>
                <ul>
                  <li>Portfolio</li>
                  <li>Categories</li>
                </ul>

              </div>

              <div className="links">
                <p>Services</p>
                <ul>
                  <li>Valuation Mastery</li>
                  <li>Strategic Marketing</li>
                  <li>Negotiation Wizardry</li>
                  <li>Closing Success</li>
                  <li>Property Management</li>
                </ul>

              </div>

              <div className="links">
                <p>Contact Us</p>
                <ul>
                  <li>Contact From</li>
                  <li>Our Offices</li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="part-three container mx-auto">
          <div className="copy-write">
            <p>@2023 Estatein. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="social-media">

            <div className="icon-social">
              <FaFacebookF size={24} className="mx-auto my-4"/>
            </div>
            <div className="icon-social">
              <FaLinkedin size={24} className="mx-auto my-4"/>
            </div>
            <div className="icon-social">
              <FaTwitter size={24} className="mx-auto my-4"/>
            </div>
            <div className="icon-social">
              <FaYoutube size={24} className="mx-auto my-4"/>
            </div>

          </div>
        
        </div>

      </div>
    </div>
  )
}
