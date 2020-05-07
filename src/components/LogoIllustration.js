// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import Me from "./zdog/Me";

let start, end;

const LogoIllustration = React.forwardRef((props, ref) => {
    let [translate, setTranslate] = useState(props.translate);
    let [rotate, setRotate] = useState(props.rotate);
    let [scale, setScale] = useState(props.scale);

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
        // prevIndex === undefined && console.log('First load... No previous index');
        switch (index) {
            case 0:
                prevIndex !== undefined && console.log('You come back from Index no: ', prevIndex);
                setRotate({
                    x: 0, y: 0, z: 2
                });
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;

        }
    }, [index]);
    
    return <Me ref={ref} index={index} animation={[props.translate, props.rotate, props.scale]} />

})

export default LogoIllustration;
