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
    leftFace: '#002a24',
    rightFace: '#002a24',
    rearFace: false,
    topFace: '#002a24',
    bottomFace: false,
});

export default Table;