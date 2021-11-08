import React from 'react'
import './Header.css'
import { Accordion } from 'react-bootstrap'
import {Link} from "react-scroll"

import logo from "../../images/logo.png"
import desktopLogo from "../../images/Bastrykova.png"

const Header = () => {
    return (
    <>
    <Accordion id="mobileAcc" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <img alt="logo" id="mobileLogo" src={logo}/>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div id="mobileNav">
                                <div><Link offset={-50} to="about">Обо мне</Link></div>
                                <div><Link offset={-50} to="mServiceBlock">Услуги</Link></div>
                                <div><Link offset={-100} to="reviewSecMobile">Отзывы</Link></div>
                                <div><Link offset={-150} to="formSec">Записаться</Link></div>
                                <div><Link to="footerLeft">Контакты</Link></div>
                            </div>
                        </Accordion.Body>

                    </Accordion.Item>
        </Accordion>
        <header>
            <nav>
                <img alt="logo" src={desktopLogo}/>
                <div id="navbar">
                    <div className="chosen">Главная</div>
                    <div><Link offset={-250} to="about">Обо мне</Link></div>
                    <div><Link offset={-10} to="serviceBlock">Услуги</Link></div>
                    <div><Link offset={-250} to="reviewSec">Отзывы</Link></div>
                    <div><Link offset={-220} to="formSec">Записаться</Link></div>
                    <div><Link to="footerLeft" offset={-120}>Контакты</Link></div>
                </div>
                
            </nav>
            <div id="headerMain">
                <h1>
                    Сделай шаг к здоровой коже
                </h1>
                <div id="underHeader">
                    Дерматокосметолог Елена Бастрикова
                </div>
                <Link to="footerLeft">
                    <button>
                        Связаться
                    </button>
                </Link>
                
            </div>  
        </header>
    </>
    )
}

export default Header;