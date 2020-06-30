import React, { useEffect, useRef, useState, createRef } from 'react';
import Zdog from 'zdog';

import styled from 'styled-components';

import Vivus from 'vivus';

import gsap, { splitColor } from 'gsap';

import Chair from './Chair';
import Computer from './Computer';
import { Cou, Torse } from './Andry';
import Pen from './Pen';
import Pot from './Pot';
import Smartphone from './Smartphone';
import Table from './Table';

import LogoGrid from '../LogoGrid';
import Blog_Animation from '../Blog_animation';
import Signature from '../../../Signature';
import Trace from '../../../Trace';

import usePrevious from '../../../../utils/usePrevious';
import { wiggle, wiggleProp } from '../../../../utils/utils.js';


const { TAU } = Zdog;
const seq = [
    [{
        x: 0,
        y: 0,
        z: 10
    }, {
        x: 5.485,
        y: 6.138,
        z: 0
    },
        0.8
    ],
    [{
        x: 0,
        y: 0,
        z: 0
    }, {
        x: TAU,
        y: TAU / 2,
        z: 0
    }, 0.8]
];

let canvas, ctx, canvasWidth, canvasHeight, zoom, isSpinning;

// create a scene Anchor to hold all items
let scene = new Zdog.Anchor();

let liste = [Computer, Cou, Torse, Chair, Table, Pen, Pot, Smartphone];

liste.forEach(element => {
    scene.addChild(element)
});

const Canvas = styled.canvas `    
    overflow: visible;
    min-width: 480px;
    min-height: 480px;
    max-width: 480px;
    max-height: 480px;
`;

