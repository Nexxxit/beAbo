import {useSurvey} from "../contexts/SurveyProvider.jsx";
import Button from "../components/commons/Button.jsx";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export default function ChooseTravelProfilePage() {
    const {surveyState, setSurveyState} = useSurvey()
    const navigate = useNavigate()
    const location = useLocation()
    const [section, setSection] = useState('selectProfile');
    const [openedProfile, setOpenedProfile] = useState(null);

    useEffect(() => {
        const names = JSON.parse(localStorage.getItem('userNames')) || [];
        const initialSection = location.state?.section || 'selectProfile';
        setSection(initialSection);
        setSurveyState(prev => ({
            ...prev,
            userNames: names,
            showHeader: true,
            showName: true,
            showBackButton: true,
            handleBack: () => navigate(-1)
        }));
    }, [location.state]);

    const questions = [
        {
            id: 'q2',
            option1: 'Мало людей',
            option2: 'Много людей',
        },
        {
            id: 'q3',
            option1: 'Когда все запланировано',
            option2: 'Когда много импровизации',
        },
        {
            id: 'q4',
            option1: 'Смотреть и слушать',
            option2: 'Самому участвовать',
        },
        {
            id: 'q5',
            option1: 'Когда по правилам и разумно',
            option2: 'Когда много эмоций и порывов',
        },
        {
            id: 'q6',
            option1: 'Статусность',
            option2: 'Народный социальный формат',
        },
    ];

    const restrictionMapping = {
        smoking: 'Курение',
        disabled: 'Инвалидность',
        elderly: 'В возрасте',
        ecoFriendly: 'Эко-френдли',
        noRestriction: 'Нет ограничений',
        withPets: 'С животными'
    };

    const getPreferenceText = (questionId, answer) => {
        const question = questions.find(q => q.id === questionId);
        if (!question) return null;

        const value = parseInt(answer, 10);
        if (value < 0) {
            return question.option1;
        } else if (value > 0) {
            return question.option2;
        }
        return null;
    };


    const handleDelete = (user) => {
        localStorage.removeItem(user);
        const updatedNames = (JSON.parse(localStorage.getItem('userNames')) || []).filter(name => name !== user);
        localStorage.setItem('userNames', JSON.stringify(updatedNames));
        setSurveyState(prev => ({
            ...prev,
            userNames: updatedNames
        }));
        if (openedProfile === user) {
            setOpenedProfile(null);
        }
    };

    const profilesList = (
        <ul className={'flex flex-col gap-4 max-w-80 w-full h-full'}>
            {
                surveyState.userNames && surveyState.userNames.length > 0
                && surveyState.userNames.map((user) => {
                    const userAnswers = JSON.parse(localStorage.getItem(user)) || {};
                    return (
                        <li
                            onClick={section === 'selectProfile'
                                ? () => navigate('/app/register', {state: {startFrom: 'q7', currentName: user}})
                                : () => setOpenedProfile(openedProfile === user ? null : user)
                            }
                            className={`montserrat-semi-bold text-xl p-4 rounded-2xl bg-[#E1E1E1] shadow-md/30`}
                            key={user}
                        >
                            <p className={'montserrat-semi-bold text-xl'}>{user}</p>
                            <div className={'flex flex-col gap-2'}>
                                {openedProfile === user ? (
                                    <>
                                        <div className={'flex flex-col gap-3 p-3'}>
                                            <div className={'flex flex-col gap-2'}>
                                                <p className={'montserrat-semi-bold text-[#949494] text-xl leading-4'}>Ваши предпочтения:</p>
                                                <ul className={'text-sm leading-6'}>
                                                    {questions.map(q => {
                                                        const preferenceText = getPreferenceText(q.id, userAnswers[q.id]);
                                                        return preferenceText ? (
                                                            <li key={q.id}>{preferenceText}</li>
                                                        ) : null;
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={'flex flex-col gap-2'}>
                                                <p className={'montserrat-semi-bold text-[#949494] text-xl leading-4'}>Ваши ограничения:</p>
                                                <ul className={'text-sm leading-6'}>
                                                    {Object.keys(userAnswers.q8 || {})
                                                        .filter(key => userAnswers.q8[key] && key !== 'otherRestriction')
                                                        .map(key => (
                                                            <li key={key}>{restrictionMapping[key] || key}</li>
                                                        ))}
                                                    {userAnswers.q8?.otherRestriction && <li key="other">{userAnswers.q8.otherRestriction}</li>}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={'flex gap-3'}>
                                            <button
                                                onClick={() => navigate('/app/register', {state: {startFrom: 'q2', currentName: user}})}
                                                className={'bg-[#F4F4F4] py-1 px-5 text-center text-[15px] montserrat-semi-bold rounded-2xl flex-1'}
                                            >
                                                Редактировать
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user)}
                                                className={'bg-[#F4F4F4] py-1 px-5 text-center text-[15px] montserrat-semi-bold rounded-2xl flex-1'}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    section !== 'selectProfile' && (<p className={'montserrat-semi-bold text-xl text-[#949494]'}>{userAnswers.q9 || 'No email'}</p>)
                                )}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )

    return (
        <div className={'flex flex-col items-center gap-10 p-5 w-full'}>
            <div className={`${section === 'selectProfile' ? 'w-70' : 'w-full'}`}>
                <p className={'montserrat-bold leading-5 text-xl text-[#343330] text-center'}>
                    {section === 'selectProfile'
                        ? 'Выберите профиль, для которого вы генерируете маршрут'
                        : 'Список привязанных профилей'
                    }
                </p>
            </div>
            <div className={`flex flex-col justify-center items-center overflow-y-auto h-full w-full p-2 ${section === 'selectProfile' ? 'order-1' : 'order-2'}`}>
                {profilesList}
            </div>
            <div className={`flex flex-col items-center gap-20 ${section === 'selectProfile' ? 'order-2' : 'order-1'}`}>
                <Button className={'px-5 shadow-md/30'} onClick={() => navigate('/app/register')} text={'+ Привязать новый профиль'} />
                {section === 'selectProfile' && (
                    <p className={'montserrat text-xl text-center'}>
                        Изменить предпочтения и ограничения можно в <span className={'text-[#523FBF]'} onClick={() => setSection('linkedProfiles')}>"Настройках профиля"</span>
                    </p>
                )}
            </div>
        </div>
    )
}