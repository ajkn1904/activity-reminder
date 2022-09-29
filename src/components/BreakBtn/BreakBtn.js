import React from 'react';
import './BreakBtn.css'

const BreakBtn = () => {
    return (
        <div className='break-btns'>
            <button><span>10</span> m</button>
            <button><span>15</span> m</button>
            <button><span>30</span> m</button>
            <button><span>60</span> m</button>
            <button><span>90</span> m</button>
        </div>
    );
};

export default BreakBtn;