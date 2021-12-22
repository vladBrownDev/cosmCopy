import React, {useState} from 'react'
import './MobilePhotos.css'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import b1 from "../../images/mobileComp/1.jpg"
import a1 from "../../images/mobileComp/11.jpg"
import b2 from "../../images/mobileComp/2.jpg"
import a2 from "../../images/mobileComp/22.jpg"
import b3 from "../../images/mobileComp/3.jpg"
import a3 from "../../images/mobileComp/33.jpg"
import b4 from "../../images/mobileComp/4.jpg"
import a4 from "../../images/mobileComp/44.jpg"

const beforeCompObject = {
    b1Object : {
        imageUrl: b1
    },
    a1Object : {
        imageUrl: a1
    },
    b2Object : {
        imageUrl: b2
    },
    a2Object : {
        imageUrl: a2
    },
    b3Object : {
        imageUrl: b3
    },
    a3Object : {
        imageUrl: a3
    },
    b4Object : {
        imageUrl: b4
    },
    a4Object : {
        imageUrl: a4
    },
}

const bigPicArr = [
    <ReactBeforeSliderComponent className='beforeAfter'
        firstImage={beforeCompObject.b1Object}
        secondImage={beforeCompObject.a1Object}
    />,
    <ReactBeforeSliderComponent className='beforeAfter'
        firstImage={beforeCompObject.b2Object}
        secondImage={beforeCompObject.a2Object}
    />,
    <ReactBeforeSliderComponent className='beforeAfter'
        firstImage={beforeCompObject.b3Object}
        secondImage={beforeCompObject.a3Object}
    />,
    <ReactBeforeSliderComponent className='beforeAfter'
        firstImage={beforeCompObject.b4Object}
        secondImage={beforeCompObject.a4Object}
    />
]



const MobilePhotos = () => {
    const [smallPicsState, changePics] = useState([
        <img onClick={setPics} name="a2name" className='smallImage' src={a2} alt=""/>,
        <img onClick={setPics} name="a3name" className='smallImage' src={a3} alt=""/>,
        <img onClick={setPics} name="a4name" className='smallImage' src={a4} alt=""/>
    ])
    const [bigPic, changeBigPic] = useState(bigPicArr[0])

    function setPics (e) {
        const name = e.target.name
        const imageObject = {
            a1Tag : <img onClick={setPics} name="a1name" className='smallImage' src={a1} alt=""/>,
            a2Tag : <img onClick={setPics} name="a2name" className='smallImage' src={a2} alt=""/>,
            a3Tag : <img onClick={setPics} name="a3name" className='smallImage' src={a3} alt=""/>,
            a4Tag : <img onClick={setPics} name="a4name" className='smallImage' src={a4} alt=""/>
        }
        if(name ==="a1name") {
            changeBigPic(bigPicArr[0])
            changePics([imageObject.a2Tag,imageObject.a3Tag,imageObject.a4Tag])
        }
        if(name ==="a2name") {
            changeBigPic(bigPicArr[1])
            changePics([imageObject.a1Tag,imageObject.a3Tag,imageObject.a4Tag])
        }
        if(name ==="a3name") {
            changeBigPic(bigPicArr[2])
            changePics([imageObject.a1Tag,imageObject.a2Tag,imageObject.a4Tag])
        }
        if(name ==="a4name") {
            changeBigPic(bigPicArr[3])
            changePics([imageObject.a2Tag,imageObject.a3Tag,imageObject.a1Tag])
        }
    }

    return (
        <section id="mobilePhotos">
           <div className='mobileHeader'>
               Фото
           </div>
           <div className="mSecDesc">
                Фото наших клиентов, до и после процедур.
           </div>
           <div id="photoSelect">
                {bigPic}
           </div>
           <div id="smallImagesCont">
                {smallPicsState}
           </div>
        </section>
    )
}

export default MobilePhotos;