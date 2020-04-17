// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";

import Smartphone from './smartphone';
import Zdog from 'zdog';
import gsap from 'gsap';

import { illuTweenDuration } from '../utils/timelines';
import Triangles from './triangles';
import Me from "./zdog/me";

let { TAU } = Zdog;

// TAU = PI*2

let cone_seq = [{
    //     x: TAU/4,
    // y: -Math.PI / 4,
x: TAU/4, y: 0    
    }, {
        x: 3,
        y: -Math.PI / 16
    },
    {
        x: 0,
        y: -Math.PI / 16
    },
    {
        x: 2,
        y: 2*Math.PI / 16,
    },
    {
        x: 0,
        y: -Math.PI / 2
    }
];

const LogoIllustration = (props) => {
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    let dummyTween = (prevRot, newRot) => {
        let tween = gsap.to(".dummy", {
            autoAlpha: 0,
            duration: illuTweenDuration*4,
            paused: true,
            onUpdate: () => {
                setRotation((prev = {x: 0, y: 0}) => {
                    return {
                        x: gsap.utils.interpolate(prev.x, newRot.x, tween.progress()),
                        y: gsap.utils.interpolate(prev.y, newRot.y, tween.progress())
                    }
                });
            },
        });
        tween.play(0).delay(.7);
    }

    let [index, setIndex] = useState(0);
    let [rotation, setRotation] = useState(cone_seq[index]);
    let [rot, setRot] = useState({ x: 0, y: 0, z: 0});
    
    let prevRotation = usePrevious(props.rot);
    let prevIndex = usePrevious(index);
        

    //  Index
    useEffect(() => {
        if (props.index !== index) setIndex((prevIdx) => { return props.index });  
    }, [props.index, index]);
    

    useEffect(() => {  
        gsap.set(['[zoom]>svg', '[zoom]'], { overflow: "visible" });
        gsap.set('[zoom]', {
        });
        
        switch (index) {
            case 0:                                
                prevIndex > index && dummyTween(cone_seq[index + 1], cone_seq[index]);       
                break;
            case 1:
                if (prevIndex > index) {
                    dummyTween(cone_seq[index + 1], cone_seq[index]); 
                } else {
                    dummyTween(cone_seq[index], cone_seq[index + 1])
                }

                let circs = document.querySelectorAll('[zoom]>svg>path:not(:nth-of-type(2))');
    
                gsap.to(circs, {
                    fill: "transparent",
                    stagger: {
                        amount: .4,
                        ease: "power2.in"
                    },
                }).delay(illuTweenDuration/2);
                break;
            case 2:                         
                // prevIndex > index ? dummyTween(cone_seq[index + 1], cone_seq[index]) : dummyTween(cone_seq[index - 1], cone_seq[index]);

                gsap.set('.container>[zoom]', { display: "none" });
                gsap.fromTo('svg#smartphone', {
                    autoAlpha: 0,
                    duration: 1,
                    scale: 0,
                    x: -150,
                }, {
                    autoAlpha:1,
                    scale: .4
                });

                // gsap.to('[zoom]>svg>path:first-of-type', {
                //     fill: "transparent",
                //     duration: .195,
                //     onStart: () => {
                //         gsap.set('[zoom]', { position: "fixed" });
                //     },
                //     scale: 3,
                //     width: "10%", 
                //     height: "10%",                    
                // });
                break;
            case 3:  
                prevIndex > index ? dummyTween(cone_seq[index+1], cone_seq[index]) : dummyTween(cone_seq[index-1], cone_seq[index]);                
                break;
            case 4:                                
                
                dummyTween(cone_seq[index-1], cone_seq[index]);
                break;
            default:                                
        }       
    }, [prevIndex, index]);
    
    // Rotation de Me
    useEffect(() => {
        if (props.rot !== rot) setRot((prevRot) => {
            return props.rot
        });

    }, [props.rot, rot]);

    const handleClick = (e) => {
        e.persist();
        console.log('ID : ', e.target.id, ' Parent node: ', e.target.parentNode);
    }

    if (index === 0) {
        return <Me index={index} rotation={rot} handleClick={handleClick}/>        
        // <Triangles index={index} rotation={rotation} />
    }
    if (index===1) { return <Triangles index={index} rotation={rotation}/> }
    if (index===2) { return <Smartphone index={index} rotation={rotation}/> }
    if (index===3) { return <Triangles index={index} rotation={rotation}/> }
    if (index===4) { return <Triangles index={index} rotation={rotation}/> }
}
export default LogoIllustration;
