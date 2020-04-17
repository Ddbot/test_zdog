import React from 'react';
import Zdog from 'zdog';
import { Anchor, Cone, Cylinder, Hemisphere, Shape } from 'react-zdog';


let { TAU } = Zdog;
let Pointe = (props) => {
    return <Cone
    diameter={.72}
    length={.72}
    stroke={false}
    color={"#f4dc95"}
    backface={"#C25"} 
    />
}

let Mine = (props) => { 
    return <Cone
        diameter={.24}
        length={.24}
        stroke={false}
        color={"black"}
        backface={"black"}
        translate={{ z: .48}}  
        />
}

let Bois = (props) => {
    return <Cylinder
    diameter={.7}
    length={4.5}
    stroke={false}
    color={'blue'}
    backface={'#E62'}
    translate={{ z: -2.25 }}
    />
}

let Anneau = (props) => {
    return <Cylinder
        diameter={.7}
        length={.45}
            stroke={false}        
        color={'whitesmoke'}
            backface={'whitesmoke'}
        translate={{ z: -4.5 }}
    
    />
}




let Gomme = (props) => {
    return <Hemisphere
    diameter={.7}
    stroke={ false}
    color={ 'black'}
    backface={'white'}
    rotate={{
        x: Math.PI
    }}
    translate={{
        z: -4.75
    }}

/>}

const Pen = (props) => {
    return <Anchor
        scale={1}
        translate={{ x: 15, y: 25.5, z: 16 }}
        rotate={{ x: TAU / 4, y: -TAU/16}}>
        <Pointe />
        <Mine />
        <Bois />
        <Anneau />
        <Gomme />
    </Anchor>
}

export default Pen;
