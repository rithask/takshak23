import React from "react";
import styles from "./Footer.module.css";

function Logo() {
	return (
		<div className={styles.logo}>
			<img src="/logo.webp" alt="Takshak Logo" />
		</div>
	);
}

function Address() {
	return (
		<address>
			Mar Athanasius College of Engineering <br />
			Kothamangalam <br />
			Kerala <br />
			India <br />
			686666 <br />
			<a href="mailto:support@takshak.in">support@takshak.in</a>
		</address>
	);
}

function Socials() {
	return (
		<div className={styles.socials}>
			<div className={styles.socialsHeading}>Follow us</div>
			<ul>
				<li>
					<a href="https://www.instagram.com/takshak.23/">Instagram</a>
				</li>
				<li>
					<a href="https://www.youtube.com/@TAKSHAKOFFICIAL">Youtube</a>
				</li>
				<li>
					<a href="https://www.facebook.com/TakshakOfficial">Facebook</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/takshak-21//">LinkedIn</a>
				</li>
				<li>
					<a href="https://twitter.com/OfficialTakshak">Twitter</a>
				</li>
			</ul>
		</div>
	);
}

function QuickLinks() {
	return (
		<div className={styles.quicklinks}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#proshows">Proshows</a>
				</li>
				<li>
					<a href="#events">Events</a>
				</li>
				<li>
					<a href="#sponsors">Sponsors</a>
				</li>
				<li>
					<a href="#team">Team</a>
				</li>
			</ul>
		</div>
	);
}

export default function Footer() {
	return (
		<footer>
			<div className={styles.footer_container}>
				<div className={styles.footer_left}>
					<Logo />
					<Address />
				</div>
				<div className={styles.footer_right}>
					<Socials />
					<QuickLinks />
				</div>
			</div>
		</footer>
	);
}
