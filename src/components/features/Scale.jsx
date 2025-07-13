export default function Scale({changeAnswer, currentQuestionId, value}) {
    const selectedValue = value;

    const options = [
        {value: '-3', id: 'option1', label: '3'},
        {value: '-2', id: 'option2', label: '2'},
        {value: '-1', id: 'option3', label: '1'},
        {value: '0', id: 'option4', label: '0'},
        {value: '1', id: 'option5', label: '1'},
        {value: '2', id: 'option6', label: '2'},
        {value: '3', id: 'option7', label: '3'},
    ]


    const handleChange = (e) => {
        const newValue = e.target.value;
        changeAnswer(currentQuestionId, newValue);
    }

    return (<div className={`bg-[#F9F9F9] rounded-3xl flex justify-between items-center p-1 overflow-visible z-10`}>
        {options.map((option) => (
            <div
                key={option.id}
                className='relative flex justify-center'
            >
                <input
                    className='hidden'
                    type='radio'
                    name='scaleOptions'
                    id={option.id}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={handleChange}
                />
                <label
                    className={`relative z-30 rounded-full text-[#343330] text-lg montserrat-semi-bold w-6 h-6 items-center text-center cursor-pointer transition-colors ${selectedValue === option.value ? 'text-white' : ''}`}
                    htmlFor={option.id}
                >
                    {option.label}
                </label>


                {selectedValue === option.value && (
                    <div className='
                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#949494] rounded-full z-20'/>)}
            </div>))}
    </div>)
}