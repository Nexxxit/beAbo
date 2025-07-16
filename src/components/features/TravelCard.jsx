import completedIcon from '/src/assets/images/myTravelsImage/completedIcon.png'
import notCompletedIcon from '/src/assets/images/myTravelsImage/notCompletedIcon.png'


export default function TravelCard({myTravels}) {
    return (
        <div className={'p-2 bg-[#E1E1E1] shadow-md/30 rounded-2xl flex w-90'}>
            <div className={'w-44 h-42'}>
                <img className={'rounded-2xl object-cover w-full h-full'} src={myTravels.imgSrc}
                     alt={myTravels.travelName}/>
            </div>
            <div className={'flex flex-col justify-between pl-2 w-full'}>
                <div className={'bg-[#F4F4F4] rounded-2xl py-1 px-2 w-full'}>
                    <p className={'montserrat-semi-bold text-[15px] w-full'}>{myTravels.travelName}</p>
                </div>
                <div className={'flex'}>
                    <div className={'flex flex-col gap-2'}>
                        <button className={'bg-[#F4F4F4] py-1 px-5 text-center text-[15px] montserrat-semi-bold rounded-2xl'}>
                            Изменить
                        </button>
                        <button className={'bg-[#F4F4F4] py-1 px-5 text-center text-[15px] montserrat-semi-bold rounded-2xl'}>
                            Удалить
                        </button>
                    </div>
                    <div className={'self-end ms-auto'}>
                        <img src={myTravels.completed ? completedIcon : notCompletedIcon}
                             alt={myTravels.completed ? 'completed' : 'not completed'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}