import React from 'react';
import Zdog from 'zdog';

const { TAU } = Zdog;

const Pattern = (props) => {
//remplacer rotate: { x: 0, y: 0, z: 0 } par rotate: { x: 0, y: 0, z: 0 }
    let ConePattern = new Zdog.Anchor({});

new Zdog.Cone({
    // 1
    addTo: ConePattern,
    diameter: 24,
    length:24,
    stroke:false,
    color: '#f38181',
    backface:  false,
    rotate: { x: 0, y: 0, z: 0 }
});

new Zdog.Cone({
    addTo: ConePattern,
    diameter: 24,
    // 2
    length:24,
    stroke:false,
    color: '#f38c84',
    backface:  false,
    rotate: { x: 0, y: 0, z: 0 },
    translate:{ x: -12, y: 24 }
});

new Zdog.Cone({
    addTo: ConePattern, diameter:24,
    // 3
    length:24,
    stroke:false,
    color: '#f3a389',
    backface: false,
    rotate:{ x: 0, y: 0, z: 0 },
    translate:{ x: -24 }
});
              
new Zdog.Cone({
    addTo: ConePattern,
    // 4
    diameter:24,
    length:24,
    stroke:false,
    color: '#f4ba8e',
    backface: false,
    rotate: { x: 0, y: 0, z: 0 },
    translate:{ x: -24 }
});
                    
new Zdog.Cone({
    addTo: ConePattern, diameter:24,
    // 5
    length:24,
    stroke:false,
    color: '#f4c590',
    backface: false,
    rotate:{ x: 0, y: 0, z: 0 },
    translate:{ x: -12, y: -24 }
});

new Zdog.Cone({
    addTo: ConePattern,
    // 6
    id: "pointe",
    diameter:24,
    length:24,
    stroke:false,
    color: '#f4d193',
    backface: false,
    rotate: { x: 0, y: 0, z: 0 }
});
                
new Zdog.Cone({
    addTo: ConePattern,
    diameter: 24,
    // 7
    length:24,
    stroke:false,
    color: '#f4dc95',
    backface: false,
    rotate:{ x: 0, y: 0, z: 0 },
    translate:{ x: 12, y: -24 }
});

new Zdog.Cone({
    addTo: ConePattern, diameter:24,
    // 8
    length:24,
    stroke:false,
    color: '#f4f39a',
    backface: false,
    rotate: { x: 0, y: 0, z: 0 },
    translate:{ x: 12, y: -24 }
});


    return ConePattern
}

export default Pattern;