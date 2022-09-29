import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, about, image, time} = props.card;


    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card-details">
                <h2>{name} </h2>
                <p>{about}</p>
                <small>Duration: {time} min</small>
            </div>
            <button onClick={() => props.listHandler(props.card)}>Add to List</button>
        </div>
    );
};

export default Card;