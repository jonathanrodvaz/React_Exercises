import React from 'react';
import './Image.css'

const Image = () => {
    const picture = 'https://ih1.redbubble.net/image.975355242.4601/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.jpg'
    const altText = 'Its Purrgraming cat!'
    return (
        
            <img src={picture} alt={altText} />
        
    )
}

export default Image;