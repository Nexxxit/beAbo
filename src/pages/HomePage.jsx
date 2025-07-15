import {useEffect, useState} from "react";
import {useSurvey} from "../contexts/SurveyProvider.jsx";
import createNewTravelIcon from '../assets/images/homeImage/createNewTravelIcon.png';
import myTravelsIcon from '../assets/images/homeImage/myTravelsIcon.png';
import isaakSoborIcon from '../assets/images/homeImage/isaakSoborIcon.png';
import gatchinaIcon from '../assets/images/homeImage/gatchinaIcon.png';
import greatNovgorodIcon from '../assets/images/homeImage/greatNovgorodIcon.png';
import kingiseppIcon from '../assets/images/homeImage/kingiseppIcon.png';
import kronshtadtIcon from '../assets/images/homeImage/kronshtadtIcon.png';
import oldLadogaIcon from '../assets/images/homeImage/oldLadogaIcon.png';
import petergofIcon from '../assets/images/homeImage/petergofIcon.png';
import tihvinIcon from '../assets/images/homeImage/tihvinIcon.png';
import shlisselburgIcon from '../assets/images/homeImage/shlisselburgIcon.png';
import oranienbaumIcon from '../assets/images/homeImage/oranienbaumIcon.png';
import pushkinIcon from '../assets/images/homeImage/pushkinIcon.png';
import viborgIcon from '../assets/images/homeImage/viborgIcon.png';


import profileAvatarIcon from '../assets/images/profileAvatar.svg';

