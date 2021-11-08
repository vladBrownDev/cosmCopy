import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceBlock.css'


import ServiceItem from './serviceItem/SevriceItem';
import pageText from "../text"


const ServiceBlock = () => { 
    const allServiceList = pageText.map((el) => <ServiceItem data={el}/>)
    const loadedServices = 6
    const slicedList = allServiceList.slice(0,loadedServices)
    let [filterButtons,setFilterButtons] = useState([
        {
            text: 'Косметология',
            id: 'cosmetic',
            activeClass:""
        },
        {
            text: 'Лазерная эпиляция',
            id: 'laser',
            activeClass:""
        },
        {
            text: 'Коррекция фигуры',
            id: 'figure',
            activeClass:""
        }
    ])
    let [shownServices, changeService] = useState(slicedList)
    let [moreClass, setMore] = useState("more")

    function setFilter (e) {
        setFilterButtons(filterButtons.map((f) => {
            return({
                text:f.text,
                id:f.id,
                activeClass:e.target.id === f.id ? "chosen" : ""
            })
        }))
        setMore("hidden")


        const currentFilterArr = pageText.filter((arrEl) => e.target.id === arrEl.type)
        const currentFilterComp = currentFilterArr.map((el) => <ServiceItem data = {el}/>)

        changeService(currentFilterComp)
    }

    function showMore () {
        changeService(allServiceList)
        setMore("hidden")
    }

    function cleanFilter () {
        setFilterButtons(filterButtons.map((f) => {
            return({
                text:f.text,
                id:f.id,
                activeClass:""
            })
        }))
        setMore("more")
        changeService(slicedList)
    }
    return (
        <>
            <section id="serviceBlock">
                <div id="serviceFilter">
                    <div className="sectionLeft">
                        <h1 className="mainHeading">
                            Услуги
                        </h1>
                        <div className="sectionDesc" id="filterDesc">
                            Для поддержания кожи в отличном состоянии, нужно не забывать регулярно уделять ей внимание. Бесплатная консультация при покупке любой процедры.
                        </div>
                    </div>
                    <div id="filterSect">
                        <h3>
                            Фильтры:
                        </h3>
                        <ul>
                            {filterButtons.map(el => <li id={el.id} onClick={setFilter} className={el.activeClass}>{el.text}</li>)}
                        </ul>
                        <div onClick={cleanFilter} id="cleanFilter">
                            Очистить фильтр
                        </div>    
                    </div>
                </div>
                <div className="serviceList">
                    {shownServices}
                </div>
            </section>
            <div className={moreClass} onClick={showMore}>
                <div>Смотреть ещё</div>
                <div id="downArr"></div>
            </div>
            <section id="mServiceBlock">
                <h1 className="mainHeading">
                    Услуги
                </h1>
                <div className="mInnerSec">
                    <div className="headSec">
                        Косметология
                    </div>
                    <div className="mSecDesc">
                        Для поддержания кожи в отличном состоянии, нужно не забывать регулярно уделять ей внимание.
                    </div>
                    <div className="mSecImg" id="cosmeticImg">

                    </div>
                    <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="moreMobile">Смотреть список услуг</Accordion.Header>
                            <Accordion.Body>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Комбинированная чистка</div>
                                      <div className="mItemPrice">700 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Ультразвуковая чистка</div>
                                      <div className="mItemPrice">200 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Массаж классический</div>
                                      <div className="mItemPrice">300 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Карбокситерапия</div>
                                      <div className="mItemPrice">600 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Пилинг</div>
                                      <div className="mItemPrice">600 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Альгинатная маска для лица</div>
                                      <div className="mItemPrice">200 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Мезотерапия</div>
                                      <div className="mItemPrice">1400 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Уход по типу кожи</div>
                                      <div className="mItemPrice">300 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Фотоомоложение</div>
                                      <div className="mItemPrice">500 грн.</div>
                                  </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="mInnerSec">
                    <div className="headSec">
                        Лазерная эпиляция
                    </div>
                    <div className="mSecDesc">
                        Удаления нежелательных волос Диодным лазером компании Lumenis (Америка)  Light Sheer 
                    </div>
                    <div className="mSecImg" id="laserImg">

                    </div>
                    <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="moreMobile">Смотреть список услуг</Accordion.Header>
                            <Accordion.Body>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Лазерная эпиляция лица</div>
                                      <div className="mItemPrice">100 - 400 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Лазерная эпиляция рук</div>
                                      <div className="mItemPrice">100 - 500 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Лазерная эпиляция ног</div>
                                      <div className="mItemPrice">100 - 500 грн.</div>
                                  </div>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Бикини полное</div>
                                      <div className="mItemPrice">500 грн.</div>
                                  </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="mInnerSec">
                    <div className="headSec">
                        Коррекция фигуры
                    </div>
                    <div className="mSecDesc">
                        От 6 до 10 процедур достаточно для заметного избавления от лишних сантиметров.                    </div>
                    <div className="mSecImg" id="figureImg">
                    </div>
                    <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="moreMobile">Смотреть список услуг</Accordion.Header>
                            <Accordion.Body>
                                  <div className="mobileListItem">
                                      <div className="mItemHead">Коррекция фигуры по зонам</div>
                                      <div className="mItemPrice">420 грн. за зону</div>
                                  </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                
            </section>
        </>
    )
}

export default ServiceBlock