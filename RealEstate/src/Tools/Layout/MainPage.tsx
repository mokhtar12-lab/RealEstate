import { Outlet } from "react-router";
import NavBar from "../Components/common/NavBar/NavBar";
import Footer from "../Components/common/Footer/Footer";


export default function MainPage() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}
