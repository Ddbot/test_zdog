import React, { useEffect } from 'react';

import Me from "./zdog/Me";
import gsap from 'gsap/gsap-core';

const LogoIllustration = React.forwardRef((props, ref) => {
    let { index, translate, rotate, scale } = props;

    useEffect(() => { 
        console.log('Index in LogoIllustration: ', index, ' Trans: ', translate, ' Rot: ', rotate, ' Scale: ',scale);
    });
  
    return <Me index={index} animation={[translate, rotate, scale]} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
})

export default LogoIllustration;
