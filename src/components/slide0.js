import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Splitting from "splitting";
import gsap from 'gsap';

// import './styles/slide.css';

const Slide_0 = (props) => {

  const data = useStaticQuery(
    graphql`
      query {        
          wordpressPage(id: {
            eq: "95543ea1-bf21-5e54-a003-a75c0499c6f5"
          }){
            content
          }
        }
    `
  );

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

    console.log('Data = ', data.wordpressPage.content);
  });

  let renderData = () => {
    return {
      __html: data.wordpressPage.content
    }
  }

  return props.lang === "en" ? <p data-splitting="lines">
    I 'm <span className="highlight"><b>Andry</b></span>,<br />
    A <span className="highlight"><b>Web site</b></span> and <span className="highlight"><b>mobile Apps</b></span> Integrator and <span className="highlight"><b>Designer</b></span>
  </p> : <p data-splitting="lines">
      <div dangerouslySetInnerHTML={renderData()} />
    </p>;
};

export default Slide_0;