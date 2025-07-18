import { createBrowserRouter } from "react-router";
import {RouterProvider} from "react-router/dom";
import MainLayout from "../components/layout/MainLayout.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ChooseTravelProfilePage from "../pages/ChooseTravelProfilePage.jsx";
import MyTravelsPage from "../pages/MyTravelsPage.jsx";
import PriceListPage from "../pages/PriceListPage.jsx";
import CreateTravelPage from "../pages/CreateTravelPage.jsx";

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
            {
                path: 'chooseTravelProfile',
                element: <ChooseTravelProfilePage />,
            },
            {
                path: 'myTravels',
                element: <MyTravelsPage />,
            },
            {
                path: 'priceList',
                element: <PriceListPage />,
            },
            {
                path: 'createTravel',
                element: <CreateTravelPage />,
            },

        ]
    }
])


export default function Router() {
    return <RouterProvider router={router} />;
}