import React, { useEffect, useRef, useState } from 'react';
import Zdog from 'zdog';

import Canvas from '../styled/Canvas';

import { navigate, useStaticQuery } from "gatsby";

import gsap, { splitColor } from 'gsap';

import Chair from './Chair';
import ConePattern from './ConePattern';
import Computer from './Computer';
import { Cou, Torse } from './Andry';
import Pen from './Pen';
import Pot from './Pot';
import Smartphone from './Smartphone';
import Table from './Table';

const { TAU } = Zdog;

let canvas, ctx, canvasWidth, canvasHeight, zoom, isSpinning;

// create an scene Anchor to hold all items
let scene = new Zdog.Anchor();

let liste = [Cou, Chair, Table];
ConePattern.children.map(c => c.visible = false);

console.log('Cones: ', ConePattern);

scene.addChild(Computer);
scene.addChild(ConePattern);
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
    });

    let me_reverse_tl = gsap.timeline({
        paused: true,
    });

    // ----- animate ----- //
    let animate = () => {
        // make changes to model, like rotating scene
        // scene.rotate.y += isSpinning ? 0.03 : 0;
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
            let start = 0,
                end = 1;

            scene.rotate = {
                x: Zdog.lerp(seq[start][index].x, seq[end][index].x, rotateIllo.progress()),
                y: Zdog.lerp(seq[start][index].y, seq[end][index].y, rotateIllo.progress()),
                // z: Zdog.lerp(seq[start][1].z, seq[end][1].z, rotateIllo.progress())
            };

            // scene.scale = Zdog.lerp(0.8, 10, rotateIllo.progress());

            // scene.scale = Zdog.lerp(seq[start][1].z, seq[end][1].z, rotateIllo.progress())

        }

        let slide_0_move_2 = () => {
            // zoom vers l'ecran
            // scene.scale = Zdog.lerp(1, 4, zoomIllo.progress());
            // zoom = 
            // scene.translate.y -= 1;
            // scene.children.forEach(c => { if (c.color !== undefined) { c.color = "hsla(0, 0%, 100%,1)" } });

            Computer.scale = Zdog.lerp(7, 12, zoomIllo.progress());

            [Chair, Pot, Pen, Smartphone, Torse, Cou, Table].forEach(objet => {
                let oldColor = gsap.utils.splitColor(objet.color), alpha = oldColor[3];
                alpha -= alpha / 4.8;
                // oldColor.pop();
                // let newColor = oldColor.push(alpha).join(',');

                // objet.color = newColor;
                if (!objet.color) {
                    let childs = objet.children.forEach(c => {
                        if (!c.color) {
                            console.log('C is ', c);
                        }
                        console.log(' Color of c is ', c.color);
                    });
                }
                // console.log('Couleur de lobjet a la racine: ', objet, objet.color);
            });
        }

        // Funcs for the TIMELINE
        let rotateIllo = gsap.to('html', {
            autoAlpha: 1,
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
            }
        });

        let zoomIllo = gsap.to('html', {
            autoAlpha: 1,
            duration: 1.6,
            onStart: () => {
                gsap.ticker.add(slide_0_move_2);
            },
            onUpdate: () => {
                if (zoomIllo.progress() >= 0.25) {
                    Chair.remove();
                    Pot.remove();
                    Pen.remove();
                    Smartphone.remove();
                }

                if (zoomIllo.progress() >= 0.5) {
                    Torse.remove();
                    Cou.remove();
                    Table.remove();
                }
            },
            onComplete: () => {
                Computer.remove();
                gsap.ticker.remove(slide_0_move_2);
            },
            delay: .5
        });

        me_tl.add(rotateIllo);
        me_tl.add(zoomIllo);

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
                x: Zdog.lerp(seq[start][1].x, seq[end][1].x, rotateIllo_reverse.progress()),
                y: Zdog.lerp(seq[start][1].y, seq[end][1].y, rotateIllo_reverse.progress()),
                // z: Zdog.lerp(seq[start][1].z, seq[end][1].z, rotateIllo_reverse.progress())
            };
            // scene.scale = Zdog.lerp(4, 0.8, rotateIllo_reverse.progress());
            zoom = Zdog.lerp(42, 7, rotateIllo_reverse.progress());
            // scene.translate.y -= 0.8;
        }

        scene.addChild(Torse);
        scene.addChild(Computer);
        scene.addChild(ConePattern);
        scene.addChild(Chair);
        scene.addChild(Table);
        scene.addChild(Pot);
        scene.addChild(Pen);
        scene.addChild(Smartphone);
        scene.addChild(Cou);

        // Funcs for the TIMELINE
        let rotateIllo_reverse = gsap.to('html', {
            opacity: 1,
            duration: 1.4,
            // ease: "elastic.out(1,0.3)",
            onStart: () => {
                scene.addChild(Torse);
                scene.addChild(Computer);
                scene.addChild(ConePattern);
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
        // canvas.style.border = "1px solid red";

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

        // add drag-rotatation with Dragger
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
                scene.rotate.x = dragStartRX - (moveY / minSize) * TAU;
                scene.rotate.y = dragStartRY - (moveX / minSize) * TAU;

                console.log('onDragMove: { x: ', scene.rotate.x, '; y: ', scene.rotate.y, ' }');
            }
        });

        // scene.rotate = seq[0];

        animate();

    }, [props.rotation]);

    // translate, rotate and scale SCENE
    useEffect(() => {
        scene.translate = animation[0];
        scene.rotate = animation[1];
        scene.scale = animation[2];
    }, [animation]);

    // Start animation depending of change in Index
    useEffect(() => {
        switch (index) {
            case 0:
                // NO Animation or transition here
                prevIndex === 1 && animateScene0_reverse();
                console.log('Au debut, scene.translate.y = ', scene.translate.y, ' et zoom = ', zoom)
                break;
            case 1:
                if (prevIndex === 0) {
                    animateScene0();
                    // gsap.to(scene, {
                    //     duration: 5,
                    //     rotate: {
                    //         x: TAU * 2,
                    //         y: Math.PI,
                    //         z: 0
                    //     },
                    // });
                };
                break;

            default:
                break;
        }
    });

    return <Canvas className="zdog-canvas" width={480} height={480}></Canvas>;
}

export default Me;