import React, { useEffect } from "react";

// import './styles/slide.css';

const Slide_0 = (props) => {
  return props.lang === "en" ? <p>Hello ! <br />
				I 'm <span className="purple"><b>Andry</b></span>,<br />
				A <span className="purple"> <b> Web site </b></span> and <span className="purple"> <b> mobile Apps </b></span> Integrator and <span className="purple"> <b>Designer</b></span>
  </p> : <p>
      Bonjour ! <br />
				Je suis <span className="purple"><b>Andry</b></span>,<br />
				Intégrateur et <span className="purple"><b>Designer</b></span> de sites<span className="purple"><b>Web</b></span> et d'<span className="purple"><b>applications mobiles</b></span>
    </p>;
};

export default Slide_0;
