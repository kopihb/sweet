import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Nav.scss';



const nav = () => {
    return (
        <div className="Nav">
            <div className="nav-item"> Головна</div>

            <NavLink
                to="/some/path#about"
                scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}
                // etc...
            >   <div className="nav-item">Про нас</div></NavLink>

            <NavLink
                to="/some/path#sweet"
                scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}
                // etc...
            >   <div className="nav-item">Начинки</div></NavLink>

            <div className="nav-item">Кенді-бар</div>
            <div className="nav-item">Путівник</div>
            <div className="nav-item">Календар замовлення</div>

            <NavLink
                to="/some/path#questions"
                scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}
                // etc...
            >   <div className="nav-item">Питання</div></NavLink>

            <NavLink
                to="/some/path#contacts"
                scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}
                // etc...
            >   <div className="nav-item">Контакти</div></NavLink>




        </div>
    )
};

export default nav;

