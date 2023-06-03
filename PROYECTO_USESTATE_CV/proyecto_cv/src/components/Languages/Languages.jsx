import React from 'react';
import './Languages.css';

const Languages = ({ languages }) => {
    return(
        <div className='languages'>
            
            <div className='languages card'>
                <h2>Languages</h2>
                <h3>
                    {languages.language}
                </h3>
                <p>✍️Writing: {languages.wrlevel}</p>
                <p>🎤Speaking: {languages.splevel}</p>
                
            </div>
        </div>
    )
}

export default Languages;