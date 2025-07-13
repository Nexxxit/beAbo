import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {registerLocale} from "react-datepicker";

registerLocale('ru', ru)

export default function DateTimePicker({value, onChange}) {
    return (
        <DatePicker
            selected={value ? new Date(value) : null}
            onChange={onChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption={'Время'}
            dateFormat="dd.MM.yyyy HH:mm"
            locale={'ru'}
            customInput={
                <button
                    className={'montserrat-semi-bold text-xl text-center bg-[#CBCACA] rounded-2xl py-3 w-60 cursor-pointer'}
                >
                    {value
                        ? new Date(value).toLocaleString('ru-RU', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })
                        : 'Дата и время'}
                </button>
            }
        />
    )
}