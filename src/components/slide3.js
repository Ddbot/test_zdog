import React, { useEffect } from "react";

const Slide_3 = (props) => {
  return props.lang === "en" ? <p>I am also a <span className="purple"><b>writer / translator</b></span>. I create catchy and <span className="purple"><b>a11y compliant content</b></span> and can even shoulder the <span className="purple"><b>i18n</b></span> of your sites and applications</p> :
  <p>Je suis également <span className="purple"><b>rédacteur et traducteur</b></span>. Je créé du <span className="purple"><b>contenu SEO accrocheur</b></span> et assure une <span className="purple"><b>i18n de qualité</b></span></p>                  
};

export default Slide_3;
