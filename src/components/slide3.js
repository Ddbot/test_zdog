import React from "react";
import {
  useStaticQuery,
  graphql
} from "gatsby";


const Slide_3 = (props) => {
  const data = useStaticQuery(
    graphql `
      query {        
          wordpressPage(id: {
            eq: "95990e43-39a2-5cc5-9898-23ee9bca21b1"
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

  return props.lang === "en" ? <p data-splitting="lines">I'm currently available for work. <span className="highlight"><b>Contact me !</b></span></p> :
    <p data-splitting="lines">
      <div dangerouslySetInnerHTML={renderData()} />
    </p>
};

export default Slide_3;
