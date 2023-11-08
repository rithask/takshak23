// import React from 'react';

// const Events = () => {
// 	  return (
// 		<>
// 		<div id="events" className="cards">
// 			<div className="card card-1">
// 				<img src={event3} alt="Flea Market" />
// 				<div className="card-content">
// 					<h2>Flea Market</h2>
// 				</div>
// 			</div>
// 			<div className="card card-2">
// 				<img src={event2} alt="gun" />
// 				<div className="card-content">
// 					<h2>Weapon Expo</h2>
// 				</div>
// 			</div>
// 			<div className="card card-3">		
// 				<img src={event1} alt="TELEI" />
// 				<div className="card-content">
// 					<h2>TELEI</h2>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="blackscreen"></div>
// 		</>
// 	);
// }

import React, { useState } from 'react';
import cons from '../Images/cons.webp';

const Events = () => {
  const cities = [
    { name: 'Paris', imageUrl: cons, num: '01' },
	{ name: 'Tokyo', imageUrl: 'https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=', num: '02' },
	{ name: 'Moscow', imageUrl: 'https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=', num: '03' },
	{ name: 'Dubai', imageUrl: 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=', num: '04' },
	{ name: 'Singapore', imageUrl: 'https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=', num: '05' },
	{ name: 'New York', imageUrl: 'https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=', num: '06' },
	
    // Add other city data here
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