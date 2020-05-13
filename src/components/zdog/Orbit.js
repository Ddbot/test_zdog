import React from 'react';
import Zdog from 'zdog';
import { Cone, Ellipse } from 'react-zdog';

const { TAU } = Zdog;

const Orbit = (props) => {
    return (
        <Ellipse
            width={70}
            height={120}
            stroke={.8}
            color={'hsla(0, 0%, 100%,1)'}
            rotate={{ y: -2 }}
        />
    )
}

export default Orbit;