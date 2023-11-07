import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import styles from "./proshows.module.css";

const cards = ["/images/soorajsanthosh.png"];

const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
	const [gone] = useState(() => new Set());
	const [props, api] = useSprings(cards.length, (i) => ({
		...to(i),
		from: from(i),
	}));

	const bind = useDrag(
		({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
			const trigger = velocity > 0.2;
			const dir = xDir < 0 ? -1 : 1;
			if (!down && trigger) gone.add(index);
			api.start((i) => {
				if (index !== i) return;
				const isGone = gone.has(index);
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
				const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
				const scale = down ? 1.1 : 1;
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => {
					gone.clear();
					api.start((i) => to(i));
				}, 600);
		}
	);

	return (
		<>
			{props.map(({ x, y, rot, scale }, i) => (
				<animated.div className={styles.deck} key={i} style={{ x, y }}>
					<animated.div
						{...bind(i)}
						style={{
							transform: interpolate([rot, scale], trans),
							backgroundImage: `url(${cards[i]})`,
						}}
					/>
				</animated.div>
			))}
		</>
	);
}

export default function Proshows() {
	return (
		<div id="proshows" className={styles.container}>
			<div className={styles.marquee}>
				<div>
					<span>
						Proshows Proshows Proshows Proshows Proshows Proshows Proshows
						Proshows Proshows Proshows Proshows Proshows
					</span>
					<span>
						Proshows Proshows Proshows Proshows Proshows Proshows Proshows
						Proshows Proshows Proshows Proshows Proshows
					</span>
				</div>
			</div>
			<Deck />
		</div>
	);
}
