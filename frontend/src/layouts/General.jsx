import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Surveys from "../pages/Surveys";
import CreateSurvey from "../pages/CreateSurvey";
import NotFound from "../pages/NotFound";
import Survey from "../pages/Survey";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: '/surveys',
        element: <Surveys />,
        errorElement: <NotFound />
    },
    {
        path: '/createsurvey',
        element: <CreateSurvey />,
        errorElement: <NotFound />
    },
    {
        path: 'surveys/:surveyId',
        element: <Survey />,
        errorElement: <NotFound />
    }
])
function GeneralLayout() {
    return(
        <div className="box-border m-0 p-0">
            <NavBar />
            <main>
                <RouterProvider router={router} />
            </main>
            <Footer />

        </div>
    )
}

export default GeneralLayout