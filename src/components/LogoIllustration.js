// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";

import Smartphone from './smartphone';
import Zdog from 'zdog';
import gsap from 'gsap';

import { illuTweenDuration } from '../utils/timelines';
import Me from "./zdog/Me";

let { TAU } = Zdog;

const LogoIllustration = React.forwardRef((props, ref) => {
    
    let {  index } = props;



            
    if (index === 0) {
        return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]}/>
    }
    if (index===1) { return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]}/> }
    // if (index===2) { return <Smartphone ref={ref} index={index}/> }
    if (index===2) { return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]}/> }

    if (index === 3) { return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]}/> }
    if (index===4) { return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]}/> }
})

export default LogoIllustration;
