// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import { Illustration, Cone, Cylinder, Hemisphere  } from 'react-zdog';
import gsap from 'gsap';

import './styles/logo.css';

import { illuTweenDuration } from '../utils/timelines';

let cone_seq = [{
        x: Math.PI / 2,
        y: -Math.PI / 16
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
            duration: illuTweenDuration,
            paused: true,
            onUpdate: () => {
                setRotation((prev) => {
                    return {
                        x: gsap.utils.interpolate(prevRot.x, newRot.x, tween.progress()),
                        y: gsap.utils.interpolate(prevRot.y, newRot.y, tween.progress())
                    }
                });
            },
            onComplete: () => {
                // let circle = index === 1 ? document.querySelector('[zoom]>svg>path') : 'undefined';
                // gsap.to(circle, {
                //     scale: 10,
                //     duration: illuTweenDuration*0.618
                // });
                // console.log('Circ: ', circle);
            }
        });
        tween.play(0).delay(.7);
    }

    let [index, setIndex] = useState(0);
    let [rotation, setRotation] = useState(cone_seq[index]);
    
    let prevRotation = usePrevious(rotation);
        
    let illuRef = useRef(), pointeRef = useRef(),
        mineRef = useRef(),
        cylindreRef = useRef(),
        ringRef = useRef(),
        gumRef = useRef();
    
    useEffect(() => {
        if (props.index !== index) setIndex((prevIdx) => { return props.index });  
    }, [props.index, index]);
    

    // ANIMATIONS ZDOG !!!
    useEffect(() => {  
        gsap.set(['[zoom]>svg', '[zoom]'], { overflow: "visible" });
        switch (index) {
            case 0:
                console.log('PrevRot: ', prevRotation, 'Current index: ', index, 'Current Seq: ', cone_seq[index]);
                gsap.set('[zoom]', {
                    scale: 10
                });
                break;
            case 1:
                console.log('PrevRot: ', prevRotation, 'Current index: ', index, 'Current Seq: ', cone_seq[index]);
                dummyTween(prevRotation, cone_seq[index]);
                gsap.to('[zoom]>svg>path', {
                    duration: .225,          
                    fill: "hsl(48, 100%, 67%)",
                }).delay(illuTweenDuration + 0.7);
                break;
            case 2:         
                console.log('PrevRot: ', prevRotation, 'Current index: ', index, 'Current Seq: ', cone_seq[index]);
                // dummyTween(prevRotation, cone_seq[index]);
                // gsap.set('[zoom]', { position: "fixed" });
                gsap.to('[zoom]', {
                    onStart: () => {
                        gsap.set('[zoom]', { position: "fixed" });
                    },
                    scale: 3,
                    width: "10%", 
                    height: "10%",
                    x: -400,
                    y: -175
                });

                break;
            case 3:  
                dummyTween(prevRotation, cone_seq[index]);
                gsap.to()
                break;
            case 4:                                
                dummyTween(prevRotation, cone_seq[index]);
                break;
            default:                                
        }       
    }, [index]);

    // RENDER
    switch (index) {
        case 0:
        case 1:
        case 2:
            return <Illustration ref={el => el = illuRef} index={index} zoom={1}>
                    <Cone
                        id={"pointe"}
                        ref={pointeRef}
                        diameter={24}
                        length={24}
                        stroke={false}
                        color = {'#0B8CDE'}
                        backface={'hsl(48, 100%, 67%)'}
                        width={24}
                        rotate={rotation} />
                    <div className="dummy"></div>
                </Illustration>                      
            break;
        case 3:
        case 4:
            return <Illustration index={index} zoom={.33}>
                <Cone
                    id={"pointe"}
                    ref={pointeRef}
                    diameter={24}
                    length={24}
                    stroke={false}
                    color={'yellow'}
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
