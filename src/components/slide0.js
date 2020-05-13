import React, { useEffect } from "react";
import Splitting from "splitting";
import gsap from 'gsap';

// import './styles/slide.css';

const Slide_0 = (props) => {
  gsap.set('[data-splitting="words"]', {
    transformOrigin: "left center",
    transformPerspective: 200
  });

  useEffect(() => {
    let target = document.querySelector('[data-splitting="lines"]');


    let res = Splitting({
      target: target,
      by: "lines"
    });

    gsap.from(res[0].lines, {
      x: -500,
      scale: 0.7,
      autoAlpha: 0,
      duration: .225,
      stagger: {
        amount: .195,
        from: 0
      },
      // delay: 1.5,
      rotationY: 45,
    });
  });

  return props.lang === "en" ? <p data-splitting="lines">
    I 'm <span className="highlight"><b>Andry</b></span>,<br />
    A <span className="highlight"><b>Web site</b></span> and <span className="highlight"><b>mobile Apps</b></span> Integrator and <span className="highlight"><b>Designer</b></span>
  </p> : <p data-splitting="lines">
      Je suis <span className="highlight"><b>Andry</b></span>,<br />
      Intégrateur et <span className="highlight"><b>Designer</b></span> de <span className="highlight"><b>sites Web</b></span> et d'<span className="highlight"><b>applications mobiles</b></span>
    </p>;
};

export default Slide_0;
