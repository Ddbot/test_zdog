import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Splitting from "splitting";
import gsap from 'gsap';

// import './styles/slide.css';

const Slide_0 = (props) => {

  const data = useStaticQuery(
    graphql`
      query {
        en: wordpressPage(id: {eq: "0fb96152-7c50-5292-9a04-95c88709ee36"}){
          title
          content
        }
        fr: wordpressPage(id: {eq: "95543ea1-bf21-5e54-a003-a75c0499c6f5"}){
          title
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

    console.log('Data = ', data[props.lang], props.lang);
  });

  let renderData = () => {
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
};

export default Slide_0;