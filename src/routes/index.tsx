import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../pages/login/LoginPage";
import CalendarPage from "../pages/CalendarPage";
import HomePage from "../pages/HomePage";
import NoAccess from "../components/NoAccess";


export const router = createBrowserRouter([{
    errorElement: <h1>Terjadi sebuah error</h1>,
    children: [
        {
            path: "/",
            element: <LoginPage />,
            loader: () => {
                if (localStorage.access_token) {
                    <NoAccess />
                    return redirect("/Home");
                }

                return null;
            },
        },
        {
            element: <BaseLayout />,
            loader: () => {
                if (!localStorage.access_token) {
                    <NoAccess />
                    return redirect("/login");
                }

                return null;
            },
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