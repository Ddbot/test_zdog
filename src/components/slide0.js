import React, { useEffect } from "react";
import Splitting from "splitting";
import gsap from 'gsap';

// import './styles/slide.css';

const Slide_0 = (props) => {
  gsap.set('[data-splitting="chars"]', {
    transformOrigin: "left center",
    transformPerspective: 200
  });
  useEffect(() => { 
    let target = document.querySelector('[data-splitting="chars"]');
    
    let res = Splitting({
      target: target, 
      by: "lines"
    });

    gsap.from(res[0].lines, {
      x: -100,
      autoAlpha: 0,
      // duration: .225,
      stagger: {
        amount: .225,
        from: 0
      },
      onStart: () => {
        gsap.from('.purple', {
          x: -100,
          duration: .225,
          backgroundColor: "transparent"
        });
      }
      // rotationY: 45,
    });
  });

  return props.lang === "en" ? <p data-splitting="words">Hello ! <br />
				I 'm <span className="purple"><b>Andry</b></span>,<br />
				A <span className="purple"> <b> Web site </b></span> and <span className="purple"> <b> mobile Apps </b></span> Integrator and <span className="purple"> <b>Designer</b></span>
  </p> : <p data-splitting="words">
      Bonjour ! <br />
				Je&nbsp;suis <span className="purple"><b>Andry</b></span>,<br />
				Intégrateur&nbsp;et&nbsp;<span className="purple"><b>Designer</b></span> de&nbsp;sites<span className="purple"><b>Web</b></span> et&nbsp;d'<span className="purple"><b>applications mobiles</b></span>
    </p>;
};

export default Slide_0;
