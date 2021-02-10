import React from "react";

import { Jumbotron } from "./jumbotron.js";
import { Navbar } from "./navbar.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
