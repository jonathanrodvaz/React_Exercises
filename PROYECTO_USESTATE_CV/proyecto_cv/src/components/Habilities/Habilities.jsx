import React from 'react';
import './Habilities.css';

const Habilities = ({ habilities }) => {
    return(
        <div className='habilities'>
            
            <div className='habilities card'>
                <h2>Skills</h2>
                <p>{habilities[0]}</p>
                <p>{habilities[1]}</p>
                <p>{habilities[2]}</p>
                <p>{habilities[3]}</p>
                <p>{habilities[4]}</p>
                <p>{habilities[5]}</p>
                <p>{habilities[6]}</p>
                <p>{habilities[7]}</p>
                
            </div>
        </div>
    )
}

export default Habilities;