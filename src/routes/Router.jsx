import { createBrowserRouter } from "react-router";
import {RouterProvider} from "react-router/dom";
import MainLayout from "../components/layout/MainLayout.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import HomePage from "../pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AuthPage />,
            },
        ]

    },
    {
        path: 'app',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },

        ]
    }
])


export default function Router() {
    return <RouterProvider router={router} />;
}