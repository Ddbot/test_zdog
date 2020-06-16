import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import gsap from 'gsap';
import Splitting from "splitting";

const Slide_1 = (props) => {
  const data = useStaticQuery(
    graphql `
      query {        
          fr: wordpressPage(id: {
            eq: "f8980629-597c-5c0c-b7e0-e1675bcb9f97"
          }){
            content
          }

          en: wordpressPage(id: {
            eq: "2f58ac34-d2b2-5e62-a306-cf9f2ebb7cea"
          }) {
            content
          }
        }
    `
  );

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

  let renderData = () => {
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />
};

export default Slide_1;
