import React from "react";

const Slide_3 = (props) => {
  return props.lang === "en" ? <p data-splitting="lines">I am also a <span className="highlight"><b>writer / translator</b></span>. I create catchy and <span className="highlight"><b>a11y compliant content</b></span> and can even shoulder the <span className="highlight"><b>i18n</b></span> of your sites and applications</p> :
    <p data-splitting="lines">Je suis également <span className="highlight"><b>rédacteur et traducteur</b></span>. Je créé du <span className="highlight"><b>contenu SEO accrocheur</b></span> et assure une <span className="highlight"><b>i18n de qualité</b></span></p>
};

export default Slide_3;
