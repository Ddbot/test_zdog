import React, { useEffect, useState } from 'react';
import Zdog from 'zdog';

import Canvas from '../styled/Canvas';

import { navigate } from "gatsby";

import gsap, { splitColor } from 'gsap';

let faux = require('./faux-code.svg');

const { TAU } = Zdog;
var quarterTurn = Math.sin(TAU / 8);

var torsoX = 3 / quarterTurn;
var shoulderX = torsoX + 1.5;
var shinEnd = { y: 22 };
var hipX = 8 / quarterTurn / 2;

let canvas, ctx, canvasWidth, canvasHeight, zoom, isSpinning;

    // create an scene Anchor to hold all items
    let scene = new Zdog.Anchor();

// ----- model ----- //

// add shapes to scene
const Cou = new Zdog.Cylinder({
  addTo: scene,
  diameter: 4,
  length: 6,
  stroke: false,
  color: "#995c00",
  rotate: { x: -TAU / 4 },
  translate: { y: 12.5 }
});

const Menton = new Zdog.Shape({
  addTo: Cou,
  translate: { y: 0, z: -2 },
  stroke: 7.5,
  color: "#995c00",
  rotate: { x: TAU / 4 }
});

const Front = new Zdog.Ellipse({
  addTo: Menton,
  diameter: 2,
  translate: { y: -4 },
  stroke: 4,
  color: "#995c00"
});

const Cheveux_gros = new Zdog.Shape({
  addTo: Front,
  path: [{ y: -1 }, { y: -7 }],
  translate: { x: -2, y: -3.5, z: -3 },
  rotate: { x: -TAU / 4 },
  stroke: 2.5,
  color: "#616161"
});

const Cheveux_medium = new Zdog.Shape({
  addTo: Front,
  path: [{ y: 0 }, { y: -6 }],
  translate: { x: 2, y: -3, z: -2 },
  rotate: { x: (-TAU * 75) / 360 },
  stroke: 2,
  color: "lightgray"
});

const Cheveux_petit = new Zdog.Shape({
  addTo: Front,
  path: [{ y: 0 }, { y: -6 }],
  translate: { x: -0.25, y: -3, z: -1 },
  rotate: { x: (-TAU * 80) / 360 },
  stroke: 2.5,
  color: "gray"
});

const Cheveux_derriere = new Zdog.Ellipse({
  addTo: Front,
  diameter: 3,
  translate: { y: -0.3, z: -3 },
  stroke: 4,
  color: "#4e4e4e"
});

const Yeux_L = new Zdog.Ellipse({
  addTo: Front,
  quarters: 2,
  scale: 1.5,
  translate: { x: -1.5, y: 0.5, z: 2 },
  rotate: { z: -TAU / 4 },
  closed: false,
  color: "#330000",
  stroke: 0.38,
  fill: false
});

const Yeux_R = Yeux_L.copy({
  translate: { x: 1.5, y: 0.5, z: 2 }
});

const Oreille_L = new Zdog.Ellipse({
  addTo: Front,
  diameter: 1.5,
  translate: { x: 3.5, y: 1, z: -1 },
  rotate: { y: -TAU / 8 },
  stroke: 1,
  color: "#995c00",
  fill: true
});

const Cheveux_oreille_L = new Zdog.Ellipse({
  addTo: Oreille_L,
  quarters: 2,
  scale: 3,
  translate: { x: -0.5, y: -0.4, z: -2 },
  rotate: { y: -0.8, z: -TAU / 4 },
  closed: false,
  color: "#4e4e4e",
  stroke: 1.5,
  fill: false
});

const Oreille_R = Oreille_L.copy({
  addTo: Front,
  translate: { x: -3.5, y: 1, z: -1 },
  rotate: { y: TAU / 8 }
});

const Cheveux_oreille_R = Cheveux_oreille_L.copy({
  addTo: Oreille_R,
  translate: { x: 0.5, y: -0.4, z: -2 },
  rotate: { y: 0.8, z: -TAU / 4 }
});

const Sourire = new Zdog.Ellipse({
  addTo: Menton,
  quarters: 2,
  translate: { y: -1, z: 3.5 },
  rotate: { z: TAU / 4 },
  scale: 3,
  fill: true,
  stroke: 0.5,
  color: "white",
  closed: true
});

const Torse = new Zdog.Shape({
  addTo: scene,
  translate: {
    y: 25.3,
    z: 0
  },
  path: [
    {
      y: -torsoX
    },
    {
      y: torsoX * 3 - 1
    }
  ],
  color: "#DED381",
  stroke: 12
});

