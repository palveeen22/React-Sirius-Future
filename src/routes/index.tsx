import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../pages/login/LoginPage";
import CalendarPage from "../pages/CalendarPage";
import HomePage from "../pages/HomePage";


export const router = createBrowserRouter([{
    errorElement: <h1>Terjadi sebuah error</h1>,
    children: [
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            element: <BaseLayout />,
            children: [
                {

                    path: "Home",
                    element: <HomePage />,
                },
                {
                    path: "Calendar",
                    element: <CalendarPage />
                }
            ],
        },
        {
            path: "*",
            element: <h1>Not Found Oi !</h1>,
        },
    ]
}])