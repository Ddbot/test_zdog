// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import { Illustration, Cone, Cylinder, Box  } from 'react-zdog';
import gsap from 'gsap';

import { illuTweenDuration } from '../utils/timelines';

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

// let illuTweenDuration = .5;

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
                    duration: illuTweenDuration*0.618
                });
                // console.log('Circ: ', circle);
            }
        });
        tween.play(0).delay(.7);
    }

    let [index, setIndex] = useState(0);
    let [rotation, setRotation] = useState(cone_seq[index]);
    
    let prevRotation = usePrevious(rotation);
        
    let pointeRef = useRef(),
        mineRef = useRef(),
    cylindreRef = useRef();
    
    useEffect(() => {
        if (props.index !== index) setIndex((prevIdx) => { return props.index });          
    }, [props.index,index]);

    useEffect(() => {        
        if (index !== 2 || !index) {
            gsap.to('[zoom]', {
                duration: 1,
                position: 'relative',     
                autoAlpha: 1,
                scale: 1,
                width: "100%",
                height: "100%",
            });
            dummyTween(prevRotation = { x: 0, y: 0 }, cone_seq[index]);                
        } else if (index === 2) {
            
            gsap.set('[zoom]', {
                position: 'fixed'
            });

            gsap.to('[zoom]', {
                duration: 1,
                scale: 0.5,
                x: -450,
                y: -100,
                // onComplete: () => {
                //     gsap.set('[zoom]', { position: 'fixed', autoAlpha: 0.3 });
                // }
            });
        }
    }, [index]);

    return (
        <Illustration zoom={5}>
            <Cone
                ref={pointeRef}
                diameter={24}
                length={24}
                stroke={false}
                color={'rebeccapurple'}
                backface={'blue'}
                width={24}
                rotate={rotation}>
                <Cone
                    ref={mineRef}
                    diameter={24}
                    length={24}
                    stroke={false}
                    backface={"#C25"}
                    scale={.33}
                    color={'beige'}
                    translate={{ z: 16 }}>
                    <Cylinder
                        ref={cylindreRef}
                        diameter={24}
                        length={100}
                        stroke={ false}
                        color={'rgb(0, 191, 255)'}
                        frontFace={'white'}
                        backface={'black'}
                        scale={3}
                        translate={{ z:-198 }}
                    />
                    </Cone>
            </Cone>

            <div className="dummy"></div>
        </Illustration>
    );
}
export default LogoIllustration
