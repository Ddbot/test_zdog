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

import usePrevious from '../../../../utils/usePrevious';

const { TAU } = Zdog;

let canvas, ctx, canvasWidth, canvasHeight, zoom, isSpinning;

// create a scene Anchor to hold all items
let scene = new Zdog.Anchor();

let liste = [Computer, Cou, Torse, Chair, Table, Pen, Pot, Smartphone];

liste.forEach(element => {
    scene.addChild(element)
});

const seq = [
    [{
        x: 0, y: 0, z: 10
    }, {
        x: 5.485, y: 6.138, z: 0
    },
        0.8],
    [{
        x: 0, y: 0, z: 0
    }, {
        x: TAU, y: TAU / 2, z: 0
    }, 0.8]
];

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
        blogRef = useRef();
    
    
    gsap.set(blogRef.current, { position: "absolute" });

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
                // scene.rotate.x = dragStartRX - (moveY / minSize) * TAU;
                // scene.rotate.y = dragStartRY - (moveX / minSize) * TAU;

                // console.log('onDragMove: { x: ', scene.rotate.x, '; y: ', scene.rotate.y, ' }');
            }
        });

        scene.rotate = seq[0];

        animate();

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
                gsap.set([logosRef.current, blogRef.current], {
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
                        onStart: () => { },
                        onComplete: () => {
                            // anim2: intervient une fois la rotATION  terminee et commence par effacer le personnage Zdog pour ne plus laisser que l'ordi et la table
                            let anim2 = gsap.to(scene, {
                                duration: 1,
                                onStart: () => {
                                    [Cou, Torse, Chair].forEach(z => scene.removeChild(z));
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
                                        onStart: () => {
                                            console.log('Le canvas à lécran est ', zdogRef.current, scene);
                                    }
                                    });
                                    
                                    gsap.set('.logos', {
                                        autoAlpha: 0,
                                        scale: 0,
                                        });
                                    gsap.set("#logoGrid", {
                                        display: "grid",  
                                        // scale: 0.8
                                    });    

                                    const logosParams = [{
                                        transformOrigin: "bottom right",
                                        x: 100,
                                        y: 100
                                    }, {
                                        transformOrigin: "bottom center",
                                        x: 0,
                                        y:100
                                    }, {
                                        transformOrigin: "bottom left",
                                        x: -100,
                                            y: 100,
                                            backgroundColor: "#F8E017",
                                            borderRadius: "100%",
                                            border: "1px solid lightgray"
                                    }, {
                                        transformOrigin: "center right",
                                        x: 50,
                                            y: 0,
                                        width: "2rem"
                                    }, {
                                        transformOrigin: "top left",
                                        x: -50,
                                            y: 10,
                                    }, {
                                        transformOrigin: "center",
                                        x: 0,
                                        y:0
                                    }, {
                                        transformOrigin: "top right",
                                        x: 100,
                                        y:-100
                                    }, {
                                        transformOrigin: "center",
                                        x: 0,
                                        y:0
                                    }, {
                                        x: -200,
                                        y: -200
                                    }
                                    ];
                                    
                                    let allLogos = Array.from(document.getElementsByClassName('logos'));
                                    allLogos.forEach((logo,i) => {
                                        gsap.set(logo, logosParams[i]);
                                    });

                                    //  Faire de logosParams un objet avec tous les reglages pour chaq logo (ex: initial x & y position);
                                    
                                    gsap.to(allLogos, {
										x: 0,
										y: 0,
										stagger: {
											amount: 0.47
										},
										scale: 1,
										autoAlpha: 1,
										ease: "power4.out",
										onComplete: () => {
											gsap.to(allLogos, {
												duration: 10,
												scale: "-=0.25",
												ease: "elastic.in(1,0.75)",
												repeat: 2,
												yoyo: true
											});
										},								
									}).delay(0.8);
                                }
                            });
                        }
                    });
                break;
            
            case 2:
                //  We just keep the PEN and delete all other children from the CANVAS scene
                [Chair, Table, Smartphone, Torse, Pot, Cou, Computer].forEach(
                    (child) => scene.removeChild(child)                    
                );
                
                gsap.set(logosRef.current, { display: "none" });
                gsap.set([zdogRef.current, blogRef.current], {
                    position: "relative",
                    scale: 1,
                    display: "flex",
                    autoAlpha: 1,
                    x: "7.5%",
                });
                // gsap.set(zdogRef.current, { x: "7.5%" });
                gsap.set(blogRef.current, {
                    x: -320,
                    position: "absolute",
                });

                console.log('This is ZDOG: ', zdogRef.current, scene);

                // on lance l'animation de Blog
                new Vivus(blogRef.current, {
                    duration: 161,
                    type: 'oneByOne'
                }, null);

                // We placed both Illus ON TOP OF EACH OTHER THX TO GSAP
                gsap.set(zdogRef.current, { display: "flex", zIndex: "10" });                
                
                // Let's look at all th children of the Canvas scne
                let children = scene.children;
                children.forEach(child => { 
                    scene.removeChild(child);
                });

                scene.addChild(Pen);

                break;  
            
            case 3: 
                gsap.set([logosRef.current, blogRef.current], { display: "none" });
            default:
                // LAST SLIDE

                break;
        }
    }, [index]);

    return <>
        <Canvas ref={zdogRef} className="zdog-canvas" width={480} height={480}></Canvas>
        <LogoGrid ref={logosRef} prevIndex={prevIndex} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
        <Blog_Animation ref={blogRef} />
        <span id="content"></span>
            </>;
}

export default Me;
