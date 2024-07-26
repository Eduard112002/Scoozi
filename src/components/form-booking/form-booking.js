import React from "react";
import './form-booking.css';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";

import { DatePicker, Space } from 'antd';
import ru from 'antd/es/date-picker/locale/ru_RU';
import { exitFormBooking, numberPeople } from "../../actions";

const buddhistLocale= {
    ...ru,
    lang: {
        ...ru.lang,
        fieldDateFormat: 'YYYY-MM-DD',
        fieldDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        yearFormat: 'YYYY',
        cellYearFormat: 'YYYY',
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
    const displayForm = useSelector((s) => s.displayForm);
    function exitForm () {
        dispatch(exitFormBooking(false));
    }
    return <div className={displayForm ? "form_book" : "form_book_none"} >
        <div className="fields_form">
            <div className="header_form">
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
                </div>
                <div className="form_time">
                    <label className="form_time_title">Укажите дату и время *</label>
                    <Space direction="vertical" >
                        <DatePicker locale={buddhistLocale}/>
                    </Space>
                </div>
            </form>
        </div>
    </div>
}

export default FormBooking;