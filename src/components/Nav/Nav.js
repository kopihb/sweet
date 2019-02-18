import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Nav.scss';



const nav = () => {
    return (
        <div className="Nav">
            <div className="nav-item"> Головна</div>
            <div className="nav-item">Про нас</div>
            <div className="nav-item">Начинки</div>
            <div className="nav-item">Кенді-бар</div>
            <div className="nav-item">Путівник</div>
            <div className="nav-item">Календар замовлення</div>
            <div className="nav-item">Питання</div>
            <div className="nav-item">Контакти</div>
            <Link
                to="/pathLink#yourAnchorTag"
            > Your link text </Link>
            <NavLink
                to="/some/path#with-hash-fragment"
                scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end' })}
                // etc...
            >Link to Hash Fragment</NavLink>

        </div>
    )
};

export default nav;

