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
        x: 15,
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
