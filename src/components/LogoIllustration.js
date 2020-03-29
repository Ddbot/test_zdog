// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import Zdog from 'zdog';
import { Illustration, Cone, Cylinder, Box  } from 'react-zdog';
import gsap from 'gsap';

let cone_seq = [{
        x: Math.PI / 2,
        y: -Math.PI / 16
    }, {
        x: 3,
        y: -Math.PI / 16
    },
    // celui-ci napparaitra meme pas
    {
        x: 0,
        y: -Math.PI / 16
    },
    // celui ci non plus, il sagira dun svg en SIGNATURE
    {
        x: 0,
        y: -Math.PI / 4
    },
    // celui ci non plus, il sagira dun svg en ENVELOPPE
    {
        x: 0,
        y: -Math.PI / 2
    }
];

let illuTweenDuration = 1;

const LogoIllustration = (props) => {
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    // Animation de slide 0 à slide 1
    let dummyTween = (prevRot, newRot) => {
        let tween = gsap.to(".dummy", {
            autoAlpha: 0,
            duration: illuTweenDuration,
            paused: true,
            onUpdate: () => {
                setRotation((prev) => {
                    return {
                        x: gsap.utils.interpolate(prev.x, newRot.x, tween.progress()),
                        y: gsap.utils.interpolate(prev.y, newRot.y, tween.progress())
                    }
                });
            },
            onComplete: () => {
                let circle = index === 1 ? document.querySelector('[zoom]>svg>path') : 'undefined';
                gsap.to(circle, {
                    scale: 1,
                    duration: 1
                });
                // console.log('Circ: ', circle);
            }
        });
        tween.play(0);
    }

    let [index, setIndex] = useState(0);
    let [rotation, setRotation] = useState(cone_seq[index]);
    
    let prevRotation = usePrevious(rotation);
        
    let coneRef = useRef();     

    useEffect(() => {
        if (props.index !== index) setIndex((prevIdx) => { return props.index });          
    }, [props.index,index]);

    useEffect(() => {        
        if (index !== 2 || !index){
            dummyTween(prevRotation = { x: 0, y: 0 }, cone_seq[index]);                
        }
    }, [index]);

    return (
        <Illustration zoom={10}>
            <Cone
                ref={coneRef}
                diameter={24}
                length={24}
                stroke={false}
                color={'rebeccapurple'}
                backface={'#C0C44D'}
                width={24}
                rotate={rotation}
                // translate={{ y: 6 }}                
            />
            <div className="dummy"></div>
        </Illustration>
    );
}
export default LogoIllustration
