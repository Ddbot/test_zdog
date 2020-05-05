import React, { useEffect } from "react";

// import './styles/slide.css';

const Slide_1 = (props) => {
  return props.lang === "en" ? <p>
				I'm using <span className="purple"><b>React</b></span> and <br />
				frameworks such as <span className="purple"><b>Gatsby JS</b></span> to create 
				<span className="purple"><b>fast, modern</b></span> and <span className="purple"><b>accessible</b></span>                
				Web sites and <span className="purple"><b>PWA</b></span><br />
			</p> : <p>
				J'utilise <span className="purple"><b>React</b></span> et <br />
				des frameworks tels que <span className="purple"><b>Gatsby&nbsp;JS</b></span> pour créer des sites et des <span className="purple"><b>PWA&nbsp;modernes</b></span>, rapides et <span className="purple"><b>accessibles</b></span>.
			</p>;
};

export default Slide_1;
