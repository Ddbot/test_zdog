// import ReactDOM from 'react-dom'
import React, { useState, useEffect, useRef } from 'react';
import { Illustration, Cone } from 'react-zdog';

import gsap from 'gsap';

const LogoIllustration = (props) => {

    let [rot, setRot ] = useState(null);
    let [tl] = useState(gsap.timeline({ defaults: { paused: true, duration: 1 }}));

    let coneRef = useRef(null);

    useEffect(() => {
        setRot({ x: props.rotation.x, y: props.rotation.y });
        tl.to(coneRef, { rotate: rot }).play();
    }, [props.rotation.x, props.rotation.y, tl]);

    return(<Illustration zoom={1}>
        <Cone
            ref={ element => { coneRef = element }}
            diameter={240}
            length={240}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={240}
            rotate = { rot }
        />
  </Illustration>)
}

export default LogoIllustration
