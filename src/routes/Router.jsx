import { createBrowserRouter } from "react-router";
import {RouterProvider} from "react-router/dom";
import MainLayout from "../components/layout/MainLayout.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

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
    // {
    //     path: '/',
    //     element: <MainLayout />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             index: true,
    //             element:
    //         }
    //     ]
    // }
])


export default function Router() {
    return <RouterProvider router={router} />;
}