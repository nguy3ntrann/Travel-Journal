import React from "react"

export default function Card(props){
    return (
        <div className = "card">
            <div className = "card-image">
                <img src={"/img/" + props.card.img} />
            </div>

            <div className = "card-info">
                <div className = "card-location">
                    <p>{props.card.location}</p>
                </div>

                <div className = "card-name">
                    <h2>{props.card.name}</h2>
                </div>

                <div className = "card-date">
                    <h4>{props.card.date}</h4>
                </div>

                <div className = "card-description">
                    <p>{props.card.description}</p>
                </div>
            </div>
        </div>
    );
}