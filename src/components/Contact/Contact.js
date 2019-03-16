import React from 'react';

import './Contact.scss';



const contact = () => {
    return (
        <div className="Contact">
            <div className="col-contacts">
                <p><b>Телефон / Viber:</b></p>
                <p>‎+38-(050)-709-88-28</p>
            </div>
            <div className="col-contacts">
                <p><b>Графік роботи:</b></p>
                <p> Пн – вихідний</p>
                <p>Вт-Сб 10:00-19:00</p>
                <p>Нд – 10:30-13:00</p>
            </div>

        </div>
    )
};

export default contact;