const Epaules = new Zdog.Shape({
  addTo: Torse,
  path: [
    {
      x: 0
    },
    {
      x: 10
    }
  ],
  color: "#FAE491",
  stroke: 8,
  translate: {
    x: -5,
    y: -6
  }
});

const Logo_tshirt1 = new Zdog.Shape({
  addTo: Torse,
  path: [
    {
      x: 0,
      y: -1.6
    },
    {
      x: 1.6,
      y: 1.6
    },
    {
      x: -1.6,
      y: 1.6
    }
  ],
  stroke: 0.5,
  color: "hsla(359, 85%, 74%, .5)",
  translate: {
    y: -7,
    z: 4
  }
});

const Logo_tshirt2 = new Zdog.Shape({
  addTo: Torse,
  path: [
    {
      x: -1.6,
      y: 2.58
    },
    {
      x: 1.6,
      y: 2.58
    }
  ],
  // closed by default
  stroke: 0.5,
  color: "hsla(203, 77%, 83%, 0.5)",
  translate: {
    y: -7,
    z: 4
  }
});

const Bras_Groupe_R = new Zdog.Group({
  addTo: Torse
});

const Bras_R = new Zdog.Shape({
  addTo: Bras_Groupe_R,
  path: [
    {
      y: 0
    },
    {
      y: 7
    }
  ],
  translate: {
    x: -torsoX - 3,
    y: -7
  },
  rotate: {
    x: 0.5,
    y: -0.5,
    z: TAU / 16
  },
  color: "#F5F39A",
  stroke: 4
});

const Avant_Bras_R = Bras_R.copy({
  addTo: Bras_R,
  color: "#995c00",
  translate: {
    y: 7,
    z: 0
  },
  // mouvement du bras vers le haut avec X entre 0.5 et 1
  rotate: {
    x: 0.5,
    y: -5,
    z: -0.5
  }
});

const Main_R = new Zdog.Shape({
  addTo: Avant_Bras_R,
  stroke: 5,
  color: "#995c00",
  translate: {
    y: 8,
    z: 0
  }
});

const Bras_Groupe_L = new Zdog.Group({
  addTo: Torse
});

const Bras_L = Bras_R.copy({
  translate: {
    x: torsoX + 3,
    y: -7
  },
  rotate: {
    x: 0.7,
    y: -1,
    z: -TAU / 16
  }
});

const Avant_Bras_L = Avant_Bras_R.copy({
  addTo: Bras_L,
  translate: {
    x: -torsoX - 4,
    y: 8,
    z: 2
  },
  rotate: {
    x: -2,
    y: 0,
    z: 5
  }
});

const Main_L = Main_R.copy({
  addTo: Avant_Bras_L,
  stroke: 4.7,
  translate: {
    x: -0.5,
    y: -3.5,
    z: 0.5
  }
});

const Computer = new Zdog.Group({
    addTo: scene,
    translate:{ y: 24, z: 18 },
    rotate:{ x: -0.1 }
})

const slogan = "Hello !!"

const LineScreen = new Zdog.Shape({	
	// addTo: Computer,
	color: 'green',
	path: [{ x: -2 }, { x: 2 }],
	closed: false,
	stroke: .8
});

const Screen = new Zdog.Box({
    addTo: Computer,
    width: 16,
    height: 32 / 3,
    depth: 1,
    stroke: 1,
    color: 'rgba(255,255,255,1)',
    backface: 'lightgray',
    leftFace: 'lightgray',
    rightFace: 'lightgray',
    topFace: 'lightgray',
    bottomFace: false
});

const Keyboard = new Zdog.Box({
    addTo: Computer,
        width: 16,
        height: 32/3,
        color: 'rgb(211, 211, 212)',
        backface: 'lightgray',
        // backface:false,
        leftFace: 'lightgray',
        rightFace: 'lightgray',
        topFace: 'lightgray',
        // bottomFace: 'lightgray',
        bottomFace:false,
        translate:{ y: 32/6, z: -32/6 },
    rotate: { x: TAU / 4 - 3 }
});

const Pen = new Zdog.Anchor({
  addTo: scene,
  scale: 1,
  translate: {
    x: 15,
    y: 25.5,
    z: 16
  },
  rotate: {
    x: TAU / 4,
    y: -TAU / 16
  },
});

const Pot = new Zdog.Cylinder({
  addTo: scene,
  diameter: 3,
  length: 3,
  stroke: false,
  color: 'rgba(157, 169, 156, 0.9)',
  // backface={'gray'}
  backface: false,
  translate: {
    x: 13.5,
    y: 28.5,
    z: 16
  },
  rotate: {
    x: TAU / 4
  }
});

