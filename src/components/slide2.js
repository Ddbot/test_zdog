import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Slide_2 = (props) => {
  const data = useStaticQuery(
    graphql `
      query {        
          wordpressPage(id: {
            eq: "5f2d282b-69fc-5898-95c0-7bbdc90aead5"
          }){
            content
          }
        }
    `
  );

  let renderData = () => {
    return {
      __html: data.wordpressPage.content
    }
  }

  return props.lang === "en" ? <p data-splitting="lines">I am also a <span className="highlight"><b>writer / translator</b></span>. I create catchy and <span className="highlight"><b>a11y compliant content</b></span> and can even shoulder the <span className="highlight"><b>i18n</b></span> of your sites and applications</p> :
    <p data-splitting="lines">
            <div dangerouslySetInnerHTML={renderData()} />
    </p>
};

export default Slide_2;
