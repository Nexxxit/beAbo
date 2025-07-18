import profileAvatarIcon from "../assets/images/profileAvatar.svg";
import oneTimeIcon from "../assets/images/priceListImages/oneTimeIcon.png";
import weekTimeIcon from "../assets/images/priceListImages/weekTimeIcon.png";
import monthTimeIcon from "../assets/images/priceListImages/monthTimeIcon.png";
import {useSurvey} from "../contexts/SurveyProvider.jsx";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function PriceListPage() {
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

    return (
        <div className={'flex flex-col w-full gap-10 items-center'}>
            <div className={'flex flex-col gap-4 items-center p-4'}>
                <div className={'size-30 p-5 bg-[#e1e1e1] rounded-full'}>
                    <img src={profileAvatarIcon} alt={'Your Picture'}/>
                </div>
                <p className={'montserrat-bold text-xl'}>{
                    surveyState.userName && surveyState.userName.length > 1
                        ? surveyState.userName[surveyState.userName.length - 1]
                        : surveyState.userName
                }</p>
            </div>
            <div className={'text-center'}>
                <p className={'montserrat-semi-bold text-xl'}>Ваш тариф: <b>бесплатный</b></p>
            </div>
            <div className={'flex items-center justify-between w-full px-4'}>
                <button className={'flex flex-col items-center justify-center border p-1 rounded-2xl size-30'}>
                    <p className={'montserrat-bold text-xl text-center'}>Разовый</p>
                    <img className={'size-15'} src={oneTimeIcon} alt={'Разовый тариф'} />
                </button>
                <button className={'flex flex-col items-center justify-center border p-1 rounded-2xl size-30'}>
                    <p className={'montserrat-bold text-xl text-center text-nowrap'}>На неделю</p>
                    <img className={'size-15'} src={weekTimeIcon} alt={'Недельный тариф'} />
                </button>
                <button className={'flex flex-col items-center justify-center border p-1 rounded-2xl size-30'}>
                    <p className={'montserrat-bold text-xl text-center'}>На месяц</p>
                    <img className={'size-15'} src={monthTimeIcon} alt={'Месячный тариф'} />
                </button>
            </div>
            <div className={'max-w-80 flex flex-col gap-1'}>
                <p className={'montserrat-semi-bold text-xl text-center'}>Что дает подписка?</p>
                <ol className={'list-decimal list-inside text-[15px] text-center flex flex-col gap-1'}>
                    <li className={'montserrat-bold'}>Оффлайн режим. <span className={'montserrat'}>Пользуйтесь даже в роуминге</span></li>
                    <li className={'montserrat-bold'}>Составление готового маршрута. <span className={'montserrat'}>Вам больше не нужно планировать. Делегируйте это ИИ и исправляйте, при необходимости.</span></li>
                    <li className={'montserrat-bold'}>Помощь ИИ-ассистента</li>
                </ol>
            </div>
        </div>
    )
}