import React from "react";
import './header.css'

export default function Header() {
    const navButtonName = ['О ресторане', 'Интерьер', 'Акции', 'Оставить отзыв'];
    const navButton = navButtonName.map(el => {
        return <li key={el} className="navigation_button" onClick={() => console.log(el)}><a href="#">{el}</a></li>
    });
    return (<header className="header">
        <nav className="navigation_container">
            <img src="https://scoozi.ru/images/logo3.png" className="navigation_logo"/>
            <ul className="navigation_list">{navButton}</ul>
        </nav>
        <div className="info_restaurant">
            <h1 className="title_restaurant"><span className="logo_title">SCOOZI</span> — НАСТОЯЩИЙ <br/> <span className="text_title">СЕМЕЙНЫЙ РЕСТОРАН</span></h1>
            <p className="info_restaurant__text">В нашем меню вы найдёте традиционную пиццу из печи, итальянскую пасту, классические и авторские горячие блюда, свежую рыбу и морепродукты, легкие салаты, разнообразные закуски и легкие десерты, приготовленные нашими поварами по оригинальным и классическим рецептам.</p>
        </div>
        <button className="but_reserve">Забронировать стол</button>
        <div className="connection_list">
                <span className="connection_list_element">Наш адрес:<br/> Ворошиловский торговый центр, 3 этаж</span>
                <span className="connection_list_element">Мы на связи<a href="tel: +7 (960) 869-1000" className="telephone">+7 (960) 869-1000</a></span>
                <span className="connection_list_element">Часы работы ежедневно:<br/> с 11:00 до 22:00</span>
                <span className="connection_list_element">Наша группа Вконтакте
                    <a target="blank" href="https://vk.com/scoozi_pasta_pizza" className="logo_vk"></a>
                </span>
        </div>
    </header>)
}