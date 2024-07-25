import React, {useEffect, useState} from "react";
import './form-booking.css';

function FormBooking({openForm}) {
    const [displayForm, setDisplayForm] = useState(openForm);
    useEffect(() => {
        setDisplayForm(() => openForm)
        },[openForm])
    function exitForm () {
        setDisplayForm((s) => !s)
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
                    <input className="info_user" placeholder="Количество человек *" type="text"/>
                </div>
                <div>
                    <input/>
                </div>
            </form>
        </div>
    </div>
}

export default FormBooking;