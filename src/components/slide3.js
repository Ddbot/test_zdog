import React from "react";
import {
  useStaticQuery,
  graphql
} from "gatsby";


const Slide_3 = (props) => {
  const data = useStaticQuery(
    graphql `
      query {        
          fr: wordpressPage(id: {
            eq: "95990e43-39a2-5cc5-9898-23ee9bca21b1"
          }){
            content
          }
          en: wordpressPage(id: {
            eq: "71f4de97-7a6c-5370-9b34-dc6a34e8d04f"
          }) {
            content
          }
        }
    `
  );

  let renderData = () => {
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />
};

export default Slide_3;
