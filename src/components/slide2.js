import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Slide_2 = (props) => {
  const data = useStaticQuery(
    graphql `
      query {        
          fr: wordpressPage(id: {
            eq: "5f2d282b-69fc-5898-95c0-7bbdc90aead5"
          }){
            title
            content
          }

          en: wordpressPage(id: {
            eq: "a40fed8c-9709-5117-92c9-e41dc599778a"
          }){
            title
            content
          }
        }
    `
  );

  let renderData = () => {
    document.title = data[props.lang].title;
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />
};

export default Slide_2;
