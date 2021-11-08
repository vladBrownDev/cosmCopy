import React from 'react'
import './Review.css'



const Review = (props) => {
    return (
        <div className ="reviewItem">
            <div className="userInfo">
                <img src={props.img} alt="userAvatar"/>
                <div className="userName">
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {props.date}
                    </div>
                </div>
            </div>
            <div className="reviewText">
                {props.text}
            </div>
        </div>
    )
}

export default Review;