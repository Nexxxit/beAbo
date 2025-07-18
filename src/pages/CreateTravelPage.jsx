import metroIcon from '../assets/images/myTravelsImage/metroIcon.jpg'
import petergofIcon from '../assets/images/myTravelsImage/petergofIcon.jpg'
import piterCenterIcon from '../assets/images/myTravelsImage/piterCenterIcon.jpg'
import TravelSideCard from "../components/features/TravelSideCard.jsx";
import Advertising from "../components/commons/Advertising.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useSurvey} from "../contexts/SurveyProvider.jsx";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function CreateTravelPage() {
    const {surveyState, setSurveyState} = useSurvey()
    const navigate = useNavigate()
    const [openedSides, setOpenedSides] = useState({});
    const [travelSides, setTravelSides] = useState([
        {
            sideImg: piterCenterIcon,
            tags: ['#Популярное', '#Храмы'],
            sideName: 'Исаакиевский собор',
            sideDescription: 'Исаа́киевский собо́р — крупнейший православный храм в Санкт-Петербурге. Расположен на Исаакиевской площади',
            sideLinks: '',
        },
        {
            sideImg: petergofIcon,
            tags: ['#Музей', '#Познавательное'],
            sideName: 'Петергоф',
            sideDescription: 'Величественный дворцово-парковый ансамбль на берегу Финского залива',
            sideLinks: '',
        },
        {
            sideImg: metroIcon,
            tags: ['#Архитектура', '#Метро'],
            sideName: 'Метро Автово',
            sideDescription: 'Одна из красивейших станций Петербургского метрополитена',
            sideLinks: '',
        },
    ]);

    useEffect(() => {
        setSurveyState(prev => ({
            ...prev,
            showHeader: true,
            showName: true,
            showBackButton: true,
            handleBack: () => navigate(-1)
        }));
    }, []);

    const handleOpenTravel = (sideName) => {
        setOpenedSides(prev => {
            const newState = {[sideName]: !prev[sideName] || false};

            return Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === sideName ? !prev[sideName] : false;
                return acc;
            }, newState);
        });
    };

    const shuffleTravelSides = () => {
        setTravelSides(prev => [...prev].sort(() => Math.random() - 0.5));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = [...travelSides];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTravelSides(items);
    };

    return (
        <div className={'flex flex-col items-center w-full gap-4 px-4 pb-6'}>
            <p className={'text-center montserrat-extra-bold text-2xl text-[#343330]'}>
                {Object.values(openedSides).some(side => side) ? 'Твое путешествие' : 'Подобранные POI'}
            </p>
            <div className={'flex flex-col bg-black rounded-xl py-2 px-6 gap-2 w-full'}>
                <p className={'text-white text-center montserrat-bold text-xl'}>Сохрани свое путешествие</p>
                <div className={'flex gap-2 justify-center items-center'}>
                    <input
                        className={'px-2 w-40 bg-white placeholder:text-[#949494] montserrat-semi-bold placeholder:text-[15px] text-[15px] rounded-2xl'}
                        placeholder={'Введите название'}
                        required={true}
                    />
                    <button
                        onClick={() => navigate('/app/home')}
                        className={'bg-white text-center rounded-xl px-1 montserrat-semi-bold text-[15px]'}
                    >
                        Сохранить
                    </button>
                </div>
            </div>

            {!Object.values(openedSides).some(side => side) && (
                <>
                    <div className={'flex gap-6 w-full px-4'}>
                        <div className={'flex flex-col gap-3'}>
                            <input
                                className={'w-40 bg-[#e1e1e1] montserrat-semi-bold text-[15px] placeholder:text-[15px] text-[#949494] p-1 rounded-xl'}
                                placeholder={'Количество дней'}/>
                            <input
                                className={'w-35 bg-[#e1e1e1] montserrat-semi-bold text-[15px] placeholder:text-[15px] text-[#949494] p-1 rounded-xl'}
                                placeholder={'Радиус поиска'}/>
                        </div>
                        <div className={'ms-auto'}>
                            <button
                                onClick={shuffleTravelSides}
                                className={'text-white text-[15px] bg-black rounded-2xl leading-4 montserrat-semi-bold px-2 py-1 w-28 text-start'}>Пересобрать
                                подборку
                            </button>
                        </div>
                    </div>

                    <div className={'w-full p-4'}>
                        <p className={'text-[15px] montserrat-semi-bold leading-4'}>Вы можете перемещать точки интереса,
                            в
                            зависимости от того, что вы хотите посетить</p>
                    </div>
                </>
            )}

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="travelSides">
                    {(provided) => (
                        <div
                            className={'flex flex-col gap-4 w-full max-w-md mx-auto'}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {travelSides.map((travelSide, index) => (
                                <Draggable key={travelSide.sideName} draggableId={travelSide.sideName} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TravelSideCard
                                                travelSides={travelSide}
                                                openedSide={openedSides[travelSide.sideName] || false}
                                                handleOpenTravel={() => handleOpenTravel(travelSide.sideName)}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            {/*<div*/}
            {/*    className={'flex flex-col gap-6 w-full'}>*/}
            {/*    {travelSides.map((travelSide) => (*/}
            {/*        <div*/}
            {/*            key={travelSide.sideName}*/}
            {/*        >*/}
            {/*            <TravelSideCard*/}
            {/*                travelSides={travelSide}*/}
            {/*                openedSide={openedSides[travelSide.sideName] || false}*/}
            {/*                handleOpenTravel={() => handleOpenTravel(travelSide.sideName)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className={'mt-10'}>
                <Advertising text={'Устали подбирать точки вручную? Оформите подписку!'}/>
            </div>
        </div>
    )
}