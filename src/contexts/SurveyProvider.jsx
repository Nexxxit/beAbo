import {createContext, useContext, useState} from "react";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
    const [surveyState, setSurveyState] = useState({
        showName: true,
        showHeader: true,
        showBackButton: false,
        profileOpen: false,
        userName: JSON.parse(localStorage.getItem('userName')) || '',
        handleBack: () => {}
    });

    return (
        <SurveyContext.Provider value={{ surveyState, setSurveyState }}>
            {children}
        </SurveyContext.Provider>
    )
}

export const useSurvey = () => useContext(SurveyContext);