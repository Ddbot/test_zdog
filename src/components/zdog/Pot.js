import React from 'react';
import Zdog from 'zdog';
import { Cone, Cylinder, Hemisphere } from 'react-zdog';

let { TAU } = Zdog;

const Pot = (props) => {
    return <Cylinder
    diameter={3}
    length={3}
    stroke={false}
    color={'yellow'}
    backface={'blue'}
    // translate={{ z: -2.25 }}
        rotate={{ x: TAU/4 }}
    />
}


export default Pot;
