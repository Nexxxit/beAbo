import logo from '../assets/images/beAboLogo.png'
import {Link} from "react-router";

export default function AuthPage() {

    return (
        <div className='flex flex-col justify-between items-center min-h-screen'>
            <div className='bg-white/20 mt-8'>
                <img src={logo} alt={'beAbo logo'}  />
            </div>
            <div className='flex flex-col gap-11 p-10 w-90'>
                <div className='flex flex-col gap-6'>
                    <p className='montserrat-semi-bold text-[#693131] text-xl text-center bg-white/20 p-1'>Получите своё персонализированное готовое путешествие самостоятельно!</p>
                    <Link className='shadow montserrat-semi-bold rounded-2xl py-5 text-xl text-center bg-[#F6BA00]' to={'/registration'} >Начать</Link>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='montserrat-semi-bold text-[#693131] text-[15px] text-center bg-white/20 p-1'>Если вы уже пользователь сервиса, войдите в свой аккаунт</p>
                    <Link className='shadow montserrat-semi-bold rounded-2xl py-5 text-xl text-center bg-[#F6BA00]' to={'/login'} >Войти</Link>
                </div>
            </div>
            <div className='self-end p-5'>
                <p className='text-white montserrat-semi-bold text-xl'>beabo.ru</p>
            </div>
        </div>
    )
}