let Pointe = new Zdog.Cone({
  addTo: Pen,
  diameter: .72,
  length: .72,
  stroke: false,
  color: "#f4dc95",
  // backface: "#C25"},
  backface: false,
})

let Mine = new Zdog.Cone({
  addTo: Pen,
  diameter: .2,
  length: .2,
  stroke: false,
  color: "black",
  backface: false,
  translate: {
    z: .48
  }
});

let Bois = new Zdog.Cylinder({
  addTo: Pen,
  diameter: .7,
  length: 4.5,
  stroke: false,
  color: 'blue',
  backface: false,
  translate: {
    z: -2.25
  }
});

let Anneau = new Zdog.Cylinder({
  addTo: Pen,
  diameter: .7,
  length: .45,
  stroke: false,
  color: 'whitesmoke',
  // backface: 'whitesmoke',
  backface: false,
  translate: {
    z: -4.5
  }
});

let Gomme = new Zdog.Hemisphere({
  addTo: Pen,
  diameter: .7,
  stroke: false,
  color: 'black',
  backface: false,
  rotate: {
    x: Math.PI
  },
  translate: {
    z: -4.75
  }
});

const Table = new Zdog.Box({            
    addTo: scene,
        translate:{
            y: 44.6,
            z: 14
        },
            width: 40,
            height:27,
            depth: 15,
            stroke:2,
            color:'transparent',
            // remove left & right faces
            leftFace:'#86592d',
            rightFace:'#734d26',
            rearFace: false,
            topFace:'#4d3319',
            bottomFace: false,
});

const Smartphone = new Zdog.Group({
  addTo: scene,
    translate: {
        x: -15,
        y: 25,
        z: 18
    },
    rotate: {
        x: 0,
        y: TAU / 12
    }
});

const SmartphoneScreen = new Zdog.Box({
    addTo: Smartphone,
            stroke: 0.01,
            width: 3,
            height: 5.5,
            depth: .125,
            color: 'black',
            // backface: 'hsl(201, 38%, 25%)',
            backface: false,
            leftFace: 'hsl(201, 38%, 25%)',
            rightFace: 'hsl(201, 38%, 25%)',
            topFace: 'hsl(201, 38%, 25%)',
            // bottomFace: 'hsl(201, 38%, 25%)',
            bottomFace: false,
            translate:{
                y: 32 / 6,
                z: -32 / 6
            },
            rotate: {
        x: TAU / 4 - 3
    }
});

const Avatar = new Zdog.Ellipse({
    addTo: SmartphoneScreen,
    diameter: 0.8,
    // height:0.1,
    stroke: 0.04,
    translate: { x: .7, y: -2 },
    fill: true,
    color: '#9da99c'
});

const Line = new Zdog.Shape({
    addTo: SmartphoneScreen,
    path: [{ x: 0 }, { x: 1 }],
    color: '#87a3a7',
    stroke: .2,
    translate: { x: -1, y: -2 }
});

const Line2 = Line.copy({ path: [{ x: 0 }, { x: 2 }], translate: { x: -1, y: -1.2 } });

const Line3 = Line2.copy({ translate: { x: -1, y: -.4 } });

const Box = new Zdog.Rect({
            addTo: SmartphoneScreen,
                width: 2,
                height: 1.8,
                color: '#87a3a7',
                fill: true,
                stroke: .2,
    translate: { y: 1.4 }
});

const Triangle = new Zdog.Shape({
    addTo: Box,
    path: [{ x: 0, y: -.4 }, { x: .4, y: .4 }, { x: -.4, y: .4 }],
    fill: true,
    stroke: .2,
    color: '#636'
});

const Hanches = new Zdog.Cylinder({
  addTo: scene,
  diameter: 6,
  length: torsoX * 3 - 1,
  translate: { y: 40 },
  rotate: { x: -TAU, y: -TAU / 4 },
  color: "hsl(180, 25%, 20%)"
});

const Cuisse_R = new Zdog.Cylinder({
  addTo: Hanches,
  diameter: 4,
  translate: { x: -8.5, y: 0, z: -6 },
  rotate: { y: TAU / 4 + 0.4 },
  length: 12,
  color: "darkslategray"
});

const Genou_R = new Zdog.Shape({
  addTo: Cuisse_R,
  stroke: 5,
  color: "hsl(180, 25%, 28%)",
  translate: { z: 8 }
});

