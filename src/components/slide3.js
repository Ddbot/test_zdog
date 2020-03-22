import React from "react"

import IPhone from './iphone'

const Slide3 = (props) => {
  return (
    <>
      <div className="slide text" onMouseMove={props.onMouseMove}>
        <p>
          Je m'intéresse à <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>React Native</b></span> et <br />
          <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Flutter</b></span>,
          et en véritable passionné de technologie, <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>je ne cesse d'apprendre</b></span>
			  </p>
      </div>
      <IPhone />
    </>
  );
}

export default Slide3
