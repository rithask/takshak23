import React, { useState } from 'react';
import cons from '../Images/cons.webp';
import debate from '../Images/debate.webp';
import tugOfWar from '../Images/robo_tug_of_war.webp';

const Events = () => {
  const cities = [
    { name: '', imageUrl: cons, num: '01' },
	{ name: '', imageUrl: debate, num: '02' },
	{ name: '', imageUrl: tugOfWar, num: '03' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === cities.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cities.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      {cities.map((city, index) => (
        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
          <div className="carousel-box">
            <div className="title">{city.name}</div>
            <div className="num">{city.num}</div>
            <img src={city.imageUrl} alt={city.name} />
          </div>
        </div>
      ))}
      <div className="cursor"></div>
      <div className="cursor cursor2"></div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Events;