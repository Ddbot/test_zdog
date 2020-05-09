import React from 'react';
import Zdog from 'zdog';
import ConePattern from './zdog/ConePattern';

const { TAU } = Zdog;

const Triangles = (props) => {
    let triangles = new Zdog.Group({
        index: props.index,
        zoom: 8,
        rotate: { z: -TAU / 4 },
        translate: { x: 4, y: -8 },
    });

    return Triangles;
}
export default Triangles;