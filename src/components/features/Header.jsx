import {Link} from "react-router";
import {useSurvey} from "../../contexts/SurveyProvider.jsx";
import backIcon from "../../assets/images/backIcon.png";


export function Header({className}) {
    const {surveyState} = useSurvey();

    return (
        <header className={`flex justify-between items-center p-[17px] ${className}`}>
            <p className="montserrat-extra-bold text-[40px] text-[#343330]">BeAbo</p>
            {surveyState.showBackButton && (
                <button onClick={surveyState.handleBack} className=''>
                    <img src={backIcon} alt="back" />
                </button>
            )}
            {/*{currentStep !== 0 && (*/}
            {/*    <button className='' onClick={handlePrev}>*/}

            {/*    </button>*/}
            {/*)}*/}

            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Мои путешествия</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Настройки профилей</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Настройки аккаунта</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Тарифы</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Выйти</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </header>
    )
}