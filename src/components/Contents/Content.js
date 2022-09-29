import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import './Content.css'

const Content = () => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);

    const listHandler = (card) => {
        console.log(card);
    };


    return (
        <div className='container'>
            <div className="activity-container"> 
                <h1>Select today's Task</h1> 
                <div className='cards'>
                    {
                    cards.map(card => <Card 
                        card={card}
                        key={card._id}
                        listHandler= {listHandler}></Card>)
                    }
                    </div>
            </div>

            <div className="activity-counter">
                <Summary></Summary>
            </div>
            
        </div>
    );
};

export default Content;