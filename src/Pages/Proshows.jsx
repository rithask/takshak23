import React from "react";
import styles from './proshows.module.css'

const Proshows = () => {
	  return (
		<div className={styles.proshow_container} id="proshow">
			<div className={styles.proshow_background}>
			<img className="artist_image" src="/images/soorajsanthosh.webp" alt="Proshows" border="0" />
			<div className={styles.artist_name}>Sooraj Santhosh</div>
			</div>
		</div>
  	);
}

export default Proshows;