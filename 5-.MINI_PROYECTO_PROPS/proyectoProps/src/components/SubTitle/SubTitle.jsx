import React from 'react';
import { useEffect, useState } from "react";

const SubTitle = () => {
    
        let time = new Date().toLocaleTimeString(); 
        const [currentTime, setCurrentTime] = useState(time); 
        
        const updateTime =()=> {
          let time = new Date().toLocaleTimeString();
          setCurrentTime(time);
        }
      
        setInterval(updateTime, 1000); 
      
    return (
        <div>
            <h2>Just so you know, the current time is: {currentTime}</h2>
        </div>
    )
}

export default SubTitle;