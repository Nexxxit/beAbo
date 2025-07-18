import beAboLogo from '../assets/images/beAboLogo.png'
import FormField from "../components/commons/FormField.jsx";
import {useSurvey} from "../contexts/SurveyProvider.jsx";
import {useEffect} from "react";
import Button from "../components/commons/Button.jsx";
import {useNavigate} from "react-router";

export default function LoginPage() {
    const {setSurveyState} = useSurvey()

    useEffect(() => {
        setSurveyState({
            showHeader: true,
        })
    }, [])

    const navigate = useNavigate()

    return (
        <div className={'flex flex-col h-150 justify-between items-center gap-16 w-full'}>
            <img src={beAboLogo} alt={'beAbo Logo'} />
            <div className={'flex flex-col gap-20'}>
                <div className={'flex flex-col'}>
                    <label className={'px-2 montserrat-semi-bold text-[16px]'} htmlFor={'email'}>Email</label>
                    <FormField type={'email'}  id="email" required={true} />
                </div>

                <div className={'flex flex-col'}>
                    <label className={'px-2 montserrat-semi-bold text-[16px]'} htmlFor={'password'}>Пароль</label>
                    <FormField type={'password'}  id="password" required={true} />
                </div>
            </div>
            <div className={'mt-auto'}>
                <Button className={'px-9'} text={'Далее'} onClick={() => navigate('/app/home')} />
            </div>
        </div>
    )
}