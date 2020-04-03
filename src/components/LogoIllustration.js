// import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react';
import Zdog from 'zdog';
import { Illustration, Cone, Cylinder, Hemisphere  } from 'react-zdog';
import gsap from 'gsap';

import './styles/logo.css';

import { illuTweenDuration } from '../utils/timelines';

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
    
    let prevRotation = usePrevious(rotation);
    let prevIndex = usePrevious(index);
        
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
                prevIndex > index && dummyTween(cone_seq[index+1], cone_seq[index]);
                
                gsap.set('[zoom]', {
                    scale: 4
                });
                break;
            case 1:
                prevIndex > index ? dummyTween(cone_seq[index + 1], cone_seq[index]) : dummyTween(cone_seq[index], cone_seq[index + 1]);

                let theOne = document.querySelectorAll('[zoom]>svg>path:nth-of-type(2)');                
                let circs = document.querySelectorAll('[zoom]>svg>path:not(:nth-of-type(2))');

                gsap.to(circs, {
                    fill: "transparent",
                    stagger: {
                        amount: .4,
                        ease: "power2.in"
                    },
                    onStart: () => { console.log(circs) },
                    onComplete: () => {
                        
                        gsap.to(theOne, {
                            transformOrigin: "50% 50%",
                            scale: 3,
                            ease: "power4.out",
                            duration: illuTweenDuration/4
                        });
                    },
                }).delay(illuTweenDuration);
                break;
            case 2:                         
                // prevIndex > index ? dummyTween(cone_seq[index + 1], cone_seq[index]) : dummyTween(cone_seq[index - 1], cone_seq[index]);

                gsap.set('.container>[zoom]', { display: "none" });
                gsap.from('svg#smartphone', {
                    autoAlpha: 0,
                    duration: 1,
                    x: 150,
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
    }, [index]);

    // RENDER
    switch (index) {
        case 0:
        case 1:
            gsap.to(['#chevron_bottom', '#chevron_top'], {
                duration: 2.25,
                // fill: "hsl(204, 86%, 53%)",
                onStart: () => {
                    gsap.to('.purple', {
                        // backgroundColor: "hsl(204, 86%, 53%)",
                    });
                }
            });
        case 2:
            return <Illustration ref={el => el = illuRef} index={index} zoom={1} rotate={{ z: TAU/4 }} style={{ border: "1px solid red"}}>                
                <Cone diameter={24}
                    // 1
                    length={24}
                    stroke={false}
                    color={'#f38181'}
                    backface={'hsl(48, 100%, 67%)'}                    
                    rotate={{ x: -rotation.x, y: -rotation.y}}  
                />

                <Cone diameter={24}
                    // 2
                    length={24}
                    stroke={false}
                    color={'#f38c84'}
                    backface={'green'}                    
                    rotate={rotation}
                    translate={{ x: -12, y: 24}}  
                />    
                <Cone diameter={24}
                    // 3
                    length={24}
                    stroke={false}
                    color={'#f3a389'}
                    backface={'hsl(48, 100%, 67%)'}                    
                    rotate={{ x: -rotation.x, y: -rotation.y}} 
                    translate={{x: -24}} 
                />                    
              
                <Cone
                    // 4
                        ref={pointeRef}
                        diameter={24}
                        length={24}
                        stroke={false}
                        color = {'#f4ba8e'}
                        backface={'hsl(48, 100%, 67%)'}                        
                    rotate={rotation}
                    translate={{x: -24}}
                />
                    
                <Cone diameter={24}
                    // 5
                    length={24}
                    stroke={false}
                    color={'#f4c590'}
                    backface={'black'}                    
                    rotate={{ x: -rotation.x, y: -rotation.y}} 
                    translate={{x: -12, y: -24}} 
                />

                <Cone
                    // 6
                        id={"pointe"}
                        ref={pointeRef}
                        diameter={24}
                        length={24}
                        stroke={false}
                        color={'#f4d193'}
                        backface={'hsl(48, 100%, 67%)'}                        
                    rotate={rotation}
                />     
                
              <Cone diameter={24}
                    // 7
                    length={24}
                    stroke={false}
                    color={'#f4dc95'}
                    backface={'hsl(48, 100%, 67%)'}                    
                    rotate={{ x: -rotation.x, y: -rotation.y}}
                    translate={{ x: 12, y: -24}}  
                />                

                <Cone diameter={24}
                    // 8
                    length={24}
                    stroke={false}
                    color={'#f4f39a'}
                    backface={'black'}                    
                    rotate={rotation}
                    translate={{ x: 12, y: -24}}  
                />                   
                                          
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
export default LogoIllustration;
