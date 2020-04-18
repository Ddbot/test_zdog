import React from 'react';
import Zdog from 'zdog';

import {
    Ellipse, Hemisphere, Rect
} from 'react-zdog';

const { TAU } = Zdog;

let Chair = () => {
    let DossierTop = () => {
        return <Ellipse
        diameter={20}
        quarters={2}
        stroke={3}
        color = {'#00264d'}
        rotate={{
            x: 3 / TAU / 4,
            z: -TAU / 4,
        }}
        translate={{
            // x: 10,
            y: 30,
            z: -10
        }}
        fill={true}
    />
    }

    let DossierMiddle = () => {
        return <Rect
        width={20}
        height={18}
        stroke={3}
        color = {'#00264d'}
            translate={{
                // x: 10,
                y: 39,
                z: -10,
            }}
        fill={true}
        />
    }

    let Pouf = () => {
        return <Ellipse
            width={10}
            height={20}
            stroke={8}
            color={'#00264d'}
            rotate={{
                x: TAU / 4,
                z: -TAU / 4,
            }}
            translate={{
                y: 45,
                // z: -5
            }}
            />
    }
        
    let StoolStand = () => {
        return  <Hemisphere
            diameter={20}
            // length={12}
            stroke={false}
            color={'#b3cccc'}
            backface={'#e6f2ff'}
            translate={{
                y: 59
            }}
            rotate={{ 
                x: TAU / 4
            }}
        />
    }      
    
    return <>
        <DossierTop />
        <DossierMiddle />
        <Pouf />
        <StoolStand />
    </>        
}

export default Chair;