import React from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';
import './Summary.css'

const Summary = (props) => {

    const {task} = props;

    let totalTime = 0;
    for(const items of task){
        totalTime = totalTime + items.time;
    }

    console.log(props.task);
    const breakeBtnHandler = () => {
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
                <BreakBtn></BreakBtn>     
            </div>

            <h2>Activity Details</h2>
            
            <div className='task-time'>
                <h4>Task Duration</h4>
                <p><span>{totalTime}</span> minutes</p>
            </div>

            <div className='beak-time'>
                <h4>Break Time</h4>
                <p> minutes</p>
            </div>

            <button className='activity-completed'>Activity Completed</button>
        </div>
    );
};

export default Summary;