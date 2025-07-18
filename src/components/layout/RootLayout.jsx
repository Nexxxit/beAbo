import {Outlet} from "react-router";

export default function RootLayout() {
    return (
        <div className={`bg-[url('/src/assets/images/authBgMobile.jpg')] md:bg-[url('/src/assets/images/authBgComp.jpg')] bg-cover bg-top bg-no-repeat w-full min-h-screen`}>
            <main>
                <Outlet />
            </main>
        </div>
    )
}