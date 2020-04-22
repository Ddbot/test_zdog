import React from 'react';
import Zdog from 'zdog';


const { TAU } = Zdog;
var quarterTurn = Math.sin(TAU / 8);

var torsoX = 3 / quarterTurn;
var shoulderX = torsoX + 1.5;
var shinEnd = { y: 22 };
var hipX = 8 / quarterTurn / 2;

// ----- setup ----- //

    // get canvas element and its context
    let canvas = document.querySelector(".zdog-canvas");
    let ctx = canvas.getContext("2d");
    // get canvas size
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    // illustration variables
    const zoom = 5;
    let isSpinning = false;

    // create an scene Anchor to hold all items
    let scene = new Zdog.Anchor();

    scene.rotate = {
        x: 5.72,
        y: 6.19,
        z: 0
    };

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

let Menton = new Zdog.Shape({
  addTo: Cou,
  translate: { y: 0, z: -2 },
  stroke: 7.5,
  color: "#995c00",
  rotate: { x: TAU / 4 }
});

let Front = new Zdog.Ellipse({
  addTo: Menton,
  diameter: 2,
  translate: { y: -4 },
  stroke: 4,
  color: "#995c00"
});

let Cheveux_gros = new Zdog.Shape({
  addTo: Front,
  path: [{ y: -1 }, { y: -7 }],
  translate: { x: -2, y: -3.5, z: -3 },
  rotate: { x: -TAU / 4 },
  stroke: 2.5,
  color: "#616161"
});

let Cheveux_medium = new Zdog.Shape({
  addTo: Front,
  path: [{ y: 0 }, { y: -6 }],
  translate: { x: 2, y: -3, z: -2 },
  rotate: { x: (-TAU * 75) / 360 },
  stroke: 2,
  color: "lightgray"
});

let Cheveux_petit = new Zdog.Shape({
  addTo: Front,
  path: [{ y: 0 }, { y: -6 }],
  translate: { x: -0.25, y: -3, z: -1 },
  rotate: { x: (-TAU * 80) / 360 },
  stroke: 2.5,
  color: "gray"
});

let Cheveux_derriere = new Zdog.Ellipse({
  addTo: Front,
  diameter: 3,
  translate: { y: -0.3, z: -3 },
  stroke: 4,
  color: "#4e4e4e"
});

let Yeux_L = new Zdog.Ellipse({
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

let Yeux_R = Yeux_L.copy({
  translate: { x: 1.5, y: 0.5, z: 2 }
});

let Oreille_L = new Zdog.Ellipse({
  addTo: Front,
  diameter: 1.5,
  translate: { x: 3.5, y: 1, z: -1 },
  rotate: { y: -TAU / 8 },
  stroke: 1,
  color: "#995c00",
  fill: true
});

let Cheveux_oreille_L = new Zdog.Ellipse({
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

let Oreille_R = Oreille_L.copy({
  addTo: Front,
  translate: { x: -3.5, y: 1, z: -1 },
  rotate: { y: TAU / 8 }
});

let Cheveux_oreille_R = Cheveux_oreille_L.copy({
  addTo: Oreille_R,
  translate: { x: 0.5, y: -0.4, z: -2 },
  rotate: { y: 0.8, z: -TAU / 4 }
});

let Sourire = new Zdog.Ellipse({
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
{
  /* BRAS R */
}

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
{
  /* BRAS L */
}
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

const Jambes = new Zdog.Cylinder({
  addTo: scene,
  diameter: 6,
  length: torsoX * 3 - 1,
  translate: { y: 40 },
  rotate: { x: -TAU, y: -TAU / 4 },
  color: "hsl(180, 25%, 20%)"
});

const Cuisse_R = new Zdog.Cylinder({
  addTo: Jambes,
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
{
  /* TIBIA R */
}
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


let Chair = new Zdog.Group({
    addTo: scene
});

let DossierTop = new Zdog.Ellipse({
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


let DossierMiddle = new Zdog.Rect({
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

let Pouf = new Zdog.Ellipse({
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
        
let StoolStand = new Zdog.Hemisphere({
    addTo: Chair,
    diameter: 20,
    stroke: false,
    color: '#b3cccc',
    backface: false,
    translate: { y: 59 },
    rotate: { x: TAU / 4 }            
});


const Computer = new Zdog.Group({
    addTo: scene,
        translate:{        y: 24,        z: 18        },
        rotate:{            x: -0.1    }
})
{/* Bezel */ }
const Screen = new Zdog.Box({
    addTo: Computer,
    width: 16,
    height: 32 / 3,
    depth: 1,
    stroke: 1,
    color: 'rgba(1,1,1,.8)',
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
            translate:{               y: 32 / 6,                z: -32 / 6            },
       rotate: { x: TAU / 4 - 3 }
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

const Pen = new Zdog.Anchor({
    addTo: scene,
        scale: 1,
        translate: { x: 15, y: 25.5, z: 16 },
        rotate: { x: TAU / 4, y: -TAU/16},
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
    rotate: { x: TAU / 4 }
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
    translate: { z: .48 }
});


let Bois = new Zdog.Cylinder({
    addTo: Pen,
    diameter: .7,
    length: 4.5,
    stroke: false,
    color: 'blue',
    backface: false,
    translate: { z: -2.25 }
});

let Anneau = new Zdog.Cylinder({
    addTo: Pen,
        diameter: .7,
        length: .45,
            stroke: false,
        color: 'whitesmoke',
            // backface: 'whitesmoke',
            backface: false,
    translate: { z: -4.5 }
    });

let Gomme = new Zdog.Hemisphere({
    addTo: Pen,
    diameter: .7,
    stroke: false,
    color: 'black',
    backface: false,
    rotate: { x: Math.PI },
    translate: { z: -4.75 }
});


// ----- animate ----- //

function animate() {
  // make changes to model, like rotating scene
  scene.rotate.y += isSpinning ? 0.03 : 0;
  scene.updateGraph();
  render();
  requestAnimationFrame(animate);
}

function render() {
  // clear canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.save();
  // center canvas & zoom
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.scale(zoom, zoom);
  // set lineJoin and lineCap to round
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  // render scene graph
  scene.renderGraphCanvas(ctx);
  ctx.restore();
}

animate();

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
  onDragMove: function (pointer, moveX, moveY) {
    scene.rotate.x = dragStartRX - (moveY / minSize) * TAU;
    scene.rotate.y = dragStartRY - (moveX / minSize) * TAU;
  }
});

