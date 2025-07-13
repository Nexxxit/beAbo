import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from "./routes/Router.jsx";
import {SurveyProvider} from "./contexts/SurveyProvider.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurveyProvider>
        <Router />
    </SurveyProvider>
  </StrictMode>,
)
