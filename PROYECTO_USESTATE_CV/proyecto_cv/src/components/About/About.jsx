import React from 'react';
import './About.css';

const AboutMe = ({ aboutMe }) => {
    return (
      <div>
        <div className="about card">
          {hero.map((aboutMe) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="about">📂 {aboutMe.info}</p>
                <p>{aboutMe.info}</p>
                <p>{aboutMe.info}</p>
                <p>{aboutMe.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default AboutMe;