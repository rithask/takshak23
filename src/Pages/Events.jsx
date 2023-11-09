import React from 'react';
import cinescope from '../Images/cinescope.webp';
import codecrusade from '../Images/codecrusade.webp';
import cons from '../Images/cons.webp';
import debate from '../Images/debate.webp';
import designathon from '../Images/designathon.webp';
import nouvam from '../Images/nouvam.webp';
import robotugOfWar from '../Images/robo_tug_of_war.webp';
import techbiz from '../Images/techbiz.webp';
import techquest from '../Images/techquest.webp';
import untangle from '../Images/untangle.webp';
import weaponexpo from '../Images/weaponexpo.webp';

const Events = () => {
  const cities = [
    { name: '', imageUrl: codecrusade, num: '01' },
	{ name: '', imageUrl: techquest, num: '02' },
	{ name: '', imageUrl: designathon, num: '03' },
	{ name: '', imageUrl: nouvam, num: '04' },
	{ name: '', imageUrl: robotugOfWar, num: '05' },
	{ name: '', imageUrl: cons, num: '06' },
	{ name: '', imageUrl: debate, num: '07' },
	{ name: '', imageUrl: techbiz, num: '08' },
	{ name: '', imageUrl: untangle, num: '09' },
	{ name: '', imageUrl: weaponexpo, num: '10' },
	{ name: '', imageUrl: cinescope, num: '11' },
  ];

  return (
    <div className="carousel">
      {cities.map((city, index) => (
        <div key={index} className="carousel-item">
          <div className="carousel-box">
            <div className="title">{city.name}</div>
            <div className="num">{city.num}</div>
            <img src={city.imageUrl} alt={city.name} />
          </div>
        </div>
      ))}
      <div className="cursor"></div>
      <div className="cursor cursor2"></div>
    </div>
  );
};

export default Events;