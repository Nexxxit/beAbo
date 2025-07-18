import {useSurvey} from "../../contexts/SurveyProvider.jsx";
import backIcon from "../../assets/images/backIcon.png";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";


export function Header({className}) {
    const {surveyState, setSurveyState} = useSurvey();
    const location = useLocation();
    const navigate = useNavigate();
    const [isHomePage, setHomePage] = useState(false);

    useEffect(() => {
        setHomePage(location.pathname === '/app/home');
    }, [location.pathname])

    const toggleMenu = () => {
        setSurveyState((prev) => ({
            ...prev,
            profileOpen: !prev.profileOpen,
        }));
    };

    return (
        <>
            {surveyState.showHeader && (
                <header className={`flex justify-between items-center p-[17px] ${className}`}>
                    {surveyState.showName
                        ? (<p
                            onClick={location.pathname !== '/app/register' && (() => navigate('/app/home'))}
                            className="cursor-pointer montserrat-extra-bold text-[40px] text-[#343330]">BeAbo</p>)
                        : (<div className={'h-15'}></div>)
                    }

                    {isHomePage && surveyState.userName && !surveyState.profileOpen && (
                        <div className={'flex gap-3'}>
                            <p className={'montserrat-bold text-xl text-[#343330]'}>
                                {
                                    surveyState.userName && surveyState.userName.length > 0
                                        ?  surveyState.userName[surveyState.userName.length - 1]
                                        :  surveyState.userName
                                }
                            </p>
                            <button
                                className="relative w-8 h-[26px] bg-transparent border-none"
                                data-active={surveyState.profileOpen}
                                onClick={toggleMenu}
                            >
                            <span
                                className="absolute left-0 top-0 w-full h-1 rounded-full bg-black transition-all duration-300 ease-in-out data-[active=true]:top-[11px] data-[active=true]:rotate-45 data-[active=true]:shadow-none"
                            ></span>
                                <span
                                    className="absolute left-0 top-[11px] w-full h-1 rounded-full bg-black transition-all duration-300 ease-in-out data-[active=true]:opacity-0"
                                ></span>
                                <span
                                    className="absolute left-0 bottom-0 w-full h-1 rounded-full bg-black transition-all duration-300 ease-in-out data-[active=true]:bottom-[11px] data-[active=true]:-rotate-45"
                                ></span>
                            </button>
                        </div>
                    )}

                    {surveyState.showBackButton && (
                        <button onClick={surveyState.handleBack} className=''>
                            <img src={backIcon} alt="back"/>
                        </button>
                    )}

                </header>
            )}
        </>
    )
}