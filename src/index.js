import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import Proshows from "./Pages/Proshows";
import ContactUs from "./Pages/ContactUs";

ReactDOM.render(<App />, document.getElementById("hero-container"));

ReactDOM.render(<Proshows />, document.getElementById("proshows-container"));

ReactDOM.render(<ContactUs />, document.getElementById("contact-us-container"));
