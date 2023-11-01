import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import Proshows from "./Proshows";
import ContactUs from "./ContactUs";

ReactDOM.render(<App />, document.getElementById("hero-container"));

const rootElement = document.getElementById("proshows-container");
ReactDOM.render(
	<React.StrictMode>
		<Proshows />
	</React.StrictMode>,
	rootElement
);

ReactDOM.render(<ContactUs />, document.getElementById("contact-us-container"));
