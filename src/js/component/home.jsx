import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footerbar from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footerbar />
		</div>
	);
};

export default Home;
