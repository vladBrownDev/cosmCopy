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
    const settings =  {
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
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                    <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                    <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                </div>
            </section>
            <section id="reviewSecMobile">
                <div className='mobileHeader'>
                   Отзывы
                </div>
                <Slider {...settings}>
                    <div>
                        <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                    </div>
                    <div>
                        <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                    </div>
                    <div>
                        <Review img={avatar} name="Имя Фамилия" date="20.20.2020"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default ReviewBlock;