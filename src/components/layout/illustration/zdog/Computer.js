import Zdog from 'zdog';

const { TAU } = Zdog;

const Computer = new Zdog.Group({
    translate: {
        y: 24,
        z: 18
    },
    rotate: {
        x: -0.1
    }
})

const Keyboard = new Zdog.Box({
    addTo: Computer,
    width: 16,
    height: 32 / 3,
    color: 'hsla(240, 1%, 83%,1)',
    backface: 'whitesmoke',
    // backface:false,
    leftFace: 'whitesmoke',
    rightFace: 'whitesmoke',
    topFace: 'whitesmoke',
    // bottomFace: 'whitesmoke',
    bottomFace: true,
    translate: {
        y: 32 / 6,
        z: -32 / 6
    },
    rotate: {
        x: TAU / 4 - 3
    }
});

const Screen = new Zdog.Box({
    addTo: Computer,
    width: 32 / 3,
    height: 16,
    depth: 1,
    stroke: 1,
    color: 'whitesmoke',
    backface: 'white',
    leftFace: 'whitesmoke',
    rightFace: 'whitesmoke',
    topFace: 'whitesmoke',
    bottomFace: 'whitesmoke'
});



let bezel = new Zdog.Rect({
    width: 32 / 3,
    height: 16,
    stroke: 1.5,
    color: 'whitesmoke',
});

let t1 = new Zdog.Shape({
    path: [ // triangle
        {
            x: -1,
            y: 1
        },
        {
            x: 0,
            y: 3
        },
        {
            x: 1,
            y: 1
        },
    ],
    translate: {
        x: -2,
        y: 1
    },
    backface: false,
    // closed by default
    stroke: .1,
    color: 'hsla(59, 80%, 78%,1)',
    fill: true
});

let t2 = t1.copy({
    path: [{
        x: -1,
        y: 1
    }, {
        x: 1,
        y: 1
    }, {
        x: 0,
        y: -1
    }]
});

let t3 = t1.copy({
    path: [{
        x: 1,
        y: 1
    }, {
        x: 0,
        y: -1
    }, {
        x: 2,
        y: -1
    }],
    color: 'hsla(38, 82%, 77%,1)'
});
let t4 = t1.copy({
    path: [{
        x: 0,
        y: -1
    }, {
        x: 2,
        y: -1
    }, {
        x: 1,
        y: -3
    }],
    color: 'hsla(0, 83%, 73%,1)'
});

let t5 = t1.copy({
    path: [{
        x: 1,
        y: 1
    }, {
        x: 2,
        y: -1
    }, {
        x: 3,
        y: 1
    }],
    color: 'hsla(32, 82%, 76%,1)'
});

let t6 = t5.copy({
    path: [{
        x: 4,
        y: -1
    }, {
        x: 2,
        y: -1
    }, {
        x: 3,
        y: 1
    }]
});

let t7 = t1.copy({
    path: [{
        x: 1,
        y: -3
    }, {
        x: 2,
        y: -1
    }, {
        x: 3,
        y: -3
    }],
    color: 'hsla(15, 82%, 75%,1)'
});

let t8 = t7.copy({
    path: [{
        x: 4,
        y: -1
    }, {
        x: 2,
        y: -1
    }, {
        x: 3,
        y: -3
    }]
});

Screen.addChild(bezel);

Screen.rotate = {
    y: TAU / 2,
    z: TAU / 4
}

export default Computer;