export default function HomePage() {
    const {setSurveyState, surveyState} = useSurvey()
    const [currentSection, setCurrentSection] = useState('main')

    useEffect(() => {
        setSurveyState({
            showHeader: true,
            showName: true,
            userName: surveyState.userName,
        })
    }, [])

    useEffect(() => {
        if (surveyState.profileOpen) {
            setSurveyState(prev => ({
                ...prev,
                showBackButton: true,
                handleBack: () => {
                    if (currentSection === 'main') {
                        setSurveyState(prev => ({...prev, profileOpen: false}));
                    } else {
                        setCurrentSection('main');
                    }
                }
            }));
        } else {
            setSurveyState(prev => ({
                ...prev,
                showBackButton: false,
                handleBack: () => {
                }
            }));
        }
    }, [surveyState.profileOpen, currentSection]);

    const cities = [
        {
            city: 'Saint-Petersburg',
            image: isaakSoborIcon,
            label: 'Санкт-Петербург',
        },
        {
            city: 'Gatchina',
            image: gatchinaIcon,
            label: 'Гатчина'
        },
        {
            city: 'Oranienbaum',
            image: oranienbaumIcon,
            label: 'Ораниенбаум'
        },
        {
            city: 'Great Novgorod',
            image: greatNovgorodIcon,
            label: 'Великий Новгород'
        },
        {
            city: 'Kronshtadt',
            image: kronshtadtIcon,
            label: 'Кронштадт'
        },
        {
            city: 'Old Ladoga',
            image: oldLadogaIcon,
            label: 'Старая Ладога'
        },
        {
            city: 'Petergof',
            image: petergofIcon,
            label: 'Петергоф'
        },
        {
            city: 'Pushkin',
            image: pushkinIcon,
            label: 'Пушкин'
        },
        {
            city: 'Shlisselburg',
            image: shlisselburgIcon,
            label: 'Шлиссельбург'
        },
        {
            city: 'Tihvin',
            image: tihvinIcon,
            label: 'Тихвин'
        },
        {
            city: 'Kingisepp',
            image: kingiseppIcon,
            label: 'Кингисепп Ивангород'
        },
        {
            city: 'Viborg',
            image: viborgIcon,
            label: 'Выборг'
        },
    ]

    const carousel = (
        cities.map((item) => (
            <button
                key={item.city}
                className={'flex-shrink-0 relative flex flex-col items-start rounded-2xl w-51 h-51 overflow-hidden bg-[#FAFAFA] text-[#333333] montserrat-bold text-lg'}
            >
                <p className={'px-2 pt-2 w-3 z-30 leading-5 text-left'}>{item.label}</p>
                <img
                    src={item.image}
                    alt={item.label}
                    className={'absolute z-20 bottom-0 left-0 w-full'}
                />
                <div className={'absolute h-35 -rotate-12 bottom-0 -left-3 z-10 w-100 bg-[#FCCB4B]'}></div>
            </button>
        ))
    )

    const profile = (
        <div className={'bg-[#E1E1E1] rounded-t-2xl w-full flex flex-col gap-6'}>
            <div className={'flex flex-col gap-4 items-center p-4'}>
                <div className={'size-20 p-5 bg-white rounded-full'}>
                    <img src={profileAvatarIcon} alt={'Your Picture'}/>
                </div>
                <p className={'montserrat-bold text-xl'}>{surveyState.userName}</p>
            </div>
            <div>
                {currentSection === 'main' ? (
                    <ul className={'flex flex-col items-center gap-6'}>
                        <li className={'w-50'}>
                            <button
                                className={'py-1 px-5 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Мои путешествия
                            </button>
                        </li>
                        <li className={'w-50'}>
                            <button
                                className={'py-1 px-5 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Настройки профилей
                            </button>
                        </li>
                        <li className={'w-50'}>
                            <button
                                onClick={() => {
                                    setCurrentSection('security');
                                }}
                                className={'py-1 px-5 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Настройки аккаунта
                            </button>
                        </li>
                        <li className={'w-50'}>
                            <button
                                className={'py-1 px-5 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Тарифы
                            </button>
                        </li>
                        <li className={'mt-5 w-50'}>
                            <button
                                className={'py-1 px-5 bg-[#FF0000] rounded-xl text-center montserrat-semi-bold text-white w-full text-[15px]'}>
                                Выйти
                            </button>
                        </li>
                    </ul>
                ) : (
                    <ul className={'flex flex-col items-center gap-6'}>
                        <li className={'w-50'}>
                            <button
                                className={'py-1 px-5 leading-4 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Восстановить пароль
                            </button>
                        </li>
                        <li className={'w-50'}>
                            <button
                                className={'py-1 px-5 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Безопасность
                            </button>
                        </li>
                        <li className={'w-50'}>
                            <button
                                className={'py-1 px-5 bg-[#F4F4F4] rounded-xl text-center montserrat-semi-bold text-[15px] w-full'}>
                                Служба поддержки
                            </button>
                        </li>
                    </ul>
                )
                }
            </div>
        </div>
    )

    return (
        <>
            {surveyState.profileOpen
                ? (profile)
                : (
                    <div className={'flex flex-col w-full'}>

                        <div className={'flex-grow'}>
                            <div className={'flex flex-col items-center gap-6 w-full max-w-md mx-auto'}>
                                <button
                                    className={'relative items-center justify-end bg-[#E1E1E1] rounded-2xl flex flex-col p-3 w-52 h-53 shadow-md/30 text-center montserrat-bold text-[#343330] text-[15px]'}>
                                    <img className={'absolute w-32 h-40 -top-1'} src={createNewTravelIcon}
                                         alt={'Создать новое путешествие'}/>
                                    <p>Создать новое путешествие</p>
                                </button>
                                <button
                                    className={'relative items-center justify-end bg-[#E1E1E1] rounded-2xl flex flex-col p-3 w-52 h-53 shadow-md/30 text-center montserrat-bold text-[#343330] text-[15px]'}>
                                    <img className={'absolute w-full'} src={myTravelsIcon} alt={'Мои путешествия'}/>
                                    <p>Мои путешествия</p>
                                </button>
                            </div>
                        </div>

                        <div className={'w-full'}>
                            <div className={'flex gap-3 overflow-x-auto w-full p-4'}>
                                {carousel}
                            </div>
                        </div>

                    </div>
                )}
        </>
    )
}