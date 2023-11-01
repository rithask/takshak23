import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import NavigationBar from "./Components/NavigationBar";
import Hero from "./Pages/Hero";

export default function App() {
	return (
		<>
			<NavigationBar />
			<Hero />
		</>
	);
}
