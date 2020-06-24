import Zdog from 'zdog';

const { TAU } = Zdog;
var quarterTurn = Math.sin(TAU / 8);

var torsoX = 3 / quarterTurn;

// ----- model ----- //

// add shapes to scene
export const Cou = new Zdog.Cylinder({
    diameter: 4,
    length: 6,
    stroke: false,
    color: "#85530D",
    rotate: {
        x: -TAU / 4
    },
    translate: {
        y: 13.5
    }
});

// #85530D
// #85530D

const Menton = new Zdog.Shape({
    addTo: Cou,
    translate: {
        y: 0,
        z: -2
    },
    stroke: 6,
    color: "#85530D",
    rotate: {
        x: TAU / 4
    }
});

const Front = new Zdog.Ellipse({
    addTo: Menton,
    diameter: 2,
    translate: {
        y: -4
    },
    stroke: 3.2,
    color: "#85530D"
});

const Cheveux_gros = new Zdog.Shape({
    addTo: Front,
    path: [{
        y: -1
    }, {
        y: -7
    }],
    translate: {
        x: -2,
        y: -3.5,
        z: -3
    },
    rotate: {
        x: -TAU / 4
    },
    stroke: 2,
    color: "hsla(0, 0%, 38%,1)"
});

const Cheveux_medium = new Zdog.Shape({
    addTo: Front,
    path: [{
        y: 0
    }, {
        y: -6
    }],
    translate: {
        x: 2,
        y: -3,
        z: -2
    },
    rotate: {
        x: (-TAU * 75) / 360
    },
    stroke: 1.6,
    color: "lightgray"
});

const Cheveux_petit = new Zdog.Shape({
    addTo: Front,
    path: [{
        y: 0
    }, {
        y: -6
    }],
    translate: {
        x: -0.25,
        y: -3,
        z: -1
    },
    rotate: {
        x: (-TAU * 80) / 360
    },
    stroke: 2,
    color: "gray"
});

const Cheveux_derriere = new Zdog.Ellipse({
    addTo: Front,
    diameter: 3,
    translate: {
        y: -0.3,
        z: -3
    },
    stroke: 4,
    color: "hsla(0, 0%, 31%,1)"
});

const Yeux_L = new Zdog.Ellipse({
    addTo: Front,
    quarters: 2,
    scale: 1.5,
    translate: {
        x: -1.5,
        y: 0.5,
        z: 2
    },
    rotate: {
        z: -TAU / 4
    },
    closed: false,
    color: "hsla(0, 100%, 10%,1)",
    stroke: 0.38,
    fill: false
});

const Yeux_R = Yeux_L.copy({
    translate: {
        x: 1.5,
        y: 0.5,
        z: 2
    }
});

const Oreille_L = new Zdog.Ellipse({
    addTo: Front,
    diameter: 1.5,
    translate: {
        x: 3.5,
        y: 1,
        z: -1
    },
    rotate: {
        y: -TAU / 8
    },
    stroke: 1,
    color: "#85530D",
    fill: true
});

const Cheveux_oreille_L = new Zdog.Ellipse({
    addTo: Oreille_L,
    quarters: 2,
    scale: 3,
    translate: {
        x: -0.5,
        y: -0.4,
        z: -2
    },
    rotate: {
        y: -0.8,
        z: -TAU / 4
    },
    closed: false,
    color: "hsla(0, 0%, 31%,1)",
    stroke: 1.5,
    fill: false
});

const Oreille_R = Oreille_L.copy({
    addTo: Front,
    translate: {
        x: -3.5,
        y: 1,
        z: -1
    },
    rotate: {
        y: TAU / 8
    }
});

const Cheveux_oreille_R = Cheveux_oreille_L.copy({
    addTo: Oreille_R,
    translate: {
        x: 0.5,
        y: -0.4,
        z: -2
    },
    rotate: {
        y: 0.8,
        z: -TAU / 4
    }
});

const Sourire = new Zdog.Ellipse({
    addTo: Menton,
    quarters: 2,
    translate: {
        y: -1,
        z: 3.5
    },
    rotate: {
        z: TAU / 4
    },
    scale: 3,
    fill: true,
    stroke: 0.5,
    color: "white",
    closed: true
});

export const Torse = new Zdog.Shape({
    translate: {
        y: 25.3,
        z: 0
    },
    path: [{
        y: -torsoX
    },
    {
        y: torsoX * 3 - 1
    }
    ],
    color: "#d1ce00",
    stroke: 9.6,
    updateSort: true,
});

const Epaules = new Zdog.Shape({
    addTo: Torse,
    path: [{
        x: 0
    },
    {
        x: 10
    }
    ],
    color: "#d1ce00",
    stroke: 6,
    translate: {
        x: -5,
        y: -6
    }
});

