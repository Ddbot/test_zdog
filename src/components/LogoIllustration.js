// import ReactDOM from 'react-dom'
import React from 'react';

import Me from "./zdog/Me";

const LogoIllustration = React.forwardRef((props, ref) => {
    let { index } = props;

    return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]} />
})

export default LogoIllustration;
