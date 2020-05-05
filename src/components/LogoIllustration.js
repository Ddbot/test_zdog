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
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    
    let { index } = props;            
    
    let prevIndex = usePrevious(index);
    

    // Changement d'index ?
    useEffect(() => {
        console.log('Cur:', index, ' Prev:', prevIndex);
    }, [index]);
    
    return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]} />

})

export default LogoIllustration;
