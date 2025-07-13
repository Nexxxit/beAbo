import {Header} from "../features/Header.jsx";
import {Outlet} from "react-router";
import {SurveyProvider} from "../../contexts/SurveyProvider.jsx";

export default function MainLayout() {
    return (
        <SurveyProvider>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </SurveyProvider>
    )
}