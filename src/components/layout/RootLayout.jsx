import {Outlet} from "react-router";

export default function RootLayout() {
    return (
        <div className='bg-[url(./src/assets/images/authBg.jpg)] bg-cover bg-center bg-no-repeat w-full h-screen'>
            <main>
                <Outlet />
            </main>
        </div>
    )
}