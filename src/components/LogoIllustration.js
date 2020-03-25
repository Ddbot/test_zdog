// import ReactDOM from 'react-dom'
import React, { useState, useEffect, useRef } from 'react';
import { Illustration, Cone } from 'react-zdog';

let illustrationRef = useRef(null);
let coneRef = useRef(null);

const LogoIllustration = (props) => {

    let [x, setX ] = useState(props.rotation.x);
    let [y, setY] = useState(props.rotation.y);

    return (<Illustration ref={ element => {
        illustrationRef = element;
    }} zoom={1}>
        <Cone
            ref={ element => {
                coneRef = element;
            }}
            diameter={240}
            length={240}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={240}
            rotate = { {x:x, y:y} }
        />
  </Illustration>)
}

export default LogoIllustration
