import React from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';
import './Summary.css'

const Summary = (props) => {

    const {task} = props;

    let totalTime = 0;
    for(const items of task){
        totalTime = totalTime + items.time;
    }


    const btns = document.querySelectorAll('.breakBtn');

    btns.forEach(breakBtn => {
        breakBtn.addEventListener('click', function(event){
            const clickedText = event.target.parentElement.innerText;
            localStorage.setItem("Break Time", clickedText);
        });
    });

    
    const breakBtnHandler = () => {
        console.log()
    }


    return (
        <div className="summary-info">
            <h2>My Pro</h2>

            <div>
                <h4>Anika Jumana KHanam</h4>
                <small>Junior WEb Developer</small>
            </div>

            <h2>Add A Break</h2>

            <div className='break-btn'>
                <button><span className='breakBtn'>10</span> m</button>
                <button><span className='breakBtn'>15</span> m</button>
                <button><span className='breakBtn'>30</span> m</button>
                <button><span className='breakBtn'>60</span> m</button>
                <button><span className='breakBtn'>90</span> m</button>

{/*             <BreakBtn></BreakBtn> */}     
            </div>

            <h2>Activity Details</h2>
            
            <div className='task-time'>
                <h4>Task Duration</h4>
                <p><span>{totalTime}</span> minutes</p>
            </div>

            <div className='break-time'>
                <h4>Break Time</h4>
                <p id='breakTimeDuration'> minutes</p>
            </div>

            <button className='activity-completed'>Activity Completed</button>
        </div>
    );
};

export default Summary;