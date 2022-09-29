import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, about, image, time} = props.card;

    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card-details">
                <h3>{name} </h3>
                <p>{about}</p>
                <small>Duration: {time}</small>
            </div>
        </div>
    );
};

export default Card;