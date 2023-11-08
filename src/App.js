import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Layout from "./Components/Layout";
import Hero from "./Pages/Hero";
import Proshows from "./Pages/Proshows";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Theme from "./Pages/Theme";

export default function App() {
	return (
		<>
			<Layout>
				<Hero />
				{/* <About /> */}
				<Theme />
				<Events />
				<Proshows />
			</Layout>
		</>
	);
}
