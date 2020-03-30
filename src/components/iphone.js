import React, { useEffect, useRef } from "react";

import { Illustration, Rect } from 'react-zdog';

import gsap from 'gsap';

import iphone from "../images/iphone.png"

import './styles/iphone.css'


const IPhone = () => {
    let smartphoneRef = useRef();
    useEffect(() => {
        gsap.from(smartphoneRef.current, {
            scale: .8,
            x: 100,
            autoAlpha: 0.5,
            duration: .4
        });
    })
    return (<img ref={smartphoneRef} src={iphone} alt={'the frame of an iphone'} />)
}
    

export default IPhone
