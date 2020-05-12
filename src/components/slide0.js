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

    gsap.set('.word', { display: "inline-block" });

    let res = Splitting({
      target: target,
      by: "lines"
    });

    let colors = gsap.utils.shuffle(['#f4dc95',
      '#f3af8b',
      '#f38181',
      '#6199b8',
    ]);

    // let mots = ['[data-word="Andry"]', '[data-word="Intégrateur"]', '[data-word="Designer"]', ['[data-word="sites"]', '[data-word="Web"]'], ['[data-word="d\'applications"]', '[data-word="mobiles"]']]


    gsap.from(res[0].lines, {
      x: -500,
      scale: 0.7,
      autoAlpha: 0,
      duration: .225,
      stagger: {
        amount: .195,
        from: 0
      },
      delay: 1.5,
      rotationY: 45,
      onComplete: () => {
        document.querySelectorAll('.highlight').forEach((word, i) => {
          word.style.backgroundColor = colors[i];
          word.style.display = "inline-block";
        });
      }
    });
  });

  return props.lang === "en" ? <p data-splitting="lines">
    I 'm <span className="highlight">Andry</span>Andry,<br />
    A <span className="highlight">Web site</span> and <span className="highlight">mobile Apps></span> Integrator and <span className="highlight">Designer</span>
  </p> : <p data-splitting="lines">
      Je suis <span className="highlight">Andry</span>,<br />
      Intégrateur et <span className="highlight">Designer</span> de <span className="highlight">sites Web</span> et d'<span className="highlight">applications mobiles</span>
    </p>;
};

export default Slide_0;
