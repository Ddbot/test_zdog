import React from 'react';
import Zdog from 'zdog';
import { Illustration, Cone } from 'react-zdog';
import ConePattern from './zdog/ConePattern';

const { TAU } = Zdog;

const Triangles = (props) => {
    return <Illustration
        className="illustration"
        index={props.index}
        zoom={4}
        rotate={{ z: -TAU / 4 }}>
            <ConePattern {...props}/>
    </Illustration>}

export default Triangles;