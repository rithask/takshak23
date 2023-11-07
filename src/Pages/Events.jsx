import React from 'react';
import event1 from '../Images/car.webp';
import event2 from '../Images/gun.webp';
import event3 from '../Images/iedc.webp';

const Events = () => {
	  return (
		<>
		<div id="events" className="cards">
			<div className="card card-1">
				<img src={event3} alt="Flea Market" />
				<div className="card-content">
					<h2>Flea Market</h2>
				</div>
			</div>
			<div className="card card-2">
				<img src={event2} alt="gun" />
				<div className="card-content">
					<h2>Weapon Expo</h2>
				</div>
			</div>
			<div className="card card-3">		
				<img src={event1} alt="TELEI" />
				<div className="card-content">
					<h2>TELEI</h2>
				</div>
			</div>
		</div>
		<div className="blackscreen"></div>
		</>
	);
}

export default Events;