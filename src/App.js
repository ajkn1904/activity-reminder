import React, { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/Blog/Blog';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
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
  <div>

    <div className="App container">
 
      <div className="activity-container">
        <Header></Header> 
        <h1>Select today's Task</h1> 
        <div className='cards'>
            {
                cards.map(card => <Card 
                    card={card}
                    key={card._id}
                    listHandler= {listHandler}></Card>)
            }
            
        </div>
        <Blog></Blog>
      </div>

      <div className="activity-counter">
        <Summary task={activities}></Summary>
      </div>

    </div>

    <Footer></Footer>
    
  </div>
  );
}

export default App;
