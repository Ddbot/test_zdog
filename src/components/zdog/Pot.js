import Zdog from 'zdog';

let { TAU } = Zdog;

const Pot = new Zdog.Cylinder({
    diameter: 3,
    length: 3,
    stroke: false,
    color: 'hsla(115, 7%, 64%, 0.9)',
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


export default Pot;
