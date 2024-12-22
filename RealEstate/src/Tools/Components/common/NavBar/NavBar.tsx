import logo from "../../../../assets/homePage/Symbol.png"
import ButtonOne from "../../buttons/ButtonOne"

import { RiCloseLargeFill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import "./navStyle.css"
import { Link, NavLink } from "react-router";



export default function NavBar() {

    const OpenMenu = () =>{
        document.querySelector('.menu')?.classList.toggle('open')
    }

    const CloseMenu = () =>{
        document.querySelector('.menu')?.classList.remove('open')
    }


    return (
        <>
            <div className="parent-header">
                <div className="header container mx-auto">
                    <Link to={'/'} className="title">
                        <div className="img">
                            <img src={logo} />
                        </div>
                        <p>Estatein</p>
                    </Link>

                    <div className="menu-bar">
                        <HiMenuAlt3 size={30} onClick={() => OpenMenu()}/>
                    </div>

                    <div className="nav">
                        <ul>
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/about"}>About Us</NavLink>
                            <NavLink to={"/properties"}>Properties</NavLink>
                            <NavLink to={"/services"}>Services</NavLink>
                        </ul>
                    </div>

                    <div className="button">
                        <ButtonOne name="Contact Us" />
                    </div>
                </div>
            </div>

            <div className="menu">
                <RiCloseLargeFill size={30} className="menu-icon-close" onClick={()=>OpenMenu()}/>
                <div className="menu-nav">
                    <ul>
                        <NavLink onClick={()=> CloseMenu()} to={"/"}>Home</NavLink>
                        <NavLink onClick={()=> CloseMenu()} to={"/about"}>About Us</NavLink>
                        <NavLink onClick={()=> CloseMenu()} to={"/properties"}>Properties</NavLink>
                        <NavLink onClick={()=> CloseMenu()} to={"/services"}>Services</NavLink>
                    </ul>
                </div>

                <div className="menu-button">
                    <ButtonOne name="Contact Us" />
                </div>
            </div>
        </>
    )
}
