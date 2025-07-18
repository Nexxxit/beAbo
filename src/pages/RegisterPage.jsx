import {useEffect, useState} from "react";
import selectFewPeople from "../assets/images/scaleSelectionImages/selectFewPeople.png";
import selectManyPeople from "../assets/images/scaleSelectionImages/selectManyPeople.png";
import selectPlan from "../assets/images/scaleSelectionImages/selectPlan.png";
import selectImprovise from "../assets/images/scaleSelectionImages/selectImprovise.png";
import selectWatchAndListen from "../assets/images/scaleSelectionImages/selectWatchAndListen.png";
import selectParticipate from "../assets/images/scaleSelectionImages/selectParticipate.png";
import selectRules from "../assets/images/scaleSelectionImages/selectRules.png";
import selectEmotions from "../assets/images/scaleSelectionImages/selectEmotions.png";
import selectStatus from "../assets/images/scaleSelectionImages/selectStatus.png";
import selectSocial from "../assets/images/scaleSelectionImages/selectSocial.png";
import disabledRestrictionIcon from "../assets/images/restrictionsImage/disabledRestrictionIcon.png";
import ecoFriendlyRestrictionIcon from "../assets/images/restrictionsImage/ecoFriendlyRestrictionIcon.png";
import smokingRestrictionIcon from "../assets/images/restrictionsImage/smokingRestrictionIcon.png";
import withPetsRestrictionIcon from "../assets/images/restrictionsImage/withPetsRestrictionIcon.png";
import elderlyRestrictionIcon from "../assets/images/restrictionsImage/elderlyRestrictionIcon.png";
import noRestrictionIcon from "../assets/images/restrictionsImage/noRestrictionIcon.png";
import beAboLogo from "../assets/images/beAboLogo.png";
import Scale from "../components/features/Scale.jsx";
import Button from "../components/commons/Button.jsx";
import FormField from "../components/commons/FormField.jsx";
import {useSurvey} from "../contexts/SurveyProvider.jsx";
import Dropdown from "../components/commons/Dropdown.jsx";
import DateTimePicker from "../components/features/DateTimePicker.jsx";
import {useLocation, useNavigate} from "react-router";

