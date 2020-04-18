import React from 'react';
import Zdog from 'zdog';

import { Box, Group } from 'react-zdog';

const { TAU } = Zdog;

const Computer = () => {
    return <Group
        translate={{
        // x: 15,
        y: 24,
        z: 18
        }}
        rotate={{
            x: -0.1
        }}>
        {/* Bezel */}
        <Box
            width={16}
            height={32 / 3}
            depth={1}
            stroke={1}
            color={'rgba(1,1,1,.8)'}  // default face colo}
            backface={'lightgray'}
            leftFace={'lightgray'}
            rightFace={'lightgray'}
            topFace={'lightgray'}
            bottomFace={'lightgray'}>
        </Box>
        {/* Keyboard */}          
        <Box
            width={ 16}
            height={ 32/3}
            color={ 'rgb(211, 211, 212)'}
            backface={ 'lightgray'}
            leftFace={ 'lightgray'}
            rightFace={ 'lightgray'}
            topFace={ 'lightgray'}
            bottomFace={ 'lightgray'}
            translate={{
                y: 32 / 6,
                z: -32 / 6
            }}
            rotate={{
                x: TAU / 4 - 3
            }}/>
    </Group>
}

export default Computer;