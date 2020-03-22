import React from "react"

const Slide1 = (props) => {
  return (
    <>
		  <div className="slide text" onMouseMove={props.onMouseMove}>
			  <p>
				  Bonjour ! <br />
				  Je suis <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Andry</b></span>,<br />
          Intégrateur et <span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Développeur</b></span> de sites<span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Web</b></span> et d'<span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>applications mobiles</b></span>
			  </p>
      </div>
    </>
  );
}

export default Slide1
