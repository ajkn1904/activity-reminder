import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Summary from './components/Summary/Summary';

function App() {

  const [cards, setCards] = useState([]);
  const [activities, setActivities] = useState([]);


    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);


    
    const listHandler = (card) => {
        //console.log(card);
        const newActivities = [...activities, card];
        setActivities(newActivities);
    }



  return (
    <div className="App container">
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
        <Summary task={activities}></Summary>
      </div>
    </div>
  );
}

export default App;
