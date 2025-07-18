export default function TravelSideCard({travelSides, openedSide, handleOpenTravel}) {
    return (
        <div
            onClick={handleOpenTravel}
            className={`flex ${openedSide && 'flex-col'} bg-[#e1e1e1] shadow-md/30 rounded-2xl py-2 px-2 gap-3 w-full`}
        >
            <div className={`flex items-center rounded-2xl ${openedSide ? 'w-full h-full' : 'w-30'}`}>
                <img className={`rounded-2xl ${openedSide ? 'w-full h-50 object-cover' : 'size-30'}`} src={travelSides.sideImg} alt={travelSides.sideName}/>
            </div>
            <div className={'flex flex-col gap-1 flex-1'}>
                <div className={`flex flex-wrap gap-1 ${openedSide && 'order-3'}`}>
                    {travelSides.tags.map((tag) => (
                        <p
                            className={
                                'montserrat-semi-bold bg-[#F4F4F4] text-[#949494] text-[15px] px-1 rounded-2xl'
                            }
                            key={tag}
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                {openedSide && (
                    <div className={`flex flex-wrap gap-1 ${openedSide && 'order-2 py-3'}`}>
                        {travelSides.sideLinks ? (travelSides.sideLinks.map((link) => (
                            <a key={link} href={link}>{link}</a>
                        ))) : (<p className={'bg-white text-[#949494] px-2 py-1 rounded-2xl montserrat-semi-bold text-[15px]'}>Ссылки</p>)}
                    </div>
                )}
                <div className={`flex flex-col gap-2 ${openedSide && 'order-1'}`}>
                    <p className={'bg-white text-[#949494] px-2 py-1 rounded-2xl montserrat-semi-bold text-[15px] w-50'}>{travelSides.sideName}</p>
                    <p className={'bg-white text-[#949494] px-2 py-1 rounded-2xl montserrat-semi-bold text-[15px] h-30 leading-5'}>{travelSides.sideDescription}</p>
                </div>
            </div>
        </div>
    )
}