import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Nav.scss';
import logo from './../../logo.jpg';

const nav = () => {
    return (
        <div className="Nav">
            <div className="burger">
                <img src={logo} className="logo" alt="logo" />
            <nav role="navigation">
                <div id="menuToggle" >
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <div className="nav-item"> Головна</div>
                        <NavLink
                            to="/some/path#about"
                            scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}>
                            <div className="nav-item">Про нас</div></NavLink>
                        <NavLink
                            to="/some/path#sweet"
                            scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}>
                            <div className="nav-item">Начинки</div></NavLink>
                        <div className="nav-item">Кенді-бар</div>
                        <div className="nav-item">Путівник</div>
                        <div className="nav-item">Календар замовлення</div>
                        <NavLink
                            to="/some/path#questions"
                            scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}>
                            <div className="nav-item">Питання</div></NavLink>
                        <NavLink
                            to="/some/path#contacts"
                            scroll={el => el.scrollIntoView({ smooth: 'instant', block: 'end', behavior: 'smooth' })}>
                            <div className="nav-item">Контакти</div></NavLink>
                    </ul>
                </div>
            </nav>
            </div>
            <div className="top-menu">
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


        </div>
    )
};

export default nav;

