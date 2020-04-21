import React from 'react';
import Zdog from 'zdog';
import { Cone, Cylinder, Hemisphere } from 'react-zdog';

let { TAU } = Zdog;

const Pot = (props) => {
    return <Cylinder
    diameter={3}
    length={3}
    stroke={false}
    color={'rgba(157, 169, 156, 0.9)'}
    // backface={'gray'}
        backface={false}
    translate={{ x: 14, y: 28.5, z: 16 }}
        rotate={{ x: TAU/4 }}
    />
}


export default Pot;