const Me = (props) => {
    const { index } = props;
    let zdogRef = useRef(),
        logosRef = useRef(),
        // blogRef = useRef(),
        signatureRef = useRef();
        // traceRef = useRef();
    
    
    // gsap.set(blogRef.current, { position: "absolute" });

    const prevIndex = usePrevious(index);

    let [animation, setAnimation] = useState(props.animation);

    // ----- animate ----- //
    let animate = () => {
        // make changes to model, like rotating scene
        // scene.rotate.y += isSpinning ? 0.003 : 0;
        // scene.rotate.y += 0.003;
        // console.log('From ANIMATE: ', animation);

        scene.updateGraph();
        render();
        requestAnimationFrame(animate);
    }

    let render = () => {
        // clear canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        // center canvas & zoom
        ctx.translate(canvasWidth / 2, 0);
        ctx.scale(zoom, zoom);
        // set lineJoin and lineCap to round
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        // render scene graph
        scene.renderGraphCanvas(ctx);
        ctx.restore();
    }

    // ----- setup ----- //
    // get canvas element and its context
    useEffect(() => {
        canvas = document.querySelector(".zdog-canvas");

        if (!!canvas) {
            ctx = canvas.getContext("2d");
            // get canvas size
            canvasWidth = canvas.width;
            canvasHeight = canvas.height;
            // illustration variables
            zoom = 7;
            isSpinning = false;

            // ----- drag ----- //
            let dragStartRX, dragStartRY;
            let minSize = Math.min(canvasWidth, canvasHeight);

            // add drag-rotation with Dragger
            new Zdog.Dragger({
                startElement: canvas,
                onDragStart: function () {
                    isSpinning = false;
                    dragStartRX = scene.rotate.x;
                    dragStartRY = scene.rotate.y;
                },
                // CLAMP pour limiter le mouvement
                onDragMove: function (pointer, moveX, moveY) {
                    scene.rotate.x = gsap.utils.clamp(5.62, 6.33, dragStartRX - (moveY / minSize) * TAU);
                    scene.rotate.y = gsap.utils.clamp(5.96, 6.64, dragStartRY - (moveX / minSize) * TAU);

                    setAnimation((prevAnimation) => {
                        return [
                            animation[0], {
                                x: dragStartRX - (moveY / minSize) * TAU,
                                y: dragStartRY - (moveX / minSize) * TAU
                            },
                            animation[2]
                        ]
                    });
                }
            });

            scene.rotate = seq[0];

            animate();
        }

    }, [props.rotation]);

    // translate, rotate and scale SCENE
    useEffect(() => {        
        scene.translate = animation[0];
        scene.rotate = animation[1];
        scene.scale = animation[2];
    }, [animation]);

    // Start animation depending on Index
    useEffect(() => {
        switch (index) {
            case 0:
                // Hide other REFS
                gsap.set([logosRef.current, signatureRef.current], {
                    display: "none"
                });                
                break;
            case 1:
                    // ANIM: Cette premiere animation lance toutes les animations jusqu'a la fin de l'index 1
                    let anim = gsap.to(scene, {
                        duration: .67,
                        onUpdate: () => {
                            // Fait une interpolation des coordonnées du state "animation" de Me vers les coords dans seq[1] et anime la rotation
                            let p = anim.progress();
                            scene.rotate = {
                                x: Zdog.lerp(animation[1].x, seq[1][index].x, p),
                                y: Zdog.lerp(animation[1].y, seq[1][index].y, p),
                            }
                        },
                        onComplete: () => {
                            // anim2: intervient une fois la rotATION terminee et commence par effacer le personnage Zdog pour ne plus laisser que l'ordi et la table
                            let anim2 = gsap.to(scene, {
                                duration: 1,
                                onStart: () => {
                                    [Cou, Torse, Chair].forEach(element => scene.removeChild(element));
                                },
                                onUpdate: () => {
                                    // Fait changer la scale de Zdog
                                    scene.scale = Zdog.lerp(animation[2], 4, anim2.progress());
                                    scene.translate.y -= 1.2;
                                },
                                onComplete: () => {
                                    // A la fin de l'animation de la scale on efface la table
                                    scene.removeChild(Table);
                                    scene.removeChild(scene.children[0]);

                                    gsap.set(zdogRef.current, { position: "fixed", transformOrigin: "bottom right" });
                                    
                                    gsap.to(zdogRef.current, {
                                        duration: 0.1, scale: 100, autoAlpha: 0,
                                    });

                                    // 1. on fait disparaitre les logos
                                    gsap.set('.logos', {
                                        autoAlpha: 0,
                                        scale: 0,
                                        });
                                    gsap.set(logosRef.current, {
                                        display: "grid",  
                                        scale: 0.8
                                    });                            
                                    
                                    let allLogos = Array.from(document.getElementsByClassName('logos'));
                                    allLogos.forEach((el,i) => {
                                        // 2. on fait reapparaitre les logos
                                        gsap.to(el, { x: 0, y: 0, scale: 1, autoAlpha: 1 }).delay(0.618+i*0.2);
                                        wiggleProp(el, 'rotation', -2.5, 2.5);
                                        wiggleProp(el, 'x', -3, 3);
                                        wiggleProp(el, 'y', -3, 3);
                                        wiggleProp(el, 'scale', .7, 1);
                                    })
                                }
                            });
                        }
                    });
                break;
            
            case 2:
                gsap.set(logosRef.current, { display: "none" });
                gsap.set([zdogRef.current, signatureRef.current], { display: "flex", scale: 1, width: 480, height: 480, autoAlpha: 1 });
                gsap.set(zdogRef.current, { zIndex: 10 });
                
                // gsap.set(signatureRef.current, { x: "50%" });
                // gsap.set(traceRef.current, { x: "-50%" });

                // gsap.set(document.querySelector("svg:nth-of-type(2)"), {
                //     x: "-50%",
                //     border: '1px solid red'
                // });

// REGLER STROKE DASHOFFSET DE SIGNATUREREF ???


                // create timeline
                let tl = gsap.timeline({
                    paused: true,
                        // onStart: () => {
                        // new Vivus(signatureRef.current, {
                        //     duration: dur * 4,
                        //     type: 'oneByOne'
                        // }, null);
                        // }
                        });

                // create illo
                let illo = new Zdog.Illustration({
                    // set canvas with selector
                    //   element: ".zdog-canvas",
                    element: zdogRef.current,
                    zoom: 0.3,
                    rotate: {
                        y: Math.PI / 2
                    },
                    translate: {
                        x: -250
                    },
                    scale: 2.5
                });
                
                let pointe = new Zdog.Cone({
                    addTo: illo,
                    diameter: 72,
                    length: 72,
                    stroke: false,
                    color: "beige",
                    backface: "#C25",
                    // rotate: {
                    //   x: Math.PI / 2,
                    //   y: -Math.PI / 16,
                    // },
                    translate: {
                        // y: 40
                    }
                });
                let mine = pointe.copy({
                    scale: 0.33,
                    color: "black",
                    translate: {
                        z: 64
                    }
                });
                let cylinder = new Zdog.Cylinder({
                    addTo: illo,
                    diameter: 70,
                    length: 450,
                    stroke: false,
                    color: "#C25",
                    backface: "#E62",
                    translate: {
                        z: -225
                    }
                });
                let gumRing = cylinder.copy({
                    addTo: cylinder,
                    color: "orange",
                    length: 45
                });

                let gum = new Zdog.Hemisphere({
                    addTo: gumRing,
                    diameter: 70,
                    // fill enabled by default
                    // disable stroke for crisp edge
                    stroke: false,
                    color: "white",
                    backface: "orange",
                    rotate: {
                        x: Math.PI
                    },
                    translate: {
                        z: -25
                    }
                });

                const animateIllo = () => {
                    // rotate illo each frame
                    // illo.rotate.y += 0.01;
                    illo.updateRenderGraph();
                    // animate next frame
                    requestAnimationFrame(animateIllo);
                }
                // start animation
                animateIllo();


                illo.zoom = 0.1;
                illo.rotate.y = Math.PI / 1.5;
                let dur = 0.805;

                signatureRef.current.style.height = getComputedStyle(zdogRef.current).height;
                                               
                // Animate PEN along BLOG letters path

                let pathes = Array.from(document.querySelectorAll('#blog > path'));

                let eases = ["power1.out", "power2.out", "power3.out", "power4.inOut"];
                let durs = [1.084,.659,.526,.929];

                pathes.forEach((path, index) => {
                    tl.add(gsap.to(zdogRef.current, {
                        duration: durs[index],
                        // x: "100",
                        ease: "power1.out",
                        // repeat: -1,
                        motionPath: {
                            path: path,
                            align: path,
                            autoRotate: false,
                            alignOrigin: [0.41, 0.5]
                        },
                    }));
                    // .delay(index * dur);
                    tl.play();
    });
    
    break;
            case 3: 
                gsap.set([logosRef.current, signatureRef.current], { display: "none" });
            default:
                // LAST SLIDE

                break;
        }
    }, [index]);

    return <>
        <Canvas ref={zdogRef} className="zdog-canvas" width={480} height={480}></Canvas>
        <LogoGrid ref={logosRef} prevIndex={prevIndex} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
        {/* <Blog_Animation ref={blogRef} /> */}
        {index === 2 && <Signature ref={signatureRef} />}
        {/* {index === 2 && <Trace ref={traceRef} />} */}
        
        <span id="content"></span>
            </>;
}

export default Me;
