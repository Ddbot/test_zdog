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
    color: 'transparent',
    // remove left & right faces
    leftFace: '#86592d',
    rightFace: '#734d26',
    rearFace: false,
    topFace: '#4d3319',
    bottomFace: false,
});
    
export default Table;