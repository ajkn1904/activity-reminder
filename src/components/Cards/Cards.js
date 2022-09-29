import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);
    
    const listHandler = (card) => {
        console.log(card);
    }


    return (
        <div className='cards'>
            {
                cards.map(card => <Card 
                    card={card}
                    key={card._id}
                    listHandler= {listHandler}></Card>)
            }
            
        </div>
    );
};

export default Cards;