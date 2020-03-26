import React from "react";

import './styles/slide.css';

const Slide = (props) => {
  return (<div className="slide text" dangerouslySetInnerHTML={{ __html: props.content }} role={'document'} />); 
};

export default Slide;
