import React from 'react';
import Zdog from 'zdog';

import {
    Box,
    Group,
    Shape,
    Ellipse,
    Rect
} from 'react-zdog';

const {
    TAU
} = Zdog;

const Smartphone = () => {
    return <Group
        translate={{
        x: -15,
        y: 25,
        z: 18
        }}
        rotate={{
            x: 0,
            y: TAU/12
        }}>      
        <Box
            stroke={0.01}
            width={3}
            height={5.5}
            depth={.125}
            color={'black'}
            backface={'hsl(201, 38%, 25%)'}
            leftFace={'hsl(201, 38%, 25%)'}
            rightFace={'hsl(201, 38%, 25%)'}
            topFace={'hsl(201, 38%, 25%)'}
            bottomFace={'hsl(201, 38%, 25%)'}
            translate={{
                y: 32 / 6,
                z: -32 / 6
            }}
            rotate={{
                x: TAU / 4 - 3
            }}>
            <Ellipse
                diameter={0.8}
                // height={0.1}
                stroke={0.04}
                translate={{ x: .7, y: -2 }}
                fill={true}
                color={'#9da99c'}/>
            <Shape
                path={[{
                    x: 0
                }, {
                    x: 1
                    }]}
                color={'#87a3a7'}
                stroke={.2}
                translate={{ x: -1, y: -2}}/>
            <Shape
                path={[{ x: 0 }, { x: 2 }]}
                color={'#87a3a7'}
                stroke={.2}
                translate={{ x: -1, y: -1.2}}/>
            <Shape
                path={[{ x: 0 }, { x: 2 }]}
                color={'#87a3a7'}
                stroke={.2}
                translate={{ x: -1, y: -.4 }} />
            <Rect
                width={2}
                height={1.8}
                color={'#87a3a7'}
                fill={true}
                stroke={.2}
                translate={{ y: 1.4 }}>
                {/* triangle */}
                <Shape
                    path={[{ x:0, y:-.4 }, { x:.4, y:.4 }, { x:-.4, y:.4 }]}
                    fill={true}
                    // closed by default
                    stroke={.2}
                    color={'#636'}/>
            </Rect>
        </Box>
    </Group>
}
    
export default Smartphone;