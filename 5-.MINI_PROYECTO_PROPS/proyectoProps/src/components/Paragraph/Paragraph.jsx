import React from 'react';

const Paragraph = () => {
    let cheerMessage = 'Lets go!'
    let paragraphMessage = 'Hi! This is a project to practice with the React concept of props!'
    return (
        <div>
            <p>{paragraphMessage} {cheerMessage}</p>
        </div>
    )
}

export default Paragraph;