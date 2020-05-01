import Zdog from 'zdog';

const { TAU } = Zdog;

let ConePattern = new Zdog.Anchor({
    scale: .5
});

const r = { x: 3, y: -Math.PI/16 };
    
new Zdog.Cone({
    // 1
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f38181',
    backface:  false,
    rotate: { x: -r.x, y: -r.y, z: 0 }
});

new Zdog.Cone({
    // 2
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f38c84',
    backface:  false,
    rotate: r,
    translate:{ x: -2, y: 4 }
});

new Zdog.Cone({
    // 3
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f3a389',
    backface: false,
    rotate: { x: -r.x, y: -r.y, z: 0 },
    translate:{ x: -4 }
});
              
new Zdog.Cone({
    // 4
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f4ba8e',
    backface: false,
    rotate: r,
    translate:{ x: -4 }
});
                    
new Zdog.Cone({
    // 5
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f4c590',
    backface: false,
    rotate: { x: -r.x, y: -r.y, z: 0 },
    translate:{ x: -2, y: -4 }
});

new Zdog.Cone({
    // 6
    addTo: ConePattern,
    id: "pointe",
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f4d193',
    backface: false,
    rotate: r
});
                
new Zdog.Cone({
    // 7
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f4dc95',
    backface: false,
    rotate: { x: -r.x, y: -r.y, z: 0 },
    translate:{ x: 2, y: -4 }
});

new Zdog.Cone({
    // 8
    addTo: ConePattern,
    diameter: 4,
    length:4,
    stroke:false,
    color: '#f4f39a',
    backface: false,
    rotate: r,
    translate:{ x: 2, y: -4 }
});

export default ConePattern;