const Tibia_R = new Zdog.Cylinder({
  addTo: Genou_R,
  diameter: 4,
  translate: { x: 0, y: 7.5, z: 0 },
  rotate: { x: -TAU / 4, y: 0 },
  length: 12,
  color: "hsl(180, 25%, 30%)"
});
const Chaussure_R = new Zdog.Shape({
  addTo: Tibia_R,
  path: [{ y: 0 }, { y: 4 }],
  stroke: 5,
  color: "#cc7a00",
  translate: { x: 0, y: 0, z: 8 },
  rotate: { x: -3, y: 1, z: 0.5 }
});

const Lacet_CHaussure_R_1 = new Zdog.Shape({
  addTo: Chaussure_R,
  path: [{ x: 0 }, { x: 2.5 }],
  translate: { x: 1.3, y: 2, z: 2 },
  rotate: { x: 3, y: 1, z: -0.1 },
  stroke: 0.5,
  color: "beige"
});
const Lacet_CHaussure_R_2 = Lacet_CHaussure_R_1.copy({
  translate: { x: 1.3, y: 3.25, z: 2 }
});
const Lacet_CHaussure_R_3 = Lacet_CHaussure_R_1.copy({
  translate: { x: 1.3, y: 4.5, z: 2 }
});

const Cuisse_L = Cuisse_R.copy({
  translate: { x: -8.5, y: 0, z: 6 },
  rotate: { y: TAU / 4 - 0.4 }
});
const Genou_L = Genou_R.copy({ addTo: Cuisse_L });
const Tibia_L = Tibia_R.copy({ addTo: Genou_L });

const Chaussure_L = new Zdog.Shape({
  addTo: Tibia_L,
  path: [{ y: 0 }, { y: 4 }],
  stroke: 5,
  color: "#cc7a00",
  translate: { x: 0, y: 0, z: 8 },
  rotate: { x: -3, y: 2, z: 0.5 }
});

const Lacet_CHaussure_L_1 = new Zdog.Shape({
  addTo: Chaussure_L,
  path: [{ x: 0 }, { x: 2.5 }],
  translate: { x: 1.3, y: 2, z: -2 },
  rotate: { y: 1.2 },
  stroke: 0.5,
  color: "beige"
});

const Lacet_CHaussure_L_2 = Lacet_CHaussure_L_1.copy({
  translate: { x: 1.3, y: 3.25, z: -2 }
});

const Lacet_CHaussure_L_3 = Lacet_CHaussure_L_1.copy({
  translate: { x: 1.3, y: 4.5, z: -2 }
});

const Chair = new Zdog.Group({
    addTo: scene
});

const DossierTop = new Zdog.Ellipse({
    addTo: Chair,
    diameter: 20,
    quarters: 2,
    stroke: 3,
    color: '#332424',
    rotate: {
        x: 3 / TAU / 4,
        z: -TAU / 4,
    },
    translate: {
        y: 30,
        z: -10
    },
    fill: true
});

const DossierMiddle = new Zdog.Rect({
    addTo: Chair,
    width: 20,
    height: 18,
    stroke: 3,
    color: '#332424',
    translate: {
        y: 39,
        z: -10
    },
    fill: true
});

const Pouf = new Zdog.Ellipse({
    addTo: Chair,
    width: 10,
    height: 20,
    stroke: 8,
    color: '#332424',
    rotate: {
        x: TAU / 4,
        z: -TAU / 4,
    },
    translate: {
        y: 45,
    }
});
        
// const StoolStand = new Zdog.Hemisphere({
//     addTo: Pouf,
//     diameter: 19,
//     stroke: false,
//     color: '#b3cccc',
//     backface: false,
// 	translate: {
// 		x: 0,
// 		z: -14
// 	},        
// });

const Stand1 = new Zdog.Ellipse({
	addTo: Pouf,
	quarters: 2,
	// scale: 1.5,
	diameter: 18,
	translate: {
		// x: -1.5,
		// y: 15,
		z: -14
	},	
	rotate: {
		x: TAU/4,
		y: 0,
		z: TAU/4
	},
	closed: false,
	color: '#b3cccc',
	stroke: 2,
	// fill: false
});

const Stand2 = new Zdog.Ellipse({
	addTo: Pouf,
	quarters: 2,
	// scale: 1.5,
	diameter: 18,
	translate: {
		// x: -1.5,
		// y: 15,
		z: -14
	},
	rotate: {
		// x: TAU/2,
		y: TAU/4,
		// z: TAU/2
	},
	closed: false,
	color: '#b3cccc',
	stroke: 2,
	// fill: false
});

