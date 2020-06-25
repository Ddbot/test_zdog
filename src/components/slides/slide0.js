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
      stagger: {
        amount: 1.95,
      },
    });
  },[]);

  let renderData = () => {
    // document.title = data[props.lang].title;
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
};

export default Slide_0;