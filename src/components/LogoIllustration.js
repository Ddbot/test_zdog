// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import { Illustration, Cone, Cylinder, Hemisphere  } from 'react-zdog';
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
                    // scale: 10,
                    // duration: illuTweenDuration*0.618
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
        cylindreRef = useRef(),
        ringRef = useRef(),
        gumRef = useRef();
    
    useEffect(() => {
        if (props.index !== index) setIndex((prevIdx) => { return props.index });  
    }, [props.index,index]);

    useEffect(() => {  
        switch (index) {
            case 0:
                gsap.set('[zoom]', {
                    scale: 10
                });
                break;
            case 1:
                gsap.to('[zoom]>svg', {
                    duration: 1,
                    position: 'relative',
                    autoAlpha: 1,
                    scale: 1,
                    // width: "100%",
                    // height: "100%",
                });

                dummyTween(prevRotation={ x: Math.PI/2, y: -Math.PI/16}, cone_seq[index]);
                break;
            case 2:
                gsap.set('[zoom]', {
                    position: 'fixed'
                });

                gsap.to('[zoom]', {
                    duration: 1,
                    scale: 0.5,
                    x: -450,
                    y: -100,
                });
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                break;
        }        
    }, [index]);

    // RENDER
    switch (index) {
        case 0:
        case 1:
        case 2:
            return <Illustration zoom={1}>
                    <Cone
                        id={"pointe"}
                        ref={pointeRef}
                        diameter={24}
                        length={24}
                        stroke={false}
                        color = {'blue'}
                        backface={'rebeccapurple'}
                        width={24}
                        rotate={rotation} />
                    <div className="dummy"></div>
                </Illustration>                      
            break;
        case 3:
        case 4:
            return <Illustration zoom={1}>
                <Cone
                    id={"pointe"}
                    ref={pointeRef}
                    diameter={24}
                    length={24}
                    stroke={false}
                    color={'rebeccapurple'}
                    backface={'blue'}
                    width={24}
                    rotate={rotation}>
                    <Cone
                        id="mine"
                        ref={mineRef}
                        diameter={24}
                        length={24}
                        stroke={false}
                        backface={"pink"}
                        scale={.33}
                        color={'beige'}
                        translate={{ z: 16 }}>
                        <Cylinder
                            id={"bois"}
                            ref={cylindreRef}
                            diameter={24}
                            length={100}
                            stroke={false}
                            color={'orange'}
                            frontFace={'white'}
                            backface={'black'}
                            scale={3}
                            translate={{ z: -198 }}>
                            <Cylinder
                                id={"ring"}
                                ref={ringRef}
                                diameter={24}
                                length={10}
                                stroke={false}
                                color={'red'}
                                backface={'green'}
                                color={'salmon'}
                                translate={{ z: -55 }}>
                                <Hemisphere
                                    id={"gum"}
                                    ref={gumRef}
                                    diameter={24}
                                    // fill enabled by default
                                    // disable stroke for crisp edge
                                    stroke={false}
                                    color={'yellow'}
                                    backface={'gray'}
                                    rotate={{ x: Math.PI }}
                                    translate={{ z: -6 }} />
                            </Cylinder>
                        </Cylinder>
                    </Cone>
                </Cone>
                <div className="dummy"></div>
            </Illustration>
                break;
        default:
            break;
    };
}
export default LogoIllustration
