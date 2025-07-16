import {useSurvey} from "../contexts/SurveyProvider.jsx";
import Button from "../components/commons/Button.jsx";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function CreateTravelPage() {
    const {surveyState, setSurveyState} = useSurvey()
    const navigate = useNavigate()

    useEffect(() => {
        setSurveyState(prev => ({
            ...prev,
            showHeader: true,
            showName: true,
            showBackButton: true,
            handleBack: () => navigate(-1)
        }));
    }, []);

    const profilesList = (
        <ul className={'flex flex-col gap-4'}>
            {
                surveyState.userName && surveyState.userName.length > 0
                && surveyState.userName.map((user) => (
                    <li
                        onClick={() => navigate('/app/register', {state: {startFrom: 'q7'}})}
                        className={'w-50 montserrat-semi-bold text-xl p-2 rounded-2xl bg-[#E1E1E1] shadow-md/30'} key={user}>{user}</li>
                ))
            }
        </ul>
    )

    return (
        <div className={'flex flex-col items-center gap-30 p-5'}>
            <div className={'w-70'}>
                <p className={'montserrat-bold leading-5 text-xl text-[#343330] text-center'}>Выберите профиль, для которого вы генерируете маршрут</p>
            </div>
            <div className={'flex justify-center items-center overflow-y-auto p-6'}>
                {profilesList}
            </div>
            <div className={'flex flex-col items-center gap-20'}>
                <Button className={'px-5 shadow-md/30'} onClick={() => navigate('/app/register', {state: {startFrom: 'q2'}})} text={'+ Привязать новый профиль'} />
                <p className={'montserrat text-xl text-center'}>Изменить предпочтения и ограничения можно в <span className={'text-[#523FBF]'} onClick={''}>"Настройках профиля"</span></p>
            </div>
        </div>
    )
}