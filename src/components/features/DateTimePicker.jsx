import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {registerLocale} from "react-datepicker";

registerLocale('ru', ru)

export default function DateTimePicker({value, onChange, isOpen, onClose}) {
    const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);

    useEffect(() => {
        setSelectedDate(value ? new Date(value) : null);
    }, [value]);

    const handleChange = (date) => {
        if (date && onChange) {
            setSelectedDate(date);
            onChange(date);
        }
    };

    return (
        <>
            {isOpen && (
                <DatePicker
                    selected={selectedDate}
                    onChange={handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Время"
                    dateFormat="dd.MM.yyyy HH:mm"
                    locale="ru"
                    inline
                    onClickOutside={onClose}
                />
            )}
        </>
    )
}