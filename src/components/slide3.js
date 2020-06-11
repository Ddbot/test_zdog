import React from "react";

const Slide_4 = (props) => {
  return props.lang === "en" ? <p data-splitting="lines">I'm currently available for work. <span className="highlight"><b>Contact me !</b></span></p> :
    <p data-splitting="lines">Je suis à votre disposition pour plus de renseignements. <span className="highlight"><b>Contactez-moi !</b></span></p>
};

export default Slide_4;
