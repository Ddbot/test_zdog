import React, { useEffect } from "react";
import gsap from "gsap";

// import './styles/slide.css';

const Slide_2 = (props) => {
    gsap.set('.highlight', { transformOrigin: "center center" });
    useEffect(() => {
        gsap.from('p', {
            autoAlpha: .5,
            scale: .7
        })
    });
    return props.lang === "en" ? <p data-splitting="lines" style={{ marginLeft: '10%' }}>
        I'm also using <span className="highlight"><b>React Native</b></span> and <br />
        <span className="highlight"><b>Ruby on Rails</b></span>. I am a music and technology fan, who <span className="highlight"><b>always strives to learn more</b></span>
    </p> : <p data-splitting="lines" style={{ marginLeft: '10%' }}>
            J'utilise également <span className="highlight"><b>React Native</b></span>&nbsp;et <span className="highlight"><b>Ruby on Rails</b></span>. En véritable <span className="highlight"><b>passionné</b></span>, j'
                assure une <span className="highlight"><b>veille technologique</b></span> permanente.
            </p>;
};

export default Slide_2;
