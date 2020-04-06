import React from 'react';
import Zdog from 'zdog';
import { Illustration, Cone } from 'react-zdog';

const { TAU } = Zdog;

const Triangles = (props) => {

    return <Illustration index={props.index} zoom={1} rotate={{ z: TAU / 4 }}>
        <Cone diameter={24}
            // 1
            length={24}
            stroke={false}
            color={'#f38181'}
            backface = {'#f38c84'}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
        />

        <Cone diameter={24}
            // 2
            length={24}
            stroke={false}
            color={'#f38c84'}
            backface = {'#f38181'}
            rotate={props.rotation}
            translate={{ x: -12, y: 24 }}
        />
        <Cone diameter={24}
            // 3
            length={24}
            stroke={false}
            color={'#f3a389'}
            backface={'#f3a389'}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
            translate={{ x: -24 }}
        />
              
        <Cone
            // 4
            diameter={24}
            length={24}
            stroke={false}
            color={'#f4ba8e'}
            backface={'#f4ba8e'}
            rotate={props.rotation}
            translate={{ x: -24 }}
        />
                    
        <Cone diameter={24}
            // 5
            length={24}
            stroke={false}
            color={'#f4c590'}
            backface={'#f4c590'}
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
            backface={'#f4d193'}
            rotate={props.rotation}
        />
                
        <Cone diameter={24}
            // 7
            length={24}
            stroke={false}
            color={'#f4dc95'}
            backface={'#f4dc95'}
            rotate={{ x: -props.rotation.x, y: -props.rotation.y }}
            translate={{ x: 12, y: -24 }}
        />

        <Cone diameter={24}
            // 8
            length={24}
            stroke={false}
            color={'#f4f39a'}
            backface={'#f4f39a'}
            rotate={props.rotation}
            translate={{ x: 12, y: -24 }}
        />
                                          
        {/* <div className="dummy"></div> */}
    </Illustration>
}

export default Triangles;