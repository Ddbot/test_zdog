import React from 'react';
import Zdog from 'zdog';
import { Cone } from 'react-zdog';

const { TAU } = Zdog;

const ConePattern = (props) => {
    return <>
        <Cone diameter={24}
            // 1
            length={24}
            stroke={false}
            color={'#f38181'}
            backface = {false}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
        />

        <Cone diameter={24}
            // 2
            length={24}
            stroke={false}
            color={'#f38c84'}
            backface = {false}
            rotate={props.rotation}
            translate={{ x: -12, y: 24 }}
        />
        <Cone diameter={24}
            // 3
            length={24}
            stroke={false}
            color={'#f3a389'}
            backface={false}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
            translate={{ x: -24 }}
        />
              
        <Cone
            // 4
            diameter={24}
            length={24}
            stroke={false}
            color={'#f4ba8e'}
            backface={false}
            rotate={props.rotation}
            translate={{ x: -24 }}
        />
                    
        <Cone diameter={24}
            // 5
            length={24}
            stroke={false}
            color={'#f4c590'}
            backface={false}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
            translate={{ x: -12, y: -24 }}
        />

        <Cone
            // 6
            id={"pointe"}
            diameter={24}
            length={24}
            stroke={false}
            color={'#f4d193'}
            backface={false}
            rotate={props.rotation}
        />
                
        <Cone diameter={24}
            // 7
            length={24}
            stroke={false}
            color={'#f4dc95'}
            backface={false}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
            translate={{ x: 12, y: -24 }}
        />

        <Cone diameter={24}
            // 8
            length={24}
            stroke={false}
            color={'#f4f39a'}
            backface={false}
            rotate={props.rotation}
            translate={{ x: 12, y: -24 }}
        />
    </>
}

export default ConePattern;