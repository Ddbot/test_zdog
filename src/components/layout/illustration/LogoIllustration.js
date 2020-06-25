import React, { useEffect } from 'react';

import Me from "./zdog/Me";
import gsap from 'gsap/gsap-core';

const LogoIllustration = React.forwardRef((props, ref) => {
    let { index, translate, rotate, scale } = props;

    useEffect(() => { 
        console.log('Index in LogoIllustration: ', index, ' Trans: ', translate, ' Rot: ', rotate, ' Scale: ',scale);
    });

    // let mouseEnter = (e) => {
    //     let { currentTarget } = e;
    //     currentTarget.classList.add('active');
    //     console.log(currentTarget.classList, currentTarget.dataset.presentation);
    // }

    // let mouseExit = (e) => {
    //     // e.eventPersist();
    //     let { currentTarget } = e;
    //     e.preventDefault();
    //     // currentTarget.classList.remove('active');
    //     // console.log(currentTarget.classList, currentTarget.dataset.presentation, e);
    //     console.log('LEFT the element');
    // }    
    return <Me index={index} animation={[translate, rotate, scale]} />

})

export default LogoIllustration;
