import React, { useEffect, useRef, useState, createRef } from 'react';
import Zdog from 'zdog';

import Canvas from '../styled/Canvas';

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
import Blog_animated from '../Blog_animated';

const { TAU } = Zdog;

let canvas, ctx, canvasWidth, canvasHeight, zoom, isSpinning;

// create a scene Anchor to hold all items
let scene = new Zdog.Anchor();

let liste = [Cou, Chair, Table];

scene.addChild(Computer);
scene.addChild(Chair);
scene.addChild(Table);
scene.addChild(Pot);
scene.addChild(Pen);
scene.addChild(Smartphone);
scene.addChild(Torse);
scene.addChild(Cou);

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

const Me = (props) => {
    const { index } = props;
    let zdogRef = useRef(),
        logosRef = createRef(),
        blogRef = createRef();
    
    
    gsap.set(blogRef.current, { position: "fixed" });

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevIndex = usePrevious(index);

    let [animation, setAnimation] = useState(props.animation);
    let me_tl = gsap.timeline({
        paused: true,
        onComplete: () => {
            gsap.set('.zdog-canvas', {
                display: "none"
            });
            gsap.set('#logoGrid', {
                display: "grid"
            });
        }
    });

    let me_reverse_tl = gsap.timeline({
        paused: true,
        onStart: () => {
            gsap.set('#logoGrid', { display: "none" });
            gsap.set('.zdog-canvas', { display: "block" });
            animateScene0_reverse();
        }
    });

    // ----- animate ----- //
    let animate = () => {
        // make changes to model, like rotating scene
        // scene.rotate.y += isSpinning ? 0.003 : 0;
        // scene.rotate.y += 0.003;

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

    let animateScene0 = () => {
        // Funcs for the TICKER 
        let slide_0_move_1 = () => {
            let end = 1;

            scene.rotate = {
                x: Zdog.lerp(animation[1].x, seq[end][index].x, rotateIllo.progress()),
                y: Zdog.lerp(animation[1].y, seq[end][index].y, rotateIllo.progress()),
            };
        }

        let slide_0_move_2 = () => {
            // zoom vers l'ecran et compenser en tirant vers le haut
            scene.translate.y -= .6;
            zoom += 0.5;
        }

        let slide_0_move_3 = () => {
            scene.children.forEach((child) => {
                !!child.children && child.children.forEach((c) => {
                    !!c.children && c.children.forEach((d) => { d.visible = false });
                    c.visible = false;
                });
                
                child.visible = false;
            });
        }

        // Funcs for the TIMELINE
        let rotateIllo = gsap.to('html', {
            // autoAlpha: 1,
            duration: .8,
            ease: "power2.out",
            onStart: () => {
                gsap.ticker.add(slide_0_move_1);
            },
            onComplete: () => {
                gsap.ticker.remove(slide_0_move_1);
                scene.rotate = {
                    x: Zdog.lerp(seq[0][index].x, seq[1][index].x, 1),
                    y: Zdog.lerp(seq[0][index].y, seq[1][index].y, 1),
                    z: 0
                };
                [Chair, Torse, Cou].forEach(el => el.remove());
            }
        });

        let zoomIllo = gsap.to('html', {
            // autoAlpha: 1,
            duration: .6,
            onStart: () => {
                gsap.ticker.add(slide_0_move_2);
                     Torse.remove();
                     Cou.remove();
            },
            onUpdate: () => {
                if (zoomIllo.progress() >= 0.25) {
                    Chair.remove();
                    Pot.remove();
                    Pen.remove();
                    Smartphone.remove();
                }

                if (zoomIllo.progress() >= 0.5) {
                    // Torse.remove();
                    // Cou.remove();
                    Table.remove();
                }
            },
            onComplete: () => {
                gsap.ticker.remove(slide_0_move_2);     
                // Computer.remove();
            },
            delay: .5
        });

        let widenScreen = gsap.to('html', {
            duration: .225,
            autoAlpha: 1,
            onStart: () => {
                gsap.ticker.add(slide_0_move_3);
            },
            onUpdate: () => { },
            onComplete: () => {
                gsap.ticker.remove(slide_0_move_3);
            }
        });

        me_tl.add(rotateIllo);
        me_tl.add(zoomIllo);
        me_tl.add(widenScreen);
        // me_tl.add(displayLogos);

        me_tl.play();
    }

    let animateScene0_reverse = () => {
        // Funcs for the TICKER 
        let slide_0_reverse_move = () => {
            let start = 1,
                end = 0;
            // zoom vers l'ecran
            scene.translate.y = 10;
            scene.rotate = {
                x: Zdog.lerp(animation[1].x, seq[end][1].x, rotateIllo_reverse.progress()),
                y: Zdog.lerp(animation[1].y, seq[end][1].y, rotateIllo_reverse.progress()),
                // z: Zdog.lerp(seq[start][1].z, seq[end][1].z, rotateIllo_reverse.progress())
            };
            // scene.scale = Zdog.lerp(4, 0.8, rotateIllo_reverse.progress());
            zoom = Zdog.lerp(42, 7, rotateIllo_reverse.progress());
            // zoom -= 0.5
            // scene.translate.y -= 0.8;
        }

        scene.addChild(Torse);
        scene.addChild(Computer);
        scene.addChild(Chair);
        scene.addChild(Table);
        scene.addChild(Pot);
        scene.addChild(Pen);
        scene.addChild(Smartphone);
        scene.addChild(Cou);

        // Funcs for the TIMELINE
        let rotateIllo_reverse = gsap.to('html', {
            // opacity: 1,
            duration: 1.4,
            // ease: "elastic.out(1,0.3)",
            onStart: () => {
                scene.addChild(Torse);
                scene.addChild(Computer);
                scene.addChild(Chair);
                scene.addChild(Table);
                scene.addChild(Pot);
                scene.addChild(Pen);
                scene.addChild(Smartphone);
                scene.addChild(Cou);
                gsap.ticker.add(slide_0_reverse_move);
            },
            onComplete: () => {
                gsap.ticker.remove(slide_0_reverse_move);
                console.log(scene.translate.y);

            }
        });

        me_reverse_tl.add(rotateIllo_reverse);

        me_reverse_tl.play();
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
                // scene.rotate.x = gsap.utils.clamp(5.62, 6.33, dragStartRX - (moveY / minSize) * TAU);
                // scene.rotate.y = gsap.utils.clamp(5.96, 6.64, dragStartRY - (moveX / minSize) * TAU);

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
        console.log(animation);
        
        scene.translate = animation[0];
        scene.rotate = animation[1];
        scene.scale = animation[2];

            //   zdogRef.current.translate = animation[0];
            //   zdogRef.current.rotate = animation[1];
            //   zdogRef.current.scale = animation[2];
    }, [animation]);

    // Start animation depending on Index
    useEffect(() => {
        switch (index) {
            case 0:
                // Hide other REFS
                gsap.set([logosRef.current, blogRef.current], {
                    display: "none"
                });
                // NO Animation or transition here
                prevIndex === 1 && animateScene0_reverse();
                break;
            case 1:

                if (prevIndex === 0) {
                    animateScene0();
                    gsap.set(zdogRef.current, { autoAlpha: 0});
                    // gsap.set('#logoGrid', { display: "grid" });
                } else { 
                    gsap.set([zdogRef.current,blogRef.current], { display: "none" });
                    gsap.set(logosRef.current, { display: "grid" });
                }         
                break;
            
            case 2:
                //  We just keep the PEN and delete all other children from the CANVAS scene
                [Chair, Table, Smartphone, Torse, Pot, Cou, Computer].forEach(
                    (child) => scene.removeChild(child));
                
                gsap.set(logosRef.current, { display: "none" });
                gsap.set([zdogRef.current, blogRef.current], { display: "block" });
                gsap.set(zdogRef.current, { x: "7.5%" });
                gsap.set(blogRef.current, { x: "-107.5%", position: "fixed" });

                console.log(getComputedStyle(zdogRef.current).height, getComputedStyle(blogRef.current).height);

                new Vivus(blogRef.current, {
                    duration: 161,
                    type: 'oneByOne'
                }, null);

                // We placed both Illus ON TOP OF EACH OTHER THX TO GSAP
                gsap.set('.zdog-canvas', { display: "flex", zIndex: "10" });                
                
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
        <LogoGrid ref={logosRef} prevIndex={prevIndex} />
        <Blog_animated ref={blogRef} />
            </>;
        }

        export default Me;
