import React from "react"

import "../components/styles/intro.css"

const Intro = () => {
  return (
		<div className="text">
			<p>
				Bonjour ! <br />
				Je suis <span style = {
				  {
				    backgroundColor: "#f4ba8e"
				  }
				}><b>Andry</b></span> ,
        <br /> Intégrateur et <span style={{
          backgroundColor: "#6199b8"
        }}><b>Développeur</b></span> de <span style={{
          backgroundColor: "#f4f39a"
        }}><b>Sites Web</b></span> et d'<span style={{
          backgroundColor: "#9da99c"
        }
        }><b>applications</b></span> mobiles
			</p>
		</div>
  );
}

export default Intro
