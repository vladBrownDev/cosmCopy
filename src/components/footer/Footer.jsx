import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div id="footerLeft">
                    <div className="mainHeading">
                        Контакты
                    </div>
                    <div id="underCont">
                        <div>
                            <span className="boldCont">Телефон:</span>
                            <span className="lightCont"><a href="tel:+380952563232">+380(95)2563232</a></span>
                        </div>
                        <div>
                            <span className="boldCont">E-mail:</span>
                            <span className="lightCont">sbarrybrand@gmail.com</span>
                        </div>
                        <div>
                            <span className="boldCont">Часы работы:</span>
                            <span className="lightCont">10:00 - 20:00</span>
                        </div>
                        <div>
                            <span className="boldCont">Адрес:</span>
                            <span className="lightCont">г. Киев ул. Днепровская Набережная 14. ЖК. Риверстоун</span>
                        </div>
                    </div>
                </div>
                <iframe title ="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.8888382545762!2d30.614110646170925!3d50.40177438789685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5bafa84d223%3A0x3b3060d176daa730!2z0JTQvdC10L_RgNC-0LLRgdC60LDRjyDQvdCw0LHQtdGA0LXQttC90LDRjywgMTQsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1635704564727!5m2!1sru!2sua" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>            </footer>
            <div id="downFooter">
                © All Rights Reserved 2021.  Сайт разработан командой из “Itifico”
            </div>
        </>
    )
}

export default Footer;