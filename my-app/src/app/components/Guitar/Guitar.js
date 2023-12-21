import React, { useState } from 'react';
import GuitarBody from './GuitarBody.js';

const [strumDir, setStrumDir] = useState('down');

function updateStrumDir(e){
    setStrumDir(() => e.target.value === 'down' ? 'up' : 'down');
}



function Guitar(){
    const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);

    

    return (
        <div className="guitar">
            <GuitarBody currFrets={currFrets}/>
        </div>
    )
}

export default Guitar;
