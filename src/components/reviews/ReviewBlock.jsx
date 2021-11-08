import React from 'react'
import Review from './review/Review'
import './ReviewBlock.css'
//images
import avatar from "../../images/avatar.png"
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ReviewBlock = () => {
    const sliderSettings =  {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        draggable:true,
    };
    return (
        <>
            <section id="reviewSec" name="reviews">
                <div id="reviewLeft" className="sectionLeft">
                    <div className="mainHeading">
                        Отзывы
                    </div>
                    <div className="sectionDesc">
                        Отзывы наших клиентов
                    </div>
                </div>
                <div id="reviewList">
                    <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                    text="С Подросткового возраста волновали высыпания на лице, обратилась к косметологу Лене, она мне рассказала какие мне нужно анализы сдать, подобрала домашний уход, а так же курс пилингов. Сейчас лицо стало намного лучше выглядеть"/>
                    <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                    text="Всю жизнь пользовалась эпилятором и бритвой из-за этого стали жутко врастать волосы, после делала шугаринг каждые 3 недели и только в этом году решила впервые пойти на лазерную эпиляцию, результат не заставил ждать. После 4 процедуры я заметила что волосы на ногах стали тоньше и светлее, а..."/>
                    <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                    text="Очень беспокоят морщины вокруг глаз, но не хочу прибегать к инъекциям. Лена порекомендовала аппаратную процедуру фотоомоложение. Благодаря ей мое лицо подтянулась, тон лица выровнялся, а так же я заметила, что воспалительные сосуды на крыльях носа исчезли. Спасибо большое, прийду ещё. "/>
                </div>
            </section>
            <section id="reviewSecMobile">
                <div className="mainHeading">
                    Отзывы
                </div>
                <Slider {...sliderSettings}>
                    <div>
                        <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                        text="С Подросткового возраста волновали высыпания на лице, обратилась к косметологу Лене, она мне рассказала какие мне нужно анализы сдать, подобрала домашний уход. Сейчас лицо стало намного лучше выглядеть"/>
                    </div>
                    <div>
                        <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                        text="Всю жизнь пользовалась эпилятором и бритвой из-за этого стали жутко врастать волосы, после делала шугаринг каждые 3 недели и только в этом году решила впервые пойти на лазерную эпиляцию, результат не заставил ждать."/>
                    </div>
                    <div>
                        <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                        text="Очень беспокоят морщины вокруг глаз, но не хочу прибегать к инъекциям. Лена порекомендовала аппаратную процедуру фотоомоложение. Благодаря ей мое лицо подтянулась, тон лица выровнялся,..."/>
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default ReviewBlock;