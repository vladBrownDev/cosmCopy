import React from 'react'
import './ServiceItem.css'

const ServiceItem = (props) => {
    return (
        <div id="serviceItem">
            <img alt="imgService" src={props.data.img}/>
            <h3>
                {props.data.heading}
            </h3>
            <span className="price">
                {props.data.price}
            </span>
            <span className="serviceDesc">
                {props.data.desc}
            </span>
        </div>
    )
}

export default ServiceItem;