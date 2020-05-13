import React, { useEffect } from "react";
import gsap from 'gsap';
import Splitting from "splitting";

const Slide_1 = (props) => {
  gsap.set('[data-splitting="words"]', {
    transformOrigin: "left center",
    transformPerspective: 200
  });

  gsap.from('[data-splitting="lines"]', {
    x: -1000,
    autoAlpha: 0,
    stagger: {
      amount: .5,
      from: 0
    },
    delay: 1.5
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
    I'm using <span className="highlight"><b>React</b></span> and
				frameworks such as <span className="highlight"><b>Gatsby JS</b></span> to create
				<span className="highlight"><b>fast, modern</b></span> and <span className="highlight">accessible</span>
				Web sites and <span className="highlight"><b>PWA</b></span>
  </p> : <p data-splitting="lines">
      J'utilise <span className="highlight"><b>React</b></span> et des frameworks comme <span className="highlight"><b>Gatsby</b></span>&nbsp;pour créer des sites et des <span className="highlight"><b>PWA modernes</b></span>, rapides et <span className="highlight"><b>accessibles</b></span>.
			</p>;
};

export default Slide_1;
