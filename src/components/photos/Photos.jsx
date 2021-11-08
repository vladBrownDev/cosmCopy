import React from 'react'
import './Photos.css'

import first from "../../images/photoComp/1.png"
import sec from "../../images/photoComp/2.png"
import third from "../../images/photoComp/3.png"
import fBef from "../../images/photoComp/1-before.png"
import sBef from "../../images/photoComp/2-before.png"
import tBef from "../../images/photoComp/3-before.png"


const Photos = () => {
    return (
        <section id="photoSec">
            <div className="sectionLeft" >
                <h1 className="mainHeading">
                    Фото
                </h1>
                <div className="sectionDesc" id="photosDesc">
                    Фото наши клиентов, до и после процедур.
                </div>
            </div>
            <div id="photoList">
                <div className="befAf">До</div>
                <img src={fBef} alt="examplePhoto"/>
                <img src={sBef} alt="examplePhoto"/>
                <img src={tBef} alt="examplePhoto"/>
                <div className="befAf">После</div>
                <img src={first} alt="examplePhoto"/>
                <img src={sec} alt="examplePhoto"/>
                <img src={third} alt="examplePhoto"/>
            </div>
        </section>
        
        
    )
}

export default Photos;