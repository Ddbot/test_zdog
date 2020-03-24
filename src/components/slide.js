import React from "react";

import './styles/slide.css';

const Slide = (props) => {
  
  // let printMarkup = () => {
  //   return {
  //     __html: props.content
  //   };
  // };

  return (<div className="slide text" dangerouslySetInnerHTML={{__html: props.content}} role={'document'}/>);
  
};

export default Slide;
