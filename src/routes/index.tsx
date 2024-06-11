import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/dashboardPage";


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
                    path: "dashboard",
                    element: <DashboardPage />,
                },
            ],
        },
        {
            path: "*",
            element: <h1>Not Found Oi !</h1>,
        },
    ]
}])