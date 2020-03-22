import React from "react"

import "../components/styles/intro.css"

const Intro = () => {
  return (
		<div className="text">
			{/* <h2>Bonjour! </h2>
			<h2>
				Je suis <span style={{ fontWeight: 500 }}>Andry</span>
			</h2>
			<h2>
				Intégrateur et{" "}
				<span style={{ fontWeight: 500 }}>développeur</span> de
			</h2>
			<h2>
				<span style={{ fontWeight: 500 }}>Sites Web</span> et d'
				<span style={{ fontWeight: 500 }}>applications mobiles</span>
			</h2> */}
			<p>
				Bonjour ! Je suis <span style={{ fontWeight: 500 }}>Andry</span>, Intégrateur et{" "}
				<span style={{ fontWeight: 500 }}>Développeur</span> Développeur de
				<span style={{ fontWeight: 500 }}>Sites Web</span> et d'<span style={{ fontWeight: 500 }}>applications mobiles</span>
			</p>
		</div>
  );
}

export default Intro
