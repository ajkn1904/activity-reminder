import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Summary.css'



const Summary = (props) => {

    const {task} = props;

    let totalTime = 0;
    for(const items of task){
        totalTime = totalTime + items.time;
    }



    const [breakTime,setBreakTime]=useState('0')
    const onClick = e => {
    const newTime=e.target.innerText
    setBreakTime(newTime)
     localStorage.setItem('BreakTime', newTime)
     }
     useEffect(()=>{
        const showData = localStorage.getItem('BreakTime')
        setBreakTime(showData)
    },[]);



/* 
    const btns = document.querySelectorAll('.breakBtns');

    btns.forEach(breakBtns => {
        breakBtns.addEventListener('click', function(event){
            const clickedText = event.target.parentElement.innerText;
            localStorage.setItem("BreakTime", clickedText); 
            
            const showTime = localStorage.getItem('BreakTime');
            displayTime(showTime);
            
        });
    });
 */


    const toaster = () => toast("Congratulations! Your have successfully completed your all tasks.");


    return (
        <div className="summary-info">
            <h2>My Pro</h2>

            <div>
                <h4>Anika Jumana Khanam</h4>
                <small>Junior WEb Developer</small>
            </div>

            <h2>Add A Break</h2>

            <div className='break-btn'>
                <button onClick={onClick} className='breakBtns'>10</button>
                <button onClick={onClick} className='breakBtns'>15</button>
                <button onClick={onClick} className='breakBtns'>30</button>
                <button onClick={onClick} className='breakBtns'>60</button>
                <button onClick={onClick} className='breakBtns'>90</button>

    
            </div>
            <h2>Activity Details</h2>
            <small>Selected Activity: {task.length}</small>
            
            <div className='task-time'>
                <h4>Task Duration</h4>
                <p><span>{totalTime}</span> minutes</p>
            </div>

            <div className='break-time'>
                <h4>Break Time</h4>
                <p id='breakDuration'>{breakTime} minutes</p>
                
            </div>

            <button onClick={toaster} className='activity-completed'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Summary;