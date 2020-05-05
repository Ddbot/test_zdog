import React, { useEffect } from "react";

// import './styles/slide.css';

const Slide_2 = (props) => {
  return props.lang === "en" ? <p style={{marginLeft:'10%'}}>
                I'm also using <span className="purple"><b>React Native</b></span> and <br />
                <span className="purple"><b>Ruby on Rails</b></span>. I am a music and technology fan, who <span className="purple"><b>always strives to learn more</b></span>
            </p> : <p style={{marginLeft:'10%'}}>
                J'utilise également <span className="purple"><b>React Native</b></span> et <span className="purple"><b>Ruby on Rails</b></span>. En véritable <span className="purple"><b>passionné</b></span>, j'
                assure une <span className="purple"><b>veille technologique</b></span> permanente.
            </p>;
};

export default Slide_2;
