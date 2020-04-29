import React from 'react';
import Zdog from 'zdog';
import { Illustration } from 'react-zdog';
import ConePattern from './zdog/ConePattern';

const { TAU } = Zdog;

const Triangles = (props) => {
    return <Illustration
        className="illustration"
        index={props.index}
        zoom={8}
        rotate={{ z: -TAU / 4 }}
        translate={{ x: 4, y: -8 }}
    >
            <ConePattern {...props}/>
    </Illustration>}

export default Triangles;