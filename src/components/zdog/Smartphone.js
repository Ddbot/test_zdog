import React from 'react';
import Zdog from 'zdog';

const {
    TAU
} = Zdog;

const Smartphone = new Zdog.Group({
    //   addTo: scene,
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
    color: 'hsla(0, 0%, 0%,1)',
    // backface: 'hsl(201, 38%, 25%)',
    backface: false,
    leftFace: 'hsl(201, 38%, 25%)',
    rightFace: 'hsl(201, 38%, 25%)',
    topFace: 'hsl(201, 38%, 25%)',
    // bottomFace: 'hsl(201, 38%, 25%)',
    bottomFace: false,
    translate: {
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
    color: 'hsla(115, 7%, 64%,1)'
});

const Line = new Zdog.Shape({
    addTo: SmartphoneScreen,
    path: [{ x: 0 }, { x: 1 }],
    color: 'hsla(188, 15%, 59%,1)',
    stroke: .2,
    translate: { x: -1, y: -2 }
});

const Line2 = Line.copy({ path: [{ x: 0 }, { x: 2 }], translate: { x: -1, y: -1.2 } });

const Line3 = Line2.copy({ translate: { x: -1, y: -.4 } });

const Box = new Zdog.Rect({
    addTo: SmartphoneScreen,
    width: 2,
    height: 1.8,
    color: 'hsla(188, 15%, 59%,1)',
    fill: true,
    stroke: .2,
    translate: { y: 1.4 }
});

const Triangle = new Zdog.Shape({
    addTo: Box,
    path: [{ x: 0, y: -.4 }, { x: .4, y: .4 }, { x: -.4, y: .4 }],
    fill: true,
    stroke: .2,
    color: 'hsla(300, 33%, 30%,1)'
});


export default Smartphone;