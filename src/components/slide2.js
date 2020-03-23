import React from "react"

const Slide2 = (props) => {
  return (
    <>
		<div className="slide text" onMouseMove={props.onMouseMove}>
		    <p>
                J'utilise <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>React</b></span> et <br />
                des frameworks tels que <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Gatsby JS</b></span> pour créer des sites et des <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>PWA</b></span><br />
                <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>modernes, rapides</b></span> et <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>accessibles</b></span>.
			</p>
        </div>
    </>
  );
}

export default Slide2
