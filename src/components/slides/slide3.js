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
            title
            content
          }
          en: wordpressPage(id: {
            eq: "3aa777a4-1913-5146-80f8-c08a094fbb86"
          }) {
            title
            content
          }
        }
    `
  );
  

  let renderData = () => {
    document.title = data[props.lang].title + ' | Andry Online'
    return {
      __html: data[props.lang].content
    }
  }

  return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />
};

export default Slide_3;
