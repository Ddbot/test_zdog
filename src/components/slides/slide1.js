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
            title
            content
          }

          en: wordpressPage(id: {
            eq: "2f58ac34-d2b2-5e62-a306-cf9f2ebb7cea"
          }) {
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
      y: -500,
      scale: 0.7,
      autoAlpha: 0,
      stagger: {
        amount: 1,
      },
    });
  });

  let renderData = () => {
    // document.title = data[props.lang].title;
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />
};

export default Slide_1;
