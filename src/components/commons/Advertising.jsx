import {useNavigate} from "react-router";

export default function Advertising({text}) {
    const navigate = useNavigate();

    return (
        <div className={'bg-[#AEFF00] rounded-2xl py-3 px-5 max-w-70'}>
            <button
                onClick={() => navigate('/app/priceList')}
                className={'w-full text-center montserrat-semi-bold text-xl leading-4'}>
                {text}
            </button>
        </div>
    )
}