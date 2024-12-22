import { FaStar } from "react-icons/fa";
import "./cardClientSay.css"
import { useState } from "react";


interface IDataReview {
    review? : number,
    heading: string,
    comment?: string,
    avatar?: string,
    username?: string,
    address?: string
}
export default function CardClientSay( { review, comment, heading, avatar, username, address }:IDataReview ) {
    const [rating, SetRating] = useState(review)
    const [hover, SetHover] = useState(null)

    
    return (
        <div className="card-card-client-say">
            <div className="review">
                {
                    [...Array(5)].map( (start, index) =>{
                        const currentRating = index + 1
                        return(
                            <label>
                                <input 
                                    type="radio"
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => SetRating(currentRating)}
                                />
                                <FaStar 
                                    className="star" 
                                    size={50} 
                                    color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                                    onMouseEnter={ () => SetHover(currentRating) }
                                    onMouseLeave={ () => SetHover(null) }
                                />
                            </label>
                        )
                    } )
                }

            </div>

            <div className="comment">
                <h3> {heading} </h3>
                <p>
                    {comment}
                </p>
            </div>

            <div className="user-avatar">
                <div className="avatar">
                    <img src={avatar} />
                </div>

                <div className="user-data">
                    <h1> {username} </h1>
                    <p> {address} </p>
                </div>
            </div>

        </div>
    )
}
