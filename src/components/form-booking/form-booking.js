import React from "react";
import './form-booking.css';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";

import { DatePicker, Space } from 'antd';
import ru from 'antd/es/date-picker/locale/ru_RU';
import { exitFormBooking, numberPeople } from "../../actions";
import dayjs from 'dayjs';

const buddhistLocale= {
    ...ru,
    lang: {
        ...ru.lang,
        fieldDateFormat: 'YYYY-MM-DD',
        fieldDateTimeFormat: 'YYYY-MM-DD HH:mm',
        yearFormat: 'YYYY',
        cellYearFormat: 'YYYY',
        time: 'HH:mm'
    },
};

function FormBooking({}) {
    const dispatch = useDispatch();
    const numberPeopleList = ['Количество человек *','1 человек', '2 человека', '3 человека', '4 человека', '5 человек',
        '6 человек', '7 человек', '8 человек', '9 человек', '10 человек', 'Больше 10 человек']
        .map((el, index) => <option key={index} value={index}>{el}</option>);
    const handleChange = (e) => {
         dispatch(numberPeople(e.target.value))
    };
    const dateString = (el, date) => {
        console.log(date);
    };
    const disabledDateTime = () => {
        return {
            disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 23],
        };
    };
    const currentDate = new Date();
    const dateDay = currentDate.getHours() < 21 ? currentDate.getDate() : currentDate.getDate() + 1;
    const datetime = currentDate.getFullYear() + "-"
        + '0' + (currentDate.getMonth() + 1) + "-"
        + dateDay;
    const defaultValue = dayjs(datetime + ' 10:00');
    const dateFormat = 'YYYY-MM-DD';
        const displayForm = useSelector((s) => s.displayForm);
    function exitForm () {
        dispatch(exitFormBooking(false));
    }
    return <div className={displayForm ? "form_book" : "form_book_none"} onClick={exitForm} >
        <div className="fields_form" onClick={(e) => e.stopPropagation()}>
            <div className="header_form" >
                <h2 className="title_form_book">Забронировать стол</h2>
                <p className="description_form_book">Отправте запрос, наш менеджер уточнит информацию и перезвонит Вам</p>
                <button
                    className="exit_form_book"
                    onClick={exitForm}
                >
                    <span>x</span>
                </button>
            </div>
            <form className="container_form_book">
                <div>
                    <input className="info_user" placeholder="Ваше имя *" type="text" maxLength="30"/>
                    <input className="info_user" placeholder="Ваш телефон *" type="tel"/>
                    <input className="info_user" placeholder="Ваш E-mail" type="email"/>
                    <select  className="form_people info_user" onChange={handleChange}>
                        {numberPeopleList}
                    </select>
                    <textarea className="info_user comment" placeholder="Ваши пожелания"/>
                </div>
                <div className="form_time">
                    <Space direction="vertical">
                        <DatePicker
                            locale={buddhistLocale}
                            placeholder='Укажите дату и время *'
                            onChange={dateString}
                            className="info_user form_people"
                            popupStyle={displayForm ? {position: 'fixed', height: 0} : {display: 'none'}}
                            showTime
                            open='false'
                            defaultValue={defaultValue}
                            disabledTime={disabledDateTime}
                            minDate={dayjs(datetime, dateFormat)}
                        />
                    </Space>
                </div>
            </form>
            <button className="but_reserve form_send">Отправить</button>
        </div>
    </div>
}

export default FormBooking;


















