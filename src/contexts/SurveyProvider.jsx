import {createContext, useContext, useState} from "react";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
    const [surveyState, setSurveyState] = useState({
        showBackButton: false,
        handleBack: () => {}
    });

    return (
        <SurveyContext.Provider value={{ surveyState, setSurveyState }}>
            {children}
        </SurveyContext.Provider>
    )
}

export const useSurvey = () => useContext(SurveyContext);