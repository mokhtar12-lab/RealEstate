import {createBrowserRouter, RouterProvider } from 'react-router'


import MainPage from '../Layout/MainPage'
import ErrorPage from '../Layout/ErrorPage'
import Home from '../Pages/Home_Page/Home'
import AboutUs from '../Pages/AboutUs_Page/AboutUs'
import Properties from '../Pages/Properties_Page/Properties'
import PropertyDetails from '../Pages/Property_Details_Page /PropertyDetails'
import Services from '../Pages/Services_Page/Services'
import Contact from '../Pages/Contact_Page/Contact'




const router = createBrowserRouter([{
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
        {path: '/', element: <Home />},
        {path: "/about", element: <AboutUs />},
        {path: "/properties", element: <Properties />},
        {path: "/Details", element: <PropertyDetails />},
        {path: "/services", element: <Services />},
        {path: "/contact", element: <Contact />}
    ]
}])



export default function RouteApp() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
