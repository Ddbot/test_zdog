import React from 'react';

import Me from "./zdog/Me";

const LogoIllustration = React.forwardRef((props, ref) => {
    let { index } = props;

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
    return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]} />

})

export default LogoIllustration;
