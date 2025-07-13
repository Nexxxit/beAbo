import { useState} from "react";

export default function Dropdown({options, handleSelectLocation}) {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)

    const handleSelectCountry = (country) => {
        setSelectedCountry(country)
        setSelectedCity(null)
    }

    const handleSelectCity = (city) => {
        setSelectedCity(city)
        handleSelectLocation(city, selectedCountry)
    }

    const handleBack = () => {
        setSelectedCountry(null);
    }

    return (
        <div className="w-full absolute z-30 bottom-0 bg-[#E1E1E1] rounded-t-2xl shadow p-1">
            {!selectedCountry ? (
                <ul className="w-full overflow-y-scroll flex flex-col gap-1 max-h-120">
                    {options.map((option) => (
                        <li
                            className="montserrat-semi-bold text-center rounded-2xl text-[#343330] cursor-pointer shadow p-3 bg-white"
                            key={option.country}
                            onClick={() => handleSelectCountry(option.country)}
                        >
                            {option.country}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>
                    <button
                        onClick={handleBack}
                        className="montserrat-semi-bold text-center text-[#343330] mb-2 p-2 bg-gray-200 w-full rounded-2xl"
                    >
                        ← Назад к странам
                    </button>

                    <ul className="w-full flex flex-col gap-1 max-h-120">
                        {options
                            .find(option => option.country === selectedCountry)
                            ?.cities.map((city) => (
                                <li
                                    className="montserrat-semi-bold text-center rounded-2xl text-[#343330] cursor-pointer shadow p-3 bg-white"
                                    key={city}
                                    onClick={() => handleSelectCity(city)}
                                >
                                    {city}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}