export default function RegisterPage() {
    const location = useLocation();
    const initialStep = location.state && location.state.startFrom === 'q2'
        ? 1
        : location.state && location.state.startFrom === 'q7'
            ? 6
            : 0;
    const currentName = location.state?.currentName || null;
    const [currentStep, setCurrentStep] = useState(initialStep);
    const [error, setError] = useState();
    const [lastQuestionId, setLastQuestionId] = useState(null);
    const [history, setHistory] = useState([]);
    const {setSurveyState} = useSurvey();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [answers, setAnswers] = useState({
        q1: currentName || '',
        q7: {
            date: null, location: null,
        },
        q8: {
            smoking: false,
            disabled: false,
            elderly: false,
            ecoFriendly: false,
            noRestriction: false,
            withPets: false,
            otherRestriction: '',
        }
    });

    useEffect(() => {
        if (currentName) {
            const storedAnswers = JSON.parse(localStorage.getItem(currentName)) || {};
            setAnswers(prev => ({...prev, ...storedAnswers}));
        }
    }, [currentName]);

    const navigate = useNavigate();

    useEffect(() => {
        setSurveyState({
            showName: questions[currentStep].id !== 'q9',
            showHeader: true,
            showBackButton: currentStep > 0,
            handleBack: handleBack
        });
    }, [currentStep]);

    useEffect(() => {
        questions.forEach((question) => {
            if (question.type === 'scaleSelect' && !answers[question.id]) {
                handleChange(question.id, '0');
            }
        })
    }, [])

    const countries = [
        {
            country: "Россия",
            cities: ["Москва", "Санкт-Петербург", "Казань", "Сочи", "Новосибирск", "Владивосток"]
        },
        {
            country: "Тайланд",
            cities: ["Бангкок", "Пхукет", "Чиангмай", "Паттайя", "Краби", "Самуи"]
        },
        {
            country: "Япония",
            cities: ["Токио", "Киото", "Осака", "Хиросима", "Саппоро", "Нагано"]
        },
        {
            country: "Италия",
            cities: ["Рим", "Милан", "Венеция", "Флоренция", "Неаполь", "Палермо"]
        },
        {
            country: "Бразилия",
            cities: ["Рио-де-Жанейро", "Сан-Паулу", "Сальвадор", "Бразилиа", "Форталеза", "Манаус"]
        },
        {
            country: "США",
            cities: ["Нью-Йорк", "Лос-Анджелес", "Чикаго", "Майами", "Лас-Вегас", "Сиэтл"]
        },
        {
            country: "Германия",
            cities: ["Берлин", "Мюнхен", "Гамбург", "Кёльн", "Франкфурт", "Дюссельдорф"]
        },
        {
            country: "Мексика",
            cities: ["Мехико", "Канкун", "Гвадалахара", "Монтеррей", "Тихуана", "Пуэбла"]
        },
        {
            country: "Южная Корея",
            cities: ["Сеул", "Пусан", "Инчхон", "Тэгу", "Кванджу", "Ульсан"]
        },
        {
            country: "ОАЭ",
            cities: ["Дубай", "Абу-Даби", "Шарджа", "Аджман", "Рас-аль-Хайма", "Фуджейра"]
        }
    ];

    const questions = [
        {
            id: 'q1',
            text: 'Как вас зовут?',
            description: 'Заполните небольшую анкету, которая поможет сервису собрать для вас персональную программу путешествий',
        },
        {
            id: 'q2',
            type: 'scaleSelect',
            text: 'Выберите, что вам ближе?',
            option1: 'Мало людей',
            option2: 'Много людей',
            image1: selectFewPeople,
            image2: selectManyPeople,
        },
        {
            id: 'q3',
            type: 'scaleSelect',
            text: 'Выберите, что вам ближе?',
            option1: 'Когда все запланировано',
            option2: 'Когда много импровизации',
            image1: selectPlan,
            image2: selectImprovise,
        },
        {
            id: 'q4',
            type: 'scaleSelect',
            text: 'Выберите, что вам ближе?',
            option1: 'Смотреть и слушать',
            option2: 'Самому участвовать',
            image1: selectWatchAndListen,
            image2: selectParticipate,
        },
        {
            id: 'q5',
            type: 'scaleSelect',
            text: 'Выберите, что вам ближе?',
            option1: 'Когда по правилам и разумно',
            option2: 'Когда много эмоций и порывов',
            image1: selectRules,
            image2: selectEmotions,
        },
        {
            id: 'q6',
            type: 'scaleSelect',
            text: 'Выберите, что вам ближе?',
            option1: 'Статусность',
            option2: 'Народный социальный формат',
            image1: selectStatus,
            image2: selectSocial,
        },
        {
            id: 'q7',
            text: 'Укажите где и когда будете путешествовать?',
        },
        {
            id: 'q8',
            text: 'Укажите ваши ограничения в путешествии',
        },
        {
            id: 'q9',
            description: 'Ваш готовый маршрут путешествия уже сформирован. Оставьте свои данные для его отправки.'
        },
    ]

    const currentQuestion = questions[currentStep];

    const isQuestionComplete = (question) => {
        if (question.id === 'q7') {
            const q7 = answers.q7 || {};
            return q7.location?.country && q7.location?.city && q7.date;
        }

        if (question.id === 'q8') {
            const q8 = answers.q8 || {};
            const hasRestriction = Object.values(q8).some(val => typeof val === 'boolean' && val);
            const hasOtherRestriction = q8.otherRestriction && q8.otherRestriction.trim() !== '';
            return hasRestriction || hasOtherRestriction;

        }
        return answers[question.id];
    }

    const handleChange = (field, value, subField = null) => {
        setAnswers(prev => {
            if (subField !== null) {
                return {
                    ...prev,
                    [field]: {
                        ...prev[field],
                        [subField]: value
                    },
                }
            }

            return {
                ...prev,
                [field]: value
            }
        });
    }

    const handleShowDropdown = () => {
        setShowDropdown(true);
        setShowDatePicker(false);
    };

    const handleShowDatePicker = () => {
        setShowDatePicker(true);
        setShowDropdown(false);
    };

    const handleNext = () => {

        if (!isQuestionComplete(currentQuestion)) {
            setError("Пожалуйста, заполните все поля");
            return;
        }
        setError("");
        setLastQuestionId(currentQuestion.id);
        setHistory(prev => [...prev, currentStep]);

        if (location.state?.startFrom === 'q7') {
            setSurveyState(prev => ({
                ...prev,
                answers: {...prev.answers, ...answers}
            }));
            navigate('/app/createTravel')
        } else {
            setCurrentStep(prev => Math.min(prev + 1, questions.length - 1));
        }

    }

    const handleBack = () => {
        setError('');
        if (history.length > 1) {
            const prevStep = history[history.length - 2];
            setHistory(prev => prev.slice(0, -1));
            setCurrentStep(prevStep);
        } else {
            navigate(-1);
        }
    };

    useEffect(() => {
        if (lastQuestionId && currentQuestion.id !== lastQuestionId &&
            currentQuestion.type === 'scaleSelect' &&
            !answers[currentQuestion.id]) {

            handleChange(currentQuestion.id, '0');
        }
    }, [currentQuestion]);

    const handleSelectLocation = (travelCity, travelCountry) => {
        setAnswers(prev => ({
            ...prev,
            q7: {
                ...prev.q7,
                location: {country: travelCountry, city: travelCity},
            }
        }))
        setShowDropdown(false);
    }

    const handleSelectDateTime = (date) => {
        if (!date) {
            setAnswers(prev => ({
                ...prev,
                q7: {
                    ...prev.q7,
                    date: null
                }
            }))
            return;
        }

        setAnswers(prev => ({
            ...prev,
            q7: {
                ...prev.q7,
                date: date.toISOString(),
            }
        }))
    }

    const handleSubmit = () => {
        const name = answers['q1'];
        if (name) {
            localStorage.setItem(name, JSON.stringify(answers));
            let names = JSON.parse(localStorage.getItem('userNames')) || [];
            if (!names.includes(name)) {
                names.push(name);
                localStorage.setItem('userNames', JSON.stringify(names));
                setSurveyState(prev => ({
                    ...prev,
                    userNames: names,
                }));
            }
        }
        navigate('/app/home');
    }

    return (
        <div className='flex flex-col min-h-full w-full gap-30'>
            <div className='flex flex-col items-center gap-15 px-2'>
                {currentQuestion.id !== 'q9' && (
                    <p className='montserrat-extra-bold text-center text-2xl text-[#343330]'>{currentQuestion.text}</p>
                )}

                {currentQuestion.id === 'q1' && (
                    <>
                        <FormField
                            type={'text'}
                            className={'montserrat-semi-bold  placeholder:montserrat-semi-bold placeholder:text-[#343330]'}
                            placeholder={'Ваше имя'}
                            value={answers[currentQuestion.id] || ''}
                            onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                            required={true}
                        />
                        <p className='text-center montserrat text-xl'>{currentQuestion.description}</p>
                    </>
                )}

                {currentQuestion.id === 'q7' && (
                    <div className="flex flex-col items-center gap-4 w-full px-5">
                        <button
                            className="relative text-center montserrat-semi-bold text-xl bg-[#CBCACA] rounded-2xl py-3 w-full"
                            onClick={handleShowDropdown}
                        >
                            {answers.q7?.location
                                ? `${answers.q7.location.country}, ${answers.q7.location.city || 'город'}`
                                : 'Страна, город'}
                        </button>
                        {showDropdown && <Dropdown options={countries} handleSelectLocation={handleSelectLocation}/>}

                        <button
                            className="relative text-center montserrat-semi-bold text-xl bg-[#CBCACA] rounded-2xl py-3 w-full"
                            onClick={handleShowDatePicker}
                        >
                            {answers.q7?.date
                                ? new Date(answers.q7.date).toLocaleString('ru-RU', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })
                                : 'Дата и время'}
                        </button>
                        {showDatePicker && (
                            <DateTimePicker
                                value={answers.q7?.date}
                                onChange={handleSelectDateTime}
                                isOpen={showDatePicker}
                                onClose={() => setShowDatePicker(false)}
                            />
                        )}
                    </div>
                )}

                {currentQuestion.id === 'q8' && (
                    <>
                        <div className={'grid grid-rows-2 grid-cols-3 gap-x-11 gap-y-10'}>
                            <input
                                className={'hidden'}
                                type='checkbox'
                                id='smoker'
                                name='restrictions'
                                checked={answers.q8.smoking || false}
                                onChange={(e) => handleChange('q8', e.target.checked, 'smoking')}

                            />
                            <label
                                className={`flex justify-center items-center p-2 shadow-md/30 rounded-xl ${answers.q8.smoking ? 'bg-[#A0D9A9]' : 'bg-[#CBCACA]'}`}
                                htmlFor='smoker'>
                                <img src={smokingRestrictionIcon} alt='Smoking Restriction'/>
                            </label>

                            <input
                                className={'hidden'}
                                type='checkbox'
                                id='disabled'
                                name='restrictions'
                                checked={answers.q8.disabled || false}
                                onChange={(e) => handleChange('q8', e.target.checked, 'disabled')}
                            />
                            <label
                                className={`flex justify-center items-center p-2 shadow-md/30 rounded-xl ${answers.q8.disabled ? 'bg-[#A0D9A9]' : 'bg-[#CBCACA]'} `}
                                htmlFor='disabled'>
                                <img src={disabledRestrictionIcon} alt='Disabled Restriction'/>
                            </label>

                            <input
                                className={'hidden'}
                                type='checkbox'
                                id='elderly'
                                name='restrictions'
                                checked={answers.q8.elderly || false}
                                onChange={(e) => handleChange('q8', e.target.checked, 'elderly')}

                            />
                            <label
                                className={`flex justify-center items-center p-2 shadow-md/30 rounded-xl ${answers.q8.elderly ? 'bg-[#A0D9A9]' : 'bg-[#CBCACA]'}`}
                                htmlFor='elderly'>
                                <img src={elderlyRestrictionIcon} alt='Elderly Restriction'/>
                            </label>

                            <input
                                className={'hidden'}
                                type='checkbox'
                                id='eco-friendly'
                                name='restrictions'
                                checked={answers.q8.ecoFriendly || false}
                                onChange={(e) => handleChange('q8', e.target.checked, 'ecoFriendly')}

                            />
                            <label
                                className={`flex justify-center items-center p-2 shadow-md/30 rounded-xl ${answers.q8.ecoFriendly ? 'bg-[#A0D9A9]' : 'bg-[#CBCACA]'}`}
                                htmlFor='eco-friendly'>
                                <img src={ecoFriendlyRestrictionIcon} alt='Eco Friendly Restriction'/>
                            </label>

                            <input
                                className={'hidden'}
                                type='checkbox'
                                id='no-restrictions'
                                name='restrictions'
                                checked={answers.q8.noRestriction || false}
                                onChange={(e) => handleChange('q8', e.target.checked, 'noRestriction')}

                            />
                            <label
                                className={`flex justify-center items-center p-2 shadow-md/30 rounded-xl ${answers.q8.noRestriction ? 'bg-[#A0D9A9]' : 'bg-[#CBCACA]'}`}
                                htmlFor='no-restrictions'>
                                <img src={noRestrictionIcon} alt='No restrictions'/>
                            </label>

                            <input
                                className={'hidden'}
                                type='checkbox'
                                id='with-pets'
                                name='restrictions'
                                checked={answers.q8.withPets || false}
                                onChange={(e) => handleChange('q8', e.target.checked, 'withPets')}

                            />
                            <label
                                className={`flex justify-center items-center p-2 shadow-md/30 rounded-xl ${answers.q8.withPets ? 'bg-[#A0D9A9]' : 'bg-[#CBCACA]'}`}
                                htmlFor='with-pets'>
                                <img src={withPetsRestrictionIcon} alt='With Pets Restriction'/>
                            </label>
                        </div>

                        <input
                            className={'bg-[#CBCACA] w-60 p-4 rounded-2xl placeholder:text-center placeholder:text-[#343330] placeholder:montserrat-semi-bold placeholder:text-[16px]'}
                            type='text'
                            placeholder='Другие ограничения'
                            value={answers.q8.otherRestriction || ''}
                            onChange={(e) => handleChange('q8', e.target.value, 'otherRestriction')}

                        />
                    </>
                )}

                {currentQuestion.type === 'scaleSelect' && (
                    <div className='flex flex-col bg-[#E1E1E1] px-5 py-3 rounded-xl'>
                        <div className='flex gap-5 pb-2 text-center items-center'>
                            <div
                                className='text-[#343330] montserrat-semi-bold text-[16px] flex-1'>{currentQuestion.option1}</div>
                            <div
                                className='text-[#343330] montserrat-semi-bold text-[16px] flex-1'>{currentQuestion.option2}</div>
                        </div>
                        <div className='flex gap-5 pb-7 justify-between'>
                            <div className={'flex-1'}>
                                <img className={'h-50 w-full'} src={currentQuestion.image1}
                                     alt={currentQuestion.option1}/>
                            </div>
                            <div className={'flex-1'}>
                                <img className={'h-50 w-full'} src={currentQuestion.image2}
                                     alt={currentQuestion.option1}/>
                            </div>
                        </div>
                        <Scale changeAnswer={handleChange} currentQuestionId={currentQuestion.id}
                               value={answers[currentQuestion.id] || '0'}/>
                    </div>
                )}

                {currentQuestion.id === 'q9' && (
                    <div className={'flex flex-col items-center justify-center w-full'}>
                        <img className={'max-w-70 w-full'} src={beAboLogo} alt={'beAbo Logo'}/>
                        <p className={'text-center my-10 montserrat text-xl'}>{currentQuestion.description}</p>
                        <div className={'flex flex-col items-center pb-2 w-full'}>
                            <div>
                                <label className={'px-2 montserrat-semi-bold text-[16px] text-[#343330]'}
                                       htmlFor={'email'}>Email</label>
                                <input
                                    type={'email'}
                                    value={answers[currentQuestion.id] || ''}
                                    className={'p-3 rounded-2xl montserrat text-xl bg-[#CBCACA] max-w-80 w-full'}
                                    id={'email'}
                                    onChange={(e) => handleChange('q9', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col items-center gap-6'}>
                            <p className={'text-center montserrat text-[15px] w-60'}>Пароль от ЛК также придет на
                                указанную почту</p>
                            <p className={'text-center montserrat text-[15px]'}>Поменять его можно в любой момент</p>
                        </div>
                    </div>
                )}
            </div>

            <div className='mx-auto mb-auto'>
                <Button
                    className={'px-9'}
                    text={currentStep === questions.length - 1 ? 'Отправить' : 'Далее'}
                    onClick={currentStep === questions.length - 1 ? handleSubmit : handleNext}
                    disabled={!isQuestionComplete(currentQuestion)}
                />
            </div>

        </div>
    )
}