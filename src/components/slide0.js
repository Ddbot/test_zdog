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
    let target = document.querySelector('[data-splitting="words"]');
    
    let res = Splitting({
      target: target, 
      by: "lines"
    });

    let colors = gsap.utils.shuffle(['#f4dc95',
      '#f3af8b',
      '#f38181',
      '#6199b8',
      'blue'
    ]);

    let mots = ['[data-word="Andry"]','[data-word="Intégrateur"]','[data-word="Designer"]',['[data-word="sites"]','[data-word="Web"]'],['[data-word="d\'applications"]','[data-word="mobiles"]']]
    

    gsap.from(res[0].words, {
      x: -500,
      scale: 0.7,
      autoAlpha: 0,
      // duration: .225,
      stagger: {
        amount: .195,
        from: 0
      },
      delay: 1.5,
      // rotationY: 45,
      onComplete: () => {
        mots.forEach((mot, i) => { 
          if (Array.isArray(mot)) {
            mot.forEach( m => document.querySelector(m).style.backgroundColor = gsap.utils.wrap(colors, i));
            console.log('Mot: ', mot);
          };
          if (!Array.isArray(mot)) {
            console.log('Mot not ARRAY: ', mot);
            document.querySelector(mot).style.backgroundColor = gsap.utils.wrap(colors, i)
          };
        });
      }
    });
  });

  return props.lang === "en" ? <p data-splitting="words">Hello ! <br />I 'm Andry,<br />A Web site and mobile Apps Integrator and Designer</p> : <p data-splitting="words">Bonjour ! <br />Je suis Andry,<br />Intégrateur et Designer de sites Web et d'applications mobiles</p>;
};

export default Slide_0;