let liste = [Cou, Menton, Front, Cheveux_gros, Cheveux_medium, Cheveux_petit, Cheveux_derriere, Yeux_L, Yeux_R, Oreille_L, Cheveux_oreille_L, Oreille_R, Cheveux_oreille_R, Sourire, Torse, Epaules, Logo_tshirt1, Logo_tshirt2, Bras_Groupe_R, Bras_R, Avant_Bras_R, Main_R, Bras_Groupe_L, Bras_L, Avant_Bras_L, Main_L, Hanches, Cuisse_R, Genou_R, Tibia_R, Chaussure_R, Lacet_CHaussure_R_1, Lacet_CHaussure_R_2, Lacet_CHaussure_R_3, Cuisse_L, Genou_L, Tibia_L, Chaussure_L, Lacet_CHaussure_L_1, Lacet_CHaussure_L_2, Lacet_CHaussure_L_3, Chair, DossierTop, DossierMiddle, Pouf, Stand1, Stand2,];
const seq = [{
  x: 5.485,
  y: 6.138,
  z: 0
}, {
  x: TAU,
  y: TAU / 2,
  z: 0
  }];


const Me = (props) => {
	let me_tl = gsap.timeline({
		paused: true,
		onComplete: () => {
			navigate("/dev", {
				state: {
					index: 1
				}
			});
		}
	});
  
	let animateScene = () => {
		let alpha = 1;
		let colors = [];
		liste.forEach((el) => colors.push(el.color));


		// Funcs for the TICKER 
		let rotateScene = () => {
			let start, end;
			
			const tween = Zdog.easeInOut(rotateIllo.progress(), 3);

			if (props.index === 0 && !props.prevIndex) {
			start = 0;
			end = 1;
			}
			if (props.index === 0 && props.prevIndex === 1) {
			start = 1;
			end = 0;
			}

			console.log('Rotate illo: ',tween);

			scene.rotate = {
				x: Zdog.lerp(seq[start].x, seq[end].x, tween*rotateIllo.progress()),
				y: Zdog.lerp(seq[start].y, seq[end].y, tween*rotateIllo.progress()),
				// z: Zdog.lerp(seq[start].z, seq[end].z, rotateIllo.progress())
			};
		}

		let zoomOnScreen = () => {
			const tween = Zdog.easeInOut(zoomIllo.progress()%1.2, 4);
			// zoom vers l'ecran
			alpha = Zdog.lerp(1, 0, zoomIllo.progress());			
			scene.scale = Zdog.lerp(1, 7.4, zoomIllo.progress()/2);
			scene.translate.y -= 1.2;
			
			liste.map((el, i) => {				
				let rgba = gsap.utils.splitColor(colors[i]);
				rgba[3] = alpha;
				el.color = "rgba(`${rgba.join(',')}`)";
				el.scale -= .1;
			});

			if (zoomIllo.progress() >= 0.5) {
				liste.forEach((el) => {					
					el.visible = false
				});
			}
		}

		// Funcs for the TIMELINE
		let rotateIllo = gsap.to('html', {
			opacity: 1,
			duration: 1,
			ease: "power2.out",
			onStart: () => {
				gsap.ticker.add(rotateScene);				
			},
			onComplete: () => {
				gsap.ticker.remove(rotateScene);
			}
		});

		let zoomIllo = gsap.to('.zdog-canvas', {
			borderRadius: "0%",	
			borderColor: "transparent",
			duration: 1,
			onStart: () => {
				gsap.ticker.add(zoomOnScreen);
				gsap.to([Table, Pot, Pen], {
					opacity: 0,
					duration: 1,
					leftFace: 'transparent',
					rightFace: 'transparent',
					topFace: 'transparent',
					color: 'transparent',
					onStart: () => {

					}
				});

			},
			onComplete: () => {
				gsap.ticker.remove(zoomOnScreen);
				gsap.set([Table, Pot, Pen, Computer], { visible: false });
			},
		});

		let typeText = gsap.to('html', {
			duration: 3,
			// TYPE TEXT LIKE TYPE WRITER
			onStart: () => {
				// let animateCodeOnScreen = ...
				Screen.addChild(LineScreen);
				Screen.updateGraph();
			}
		});

		me_tl.add(rotateIllo);
		me_tl.add(zoomIllo);
		me_tl.add(typeText);

		me_tl.play();
	}

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

		scene.rotate = seq[0];

		animate();

	}, [props.rotation]);
	
	// Animate Scene ?
	scene.translate.y = 3;
	useEffect(() => { 
		!!props.animate && animateScene();
	});
		
	return (
		<Canvas className="zdog-canvas" width={480} height={480}></Canvas>
	);
}

export default Me;