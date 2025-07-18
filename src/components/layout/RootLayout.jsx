import {Outlet} from "react-router";

export default function RootLayout() {
    return (
        <div className={`bg-[url('/src/assets/images/authBg.jpg')] bg-cover bg-top bg-no-repeat w-full min-h-screen`}>
            <main>
                <Outlet />
            </main>
        </div>
    )
}