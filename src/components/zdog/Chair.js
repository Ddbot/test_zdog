import Zdog from 'zdog';

const { TAU } = Zdog;

const Chair = new Zdog.Group({});

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
        x: TAU / 4,
        y: 0,
        z: TAU / 4
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
        y: TAU / 4,
        // z: TAU/2
    },
    closed: false,
    color: '#b3cccc',
    stroke: 2,
    // fill: false
});

export default Chair;