// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import Me from "./zdog/Me";

let start, end;

const LogoIllustration = React.forwardRef((props, ref) => {    
    let { index } = props;            
    
    return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]} />
})

export default LogoIllustration;
