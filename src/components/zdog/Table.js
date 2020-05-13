import Zdog from 'zdog';

const Table = new Zdog.Box({
    translate: {
        y: 44.6,
        z: 14
    },
    width: 40,
    height: 27,
    depth: 15,
    stroke: 2,
    color: 'hsla(0, 0%, 100%,0)',
    // remove left & right faces
    leftFace: 'hsla(30, 50%, 35%,1)',
    rightFace: 'hsla(30, 50%, 30%,1)',
    rearFace: false,
    topFace: 'hsla(30, 51%, 20%,1)',
    bottomFace: false,
});

export default Table;