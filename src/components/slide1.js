import React, { useEffect } from "react";
import Splitting from "splitting";
import gsap from 'gsap';


// import './styles/slide.css';

const Slide_1 = (props) => {
  gsap.set('[data-splitting="words"]', {
    transformOrigin: "left center",
    transformPerspective: 200
  });

    gsap.from('[data-splitting="words"]', {
      x: -1000,
      autoAlpha: 0,
      // duration: .225,
      stagger: {
        amount: .5,
        from: 0
      },
      //   onStart: () => {
      //     gsap.from('.purple', {
      //     //   x: -100,
      //       duration: .225,
      //       backgroundColor: "transparent"
      //     });
      // },
      delay: 1.5
      // rotationY: 45,
    });
  useEffect(() => { 
    let target = document.querySelector('[data-splitting]');
    
    let res = Splitting({
      target: target, 
      by: "words"
    });
  });	
  return props.lang === "en" ? <p data-splitting="words">
				I'm using <span className="purple">React</span> and <br />
				frameworks such as <span className="purple">Gatsby JS</span> to create 
				<span className="purple">fast, modern</span> and <span className="purple">accessible</span>                
				Web sites and <span className="purple">PWA</span><br />
			</p> : <p data-splitting="words">
				J'utilise <span className="purple">React</span> et <br />
				des frameworks comme <span className="purple">Gatsby&nbsp;JS</span> pour créer des sites et des <span className="purple">PWA&nbsp;modernes</span>, rapides et <span className="purple">accessibles</span>.
			</p>;
};

export default Slide_1;
