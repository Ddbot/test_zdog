// import ReactDOM from 'react-dom'
import React from 'react';

import Me from "./zdog/Me";
import LogoAWS from "../images/LogoAWS";
import LogoCSS from "../images/LogoCSS";
import LogoFirebase from "../images/LogoFirebase";
import LogoGatsby from "../images/LogoGatsby";
import LogoHTML from "../images/LogoHTML";
import LogoJS from "../images/LogoJS";
import LogoReact from "../images/LogoReact";
import LogoRoR from "../images/LogoRoR";

const LogoIllustration = React.forwardRef((props, ref) => {
    let { index } = props;

    let mouseEnter = (e) => {
        let { currentTarget } = e;
        currentTarget.classList.add('active');
        console.log(currentTarget.classList, currentTarget.dataset.presentation);
    }

    let mouseExit = (e) => {
        // e.eventPersist();
        let { currentTarget } = e;
        e.preventDefault();
        // currentTarget.classList.remove('active');
        // console.log(currentTarget.classList, currentTarget.dataset.presentation, e);
        console.log('LEFT the element');
    }    
            return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]} />

})

export default LogoIllustration;
