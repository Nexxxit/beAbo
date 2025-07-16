import petergofIcon from '../assets/images/myTravelsImage/petergofIcon.jpg'
import piterCenterIcon from '../assets/images/myTravelsImage/piterCenterIcon.jpg'
import TravelCard from "../components/features/TravelCard.jsx";
import Advertising from "../components/commons/Advertising.jsx";
import {useSurvey} from "../contexts/SurveyProvider.jsx";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function MyTravelsPage() {
    const { setSurveyState } = useSurvey()
    const navigate = useNavigate()

    useEffect(() => {
        setSurveyState(prev => ({
            ...prev,
            showHeader: true,
            showBackButton: true,
            handleBack: () => navigate(-1)
        }));
    }, []);

    const myTravels = [
        {
            travelName: 'Центр Питера',
            imgSrc: piterCenterIcon,
            completed: true,
        },
        {
            travelName: 'Питергоф',
            imgSrc: petergofIcon,
            completed: false,
        },
    ]

    return (
        <div className={'px-4 w-full'}>
            <h1 className={'montserrat-extra-bold text-[#343330] text-2xl'}>Мои путешествия</h1>
            <div className={'flex flex-col gap-3 items-end py-2'}>
                {myTravels.map((myTravel) => (
                    <TravelCard key={myTravel.travelName} myTravels={myTravel} />
                ))}
            </div>
            <div className={'flex justify-center mt-10'}>
                <Advertising text={'Что вы сможете получить в платном тарифе?'} />
            </div>
        </div>
    )
}