const Logo_tshirt1 = new Zdog.Shape({
    addTo: Torse,
    path: [{
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
    path: [{
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
    path: [{
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
    color: "#d1ce00",
    stroke: 3.2
});

const Avant_Bras_R = Bras_R.copy({
    addTo: Bras_R,
    color: "#85530D",
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
    stroke: 4,
    color: "#85530D",
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
    stroke: 3.76,
    translate: {
        x: -0.5,
        y: -3,
        z: 0.5
    }
});



const Hanches = new Zdog.Cylinder({
    addTo: Torse,
    diameter: 6,
    length: torsoX * 3 - 1,
    translate: {
        y: 15
    },
    rotate: {
        x: -TAU,
        y: -TAU / 4
    },
    color: "#017d6b"
});

// const Hanches = new Zdog.Box({
//     addTo: Torse,
//     height: 6,
//     depth: 9.6,
//     width: 9.6,
//     translate: {
//         y: 15
//     },
//     rotate: {
//         x: -TAU,
//         y: -TAU / 4
//     },
//     color: "hsla(180, 25%, 20%,1)",
//     leftFace: "hsla(180, 25%, 20%,1)",
//     topFace: "yellow",
//     stroke: 2
// });

const Cuisse_R = new Zdog.Cylinder({
    addTo: Hanches,
    diameter: 4.8,
    translate: {
        x: -8.5,
        y: 0,
        z: -6
    },
    rotate: {
        y: TAU / 4 + 0.4
    },
    length: 12,
    color: "#017d6b"
});



const Genou_R = new Zdog.Shape({
    addTo: Cuisse_R,
    stroke: 5,
    color: "#017d6b",
    translate: {
        z: 8
    }
});

const Tibia_R = new Zdog.Cylinder({
    addTo: Genou_R,
    diameter: 4.8,
    translate: {
        x: 0,
        y: 7.5,
        z: 0
    },
    rotate: {
        x: -TAU / 4,
        y: 0
    },
    length: 12,
    color: "#017d6b"
});
const Chaussure_R = new Zdog.Shape({
    addTo: Tibia_R,
    path: [{
        y: 0
    }, {
        y: 4.8
    }],
    stroke: 4,
    color: "rgba(209, 75, 21,1)",
    translate: {
        x: 0,
        y: 0,
        z: 8
    },
    rotate: {
        x: -3,
        y: 1,
        z: 0.5
    }
});

const Lacet_CHaussure_R_1 = new Zdog.Shape({
    addTo: Chaussure_R,
    path: [{
        x: 0
    }, {
        x: 2.5
    }],
    translate: {
        x: 1.3,
        y: 2,
        z: 2
    },
    rotate: {
        x: 3,
        y: 1,
        z: -0.1
    },
    stroke: 0.5,
    color: "beige"
});
const Lacet_CHaussure_R_2 = Lacet_CHaussure_R_1.copy({
    translate: {
        x: 1.3,
        y: 3.25,
        z: 2
    }
});
const Lacet_CHaussure_R_3 = Lacet_CHaussure_R_1.copy({
    translate: {
        x: 1.3,
        y: 4.5,
        z: 2
    }
});

const Cuisse_L = Cuisse_R.copy({
    translate: {
        x: -8.5,
        y: 0,
        z: 6
    },
    rotate: {
        y: TAU / 4 - 0.4
    }
});
const Genou_L = Genou_R.copy({
    addTo: Cuisse_L
});
const Tibia_L = Tibia_R.copy({
    addTo: Genou_L
});

const Chaussure_L = new Zdog.Shape({
    addTo: Tibia_L,
    path: [{
        y: 0
    }, {
        y: 4.8
    }],
    stroke: 4,
    color: "rgba(209, 75, 21,1)",
    translate: {
        x: 0,
        y: 0,
        z: 8
    },
    rotate: {
        x: -3,
        y: 2,
        z: 0.5
    }
});

const Lacet_CHaussure_L_1 = new Zdog.Shape({
    addTo: Chaussure_L,
    path: [{
        x: 0
    }, {
        x: 2.5
    }],
    translate: {
        x: 1.3,
        y: 2,
        z: -2
    },
    rotate: {
        y: 1.2
    },
    stroke: 0.5,
    color: "rgba(245, 245, 245,1)"
});

const Lacet_CHaussure_L_2 = Lacet_CHaussure_L_1.copy({
    translate: {
        x: 1.3,
        y: 3.25,
        z: -2
    }
});

const Lacet_CHaussure_L_3 = Lacet_CHaussure_L_1.copy({
    translate: {
        x: 1.3,
        y: 4.5,
        z: -2
    }
});
