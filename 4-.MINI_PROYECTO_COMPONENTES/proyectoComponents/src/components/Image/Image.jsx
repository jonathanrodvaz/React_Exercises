import React from 'react';
import './Image.css';

const Image = () => {
    const picture = 'https://1.bp.blogspot.com/_25gqK6FajPY/TPpnPErMAAI/AAAAAAAACMw/xM8pMpINpd4/s1600/The%252BSisters%252Bof%252BMercyTITULO14.jpg';

    return (
        
            <img src={picture} alt='A picture of Patricia Morrison and Andrew Eldritch from the band The Sisters Of Mercy' />
        
    )
}

export default Image;